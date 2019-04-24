const express = require("express");
const app = express();
require("dotenv").config();
// Body parser middleware
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");
// Route includes
const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");
const ordersRouter = require("./routes/orders.router");
const collectionsRouter = require("./routes/collections.router");
const ecommerceRouter = require ("./routes/eCommerce.router")


//const collectionRouter = require("./routes/collection.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());
/** ---------- ROUTES ---------- **/
app.use("/api/user", userRouter);
//app.use("/ecommerce-page", productRouter);
app.use("/products", productRouter);
app.use("/orders", ordersRouter);
app.use("/collections", collectionsRouter);
app.use("/selectedproduct", ecommerceRouter);


//app.use("/collections", collectionRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
















