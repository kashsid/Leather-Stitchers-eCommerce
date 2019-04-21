const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
 const productRouter = require("./routes/product.router");
const collectionRouter = require("./routes/collection.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

/** ---------- ROUTES ---------- **/
app.use("/products", productRouter);
app.use("/collections", collectionRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log("Listening on port: ", port);
});
