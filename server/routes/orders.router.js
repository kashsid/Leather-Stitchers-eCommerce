const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// will return data from project and tags table and join by id to get every project's tag"
router.get("/", (req, res) => {
  pool
    .query(
      `Select "orders"."order_id", "orders"."order_date","customer"."customer_first_name",
      "customer"."customer_last_name","orders"."order_comments","shipping_methods"."shipping_method_desc"
        from "orders" Join "customer" ON "customer"."customer_id" = "orders"."customer_id"
Join "shipping_methods" On "orders"."shipping_method_id" = "shipping_methods"."shipping_method_id";
`
    )
    .then(result => {
      orders = result.rows;
      console.log(orders);

      res.send(orders);
    })
    .catch(error => {
      console.log("errors with orders select", error);
      res.sendStatus(500);
    });
});

// router.post("/", (req, res) => {
//   console.log("order POST route was hit", req.body);
//   pool
//     .query(
//       `INSERT INTO "customer" (customer_email,customer_first_name,customer_last_name,
//         customer_address_street,customer_address_city,customer_address_state,customer_address_zip) 
//       VALUES ($1,$2, $3, $4, $5,$6,$7);`,
//       [
//         req.body.customer_email,

//         req.body.customer_first_name,
//         req.body.customer_last_name,
//         req.body.customer_address_street,
//         req.body.customer_address_city,
//         req.body.customer_address_state,
//         req.body.customer_address_zip
//       ]
//     )
//     .then(() => {
//       pool.query(
//         `INSERT INTO "orders" (order_tax,customer_id,customer_last_name,
//         customer_address_street,customer_address_city,customer_address_state,customer_address_zip) 
//       VALUES ($1,$2, $3, $4, $5,$6,$7);`,
//         [
//           req.body.customer_email,

//           req.body.customer_first_name,
//           req.body.customer_last_name,
//           req.body.customer_address_street,
//           req.body.customer_address_city,
//           req.body.customer_address_state,
//           req.body.customer_address_zip
//         ]
//       );
//     })
//     .then(() => {
//       res.sendStatus(201);
//     })
//     .catch(error => {
//       console.log("errors with feedback insert", error);
//       res.sendStatus(500);
//     });
// });

router.post("/", async (req, res) => {
  const client = await pool.connect();
//console.log('req body',req.body);
console.log("Products total value", req.body.checkout.cart);

  try {
    const {
      customer_email,
      customer_first_name,
      customer_last_name,
      customer_street_address,
      customer_city,
      customer_state,
      customer_zip,
      total,
      cart,
      Today,
      shipping,
      tax
    } = req.body;
    await client.query("BEGIN");
    const customerInsertResults = await client.query(
      `INSERT INTO "customer" (customer_email,customer_first_name,customer_last_name,
        customer_address_street,customer_address_city,customer_address_state,customer_address_zip) 
      VALUES ($1,$2, $3, $4, $5,$6,$7)
        RETURNING customer_id;`,
      [
        req.body.checkout.customer_email,
        req.body.checkout.customer_first_name,
        req.body.checkout.customer_last_name,
        req.body.checkout.customer_street_address,
        req.body.checkout.customer_city,
        req.body.checkout.customer_state,
        req.body.checkout.customer_zip
      ]
    );
    const customerId = customerInsertResults.rows[0].customer_id;
    await client.query;
    const orderInsertResults= await client.query(`INSERT INTO "orders" ("customer_id","order_tax","shipping_method_id"
    ,"order_date","order_total")  
    VALUES($1,$2,$3,$4,$5)
    RETURNING order_id `,
    [
      customerId,
      10,
      1,
      req.body.checkout.Today,
      req.body.checkout.total
    ]);
    console.log("order insert result", orderInsertResults);
    const orderId = orderInsertResults.rows[0].order_id;

   await Promise.all(req.body.checkout.cart.map(product => {
        const insertLineItemText = `INSERT INTO "order_details" ("order_id", "product_id","product_size","product_qty") VALUES ($1, $2, $3,$4)`;
        const insertLineItemValues = [orderId,product.product_id,product.sizeSelect, 1];
        return client.query(insertLineItemText, insertLineItemValues);
    }));

    await client.query("COMMIT");
    res.sendStatus(201);
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Error POST kash/order", error);
    res.sendStatus(500);
  } finally {
    client.release();
  }
});
module.exports = router;

