const express = require("express");
const router = express.Router();
const path = require("path");

// // Define a route for the landing page
// router.get("/", (req, res) => {
//   const filePath = path.join(
//     __dirname,
//     "../../app-frontend",
//     "src/landingpage/landingpage.js"
//   );
//   res.setHeader("Content-Type", "application/javascript");
//   res.sendFile(filePath);
// });

// // Define a route for the login page
// router.get("/login", (req, res) => {
//   res.setHeader("Content-Type", "application/javascript");
//   res.sendFile(path.join(__dirname, "../../app-frontend", "src/index.js"));
// });

module.exports = router;
