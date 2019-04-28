const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// will return data from project and tags table and join by id to get every project's tag"
router.get("/", (req, res) => {
  pool
    .query(
      `SELECT "products"."product_id","products"."product_description", "product_price", "product_qty", "product_short_attr","product_image",  "collection"."collection_id", "collection"."collection_name"  FROM "products"
    JOIN "collection" ON "collection"."collection_id"="products"."collection_id"
    ORDER BY "products"."product_id" DESC;
`
    )
    .then(result => {
      products = result.rows;
      //console.log(products);

      res.send(products);
    })
    .catch(error => {
      console.log("errors with products select", error);
      res.sendStatus(500);
    });
});

router.get("/selected/:id", (req, res) => {
    console.log('in selected route',req.params.id);
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
        console.log('in router selected',selectedproduct);

        res.send(selectedproduct);
      })
      .catch(error => {
        console.log("errors with selected product query", error);
        res.sendStatus(500);
      });
});

// will receive new project data and insert into the database on "projects" table .
// router.post("/", (req, res) => {
//     console.log("project POST route was hit", req.body);
//     pool
//         .query(
//             `INSERT INTO "projects" (name, date_completed, tag_id, github, website, description) 
//       VALUES ($1,$2, $3, $4, $5, $6);`,
//             [
//                 req.body.name,
//                 req.body.selectedDate,
//                 req.body.selectedTag,
//                 req.body.gitHubUrl,
//                 req.body.websiteUrl,
//                 req.body.description
//             ]
//         )
//         .then(() => {
//             res.sendStatus(201);
//         })
//         .catch(error => {
//             console.log("errors with feedback insert", error);
//             res.sendStatus(500);
//         });
// });
// // Will delete the project for the supplied id
router.delete("/:id", (req, res) => {
    console.log(req.params.id);
    pool
        .query(`DELETE FROM "products" WHERE "product_id" IN ($1);`, [req.params.id])
        .then(() => {
            res.sendStatus(204);
        })
        .catch(error => {
          
            console.log("errors with product delete query", error);
            res.sendStatus(500);
        });
});
module.exports = router;
