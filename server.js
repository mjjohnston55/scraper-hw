const cheerio = require("cheerio");
const axios = require("axios");
const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.engine('handlebars', expbs({ 
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
  res.render('./index');
})

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedArticles"];

// // Connect mongojs to db
// var db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// Retrieve data from the db
app.get("/all", function(req, res) {
  // Find all results from the scrapedData collection in the db
  db.scrapedData.find({}, function(error, found) {
    // Throw any errors to the console
    if (error) {
      console.log(error);
    }
    // If there are no errors, send the data to the browser as json
    else {
      res.json(found);
    }
  });
});



// server start
app.listen(3000, () => {
  console.log('Server is starting at port ', 3000);
});

