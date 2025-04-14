const express = require("express");
const {
  simulateDay,
  getDays,
  delDayById,
} = require("../controllers/SimulateDay");

const app = express();
app.use(express.json());
app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.send(getDays());
});

// app.post("/new", (req, res) => {
//   const { title, desc } = req.body;
//   const todo = simulateDay();
//   if (!todo) res.send(403);
//   res.send(todo);
// });

// app.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   if (delTodoById(id)) {
//     res.send(204);
//   } else {
//     res.send(403);
//   }
// });

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
