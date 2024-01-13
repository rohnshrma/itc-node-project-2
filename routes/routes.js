const express = require("express")
const router = express.Router()

const controllers = require("../controllers/controller.js")

const {GET_HOME,GET_ABOUT,GET_CONTACT} = controllers

router.get("/", GET_HOME)
router.get("/about", GET_ABOUT)
router.get("/contact", GET_CONTACT)



// export router
module.exports = router



