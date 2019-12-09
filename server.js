const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');

app.engine('handlebars', expbs({ 
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
  res.render('./index', {layout:false});
})

app.get('/about', (req, res) => {
  res.render('about', {layout:false});
})

app.listen(3000, () => {
  console.log('Server is starting at port ', 8080);
});

// var cheerio = require("cheerio");
// var axios = require("axios");

// axios.get("https://www.newegg.com/").then(function(response) {

//   // Load the HTML into cheerio and save it to a variable
//   // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//   var $ = cheerio.load(response.data);

//   // An empty array to save the data that will be scraped
//   var results = [];

//     // Select div elements to be scraped
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
