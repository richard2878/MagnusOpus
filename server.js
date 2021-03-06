// Dependencies
// =============================================================
var express = require("express");
require("dotenv").config()
const db = require("./models")
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// Vendors (DATA)
// =============================================================
var vendors = [


];

// Routes
// =============================================================
app.use(apiRoutes);
app.use(htmlRoutes);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync({force: false}).then(() => app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}));
