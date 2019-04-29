const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


router.get("/:id", (req, res) => {
  console.log("in selected route", req.params.id);
  pool
    .query(
      `Select "products"."product_id","products"."product_description",
        "products"."product_short_attr","products"."product_price","products"."product_image"
         FROM "products" 
        where "products"."product_id" IN ($1);`,
      [req.params.id]
    )
    .then(result => {
      selectedproduct = result.rows;
      console.log("in router selected", selectedproduct);

      res.send(selectedproduct);
    })
    .catch(error => {
      console.log("errors with selected product query", error);
      res.sendStatus(500);
    });
});


router.get("/:id", (req, res) => {
  console.log("in images route", req.params.id);
  pool
    .query(`Select * from product_images where product_id IN ($1);`, [
      req.params.id
    ])
    .then(result => {
      selectedImages = result.rows;
      console.log("in router selected", selectedImages);

      res.send(selectedImages);
    })
    .catch(error => {
      console.log("errors with selected product iamges query", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log("project POST route was hit", req.body);
  pool
    .query(
      `INSERT INTO "products" (product_description, product_price, product_short_attr
        , product_qty,collection_id) 
      VALUES ($1,$2, $3, $4, $5);`,
      [
        req.body.description,

        req.body.price,
        req.body.shortAttr,
        req.body.quantity,
        req.body.selectedCollection
      ]
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("errors with feedback insert", error);
      res.sendStatus(500);
    });
});

module.exports = router;

