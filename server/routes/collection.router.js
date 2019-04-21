const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// will return all items from "tags" table on database ordered ascending by "name"
router.get("/", (req, res) => {
    console.log('in collection router');
    
    pool
        .query(`SELECT * FROM "collection" ORDER BY "collection_name" ASC;`)
        .then(result => {
            collection = result.rows;
            console.log(collection);
            res.send(collection);
        })
        .catch(error => {
            console.log("errors with projects select", error);
            res.sendStatus(500);
        });
});

module.exports = router;