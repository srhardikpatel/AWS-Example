const express = require("express");
const app = express();
const { resolve } = require("path");
const port = process.env.PORT || 3000;

// importing the dotenv module to use environment variables:
require("dotenv").config();

// ------------ Imports & necessary things here ------------

// Setting up the static folder:
// app.use(express.static(resolve(__dirname, "./client")));
 app.use(express.static(resolve(__dirname, process.env.STATIC_DIR)));

// ____________________________________________________________________________________

const domainURL = process.env.DOMAIN;

// Server listening:
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
  console.log(`You may access you app at: ${domainURL}`);
});
