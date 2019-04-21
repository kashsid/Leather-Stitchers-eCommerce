const pg = require("pg");

// Setup pg to talk to our songs database
const Pool = pg.Pool;
const pool = new Pool({
    database: "leather_stitchers", // Database name
    host: "localhost",
    port: 5432,
    max: 10, // max connections in pool
    idleTimeoutMillis: 30000 // 30 seconds before timeout on query
});

// These pool.on's are not required for things to work,
// but are great for debugging.
pool.on("connect", () => {
    console.log("Postgres connected! Woot!");
});

pool.on("error", error => {
    console.log("Database error ", error);
});

module.exports = pool;
