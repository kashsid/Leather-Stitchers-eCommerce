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


// router.put("/:id", (req, res) => {
//     console.log(req.params.id);
//     let feature= req.body.
// if (direction === "up") {
//   // use rank-1, so it get's closer to the awesome rank of 1
//   sqlText = `UPDATE songs SET rank=rank-1 WHERE id=$1`;
// } else if (direction == "down") {
//   sqlText = `UPDATE songs SET rank=rank+1 WHERE id=$1`;
// } else {
//   // If we don't get an expected direction, send back bad status
//   res.sendStatus(500);
//   return; // Do it now, don't run code below
// }

//     pool
//         .query(`DELETE FROM "projects" WHERE "id" IN ($1);`, [req.params.id])
//         .then(() => {
//             res.sendStatus(204);
//         })
//         .catch(error => {
//             console.log("errors with project delete query", error);
//             res.sendStatus(500);
//         });
// });

module.exports = router;