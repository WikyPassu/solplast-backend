const Product = require("../models/product.model");

exports.findAll = async (req, res, next) => {
  try {
    const data = await Product.getAll();
    res.send(data);
  } catch (err) {
    next({ status: 500, name: "MySQLError", msg: err.message });  
  }
};