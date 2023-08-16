const productController = require("../controllers/product.controller");
const productRouter = require("express").Router();

productRouter.get("/", productController.findAll);

module.exports = productRouter;