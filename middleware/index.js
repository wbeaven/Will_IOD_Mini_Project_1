const express = require("express");
const Day = require("./models/Day");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/days", (req, res) => {
  res.send(Day.findAll());
});

app.listen(port, () => {
  console.log(`express server is listening to port ${port}`);
});
