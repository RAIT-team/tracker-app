const express = require("express");
const app = express();
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

app.use(express.static(path.join(__dirname, "app-frontend/build")));

// Use the routes defined in pageRoutes.js
app.use("/", pageRoutes);
module.exports = app;
