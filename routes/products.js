const express = require('express');
const router = express.Router();

const {getProducts ,getNewProducts} = require("../controllers/products")

router.route("/").get(getProducts);

router.route("/new").get(getNewProducts);


module.exports = router;