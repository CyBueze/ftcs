const express = require("express")
const homeController = require("../controllers/homeController")
const router = express.Router()

//create route for index routes
router.get("", homeController.getHomePage)

module.exports = router