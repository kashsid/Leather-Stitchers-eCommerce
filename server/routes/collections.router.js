const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// will return all items from "tags" table on database ordered ascending by "name"
router.get("/", (req, res) => {
    console.log('in collection router');
    
    pool
        .query(`SELECT * FROM "collection" ORDER BY "collection_name" ASC;`)
        .then(result => {
            collections = result.rows;
            console.log(collections);
            res.send(collections);
        })
        .catch(error => {
            console.log("errors with projects select", error);
            res.sendStatus(500);
        });
});


router.put("/:id", (req, res) => {
  let collectionId = req.params.id;
  let collectionData = req.body;
  console.log(`Updating collection id=${collectionId} with feature`, collectionData);
  let sqlText = `UPDATE "collections" SET "collection_feature_flg"=$1 WHERE "id"=$2;`;
  pool
    .query(sqlText, [collectionData.feature, collectionId])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(
        `Failed to update collection with id=${songId}, 
          setting featured collection to ${songData.rank}.`,
        error
      );
      res.sendStatus(500);
    });
});


module.exports = router;