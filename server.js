require('dotenv').config();
const express = require("express");
const path = require('path');

//const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + '/client/dist/client'));
}

// Add routes, both API and view
//app.use(routes);
app.get('/*', function(request, response) {
  response.sendFile(path.join( __dirname + '/client/dist/client/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});