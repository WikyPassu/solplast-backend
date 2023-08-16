const mysql = require("../db/mysql");

function Product({ description, category, brand, image }) {
  this.description = description;
  this.category = category;
  this.brand = brand;
  this.image = image;
};

Product.getAll = async () => {
  const query = "SELECT description, category, brand, image FROM products ORDER BY category, description";
  try {
    const results = await mysql.executeQuery(query);
    return results.map(row => new Product(row));
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = Product;