import products from './data/Products.js';
import express from "express";
import dotenv from "dotenv";
import connectDatabase from './config/MongoDb.js';

//const cors = require("cors");
//var mysql = require('mysql');
dotenv.config();
connectDatabase();
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Sacha application." });
});

// load products
app.get("/api/products", (req, res) => {
  res.json(products);
});
// load single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  console.log(product)
  res.json(product);
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});