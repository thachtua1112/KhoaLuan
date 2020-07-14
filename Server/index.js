const express = require("express");

const app = express();

app.listen((PORT = 3000), () => {
  console.log("Server started on http://localhost:" + PORT);
});

module.exports = app;
