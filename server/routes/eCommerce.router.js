const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


router.get("/:id", (req, res) => {
  console.log("in selected route", req.params.id);
  pool
    .query(
      `Select "products"."product_id","products"."product_description",
        "products"."product_short_attr","products"."product_price","product_images"."image_path"
         FROM "products" 
        JOIN "product_images" ON "product_images"."product_id"= "products"."product_id"  
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

module.exports = router;

