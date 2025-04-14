// const express = require("express");
// const Day = require("../models/Day");

// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get("/days", (req, res) => {
//   res.send(Day.findAll());
// });

// app.listen(port, () => {
//   console.log(`express server is listening to port ${port}`);
// });

const routes = require("../routes");

const button = document.getElementById("myButton");
button.addEventListener("click", function (e) {
  alert("button was clicked");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  simButton();
});

function simButton() {
  fetch("http://localhost:3000/new", {
    method: "POST",
    body: JSON.stringify({
      /* day variables here */
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      todos.push(data);
    });
}
routes.simulateDay;
app.post("/new", (req, res) => {
  const { title, desc } = req.body;
  const day = simulateDay();
  if (!todo) res.send(403);
  res.send(todo);
});
