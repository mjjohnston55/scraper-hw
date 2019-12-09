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

app.listen(3000, () => {
  console.log('Server is starting at port ', 8080);
});

// // Make a request via axios to grab the HTML body from the site of your choice
// axios.get("https://old.reddit.com/r/worldnews/").then(function(response) {

//   // Load the HTML into cheerio and save it to a variable
//   // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//   var $ = cheerio.load(response.data);

//   // An empty array to save the data that we'll scrape
//   var results = [];

//   // Select each element in the HTML body from which you want information.
//   // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//   // but be sure to visit the package's npm page to see how it works
//   $("div.").each(function(i, element) {

//     var title = $(element).text();


//     var link = $(element).find("$icon-premier icon-premier-xsm").attr("href");

//     // Save these results in an object that we'll push into the results array we defined earlier
//     results.push({
//       title: title,
//       link: link
//     });
//   });

//   // Log the results once you've looped through each of the elements found with cheerio
//   console.log(results);
// });
