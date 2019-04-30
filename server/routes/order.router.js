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
module.exports = router;
