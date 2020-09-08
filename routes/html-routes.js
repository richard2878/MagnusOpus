const router = require("express").Router();
const path = require("path");
// Basic route that sends the user first to the AJAX Page
router.get("/vendors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vendor_folder/view.html"));
  });
  
router.get("/addvendors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vendor_folder/add.html"));
  });
  
  // Displays all vendors
router.get("/api/vendors", function(req, res) {
    return res.json(vendors);
  });
  router.get("/seats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/seats.html"));
  });

  router.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  

module.exports = router;