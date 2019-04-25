const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  console.log("in images route", req.params.id);
  pool
    .query(`Select image_path from product_images where product_id IN ($1);`, [
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
