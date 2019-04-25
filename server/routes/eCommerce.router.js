const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


router.get("/:id", (req, res) => {
  console.log("in selected route", req.params.id);
  pool
    .query(
      `Select "products"."product_id","products"."product_description",
        "products"."product_short_attr","products"."product_price"
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

module.exports = router;

