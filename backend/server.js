const express = require("express");
// instantiate express
const app = express();
const port = 3000;

// run the server locally on the desired port, use the following link to open up the server http://localhost:3000`
app.listen(port, () => {
  // will log to the command line when the server starts
  console.log(`Example app listening at http://localhost:${port}`);
});