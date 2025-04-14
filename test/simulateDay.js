let days = [];
lastId = 0;
let data = {};
function simulateDay() {
  let customers = Math.round(Math.random() * (625 - 200) + 200);
  let conversion = Math.random() * (20 - 10) + 10;
  let transactions = customers * (conversion / 100);

  let items = 0;
  for (let i = 0; i < transactions; i++) {
    items += Math.round(Math.random() * (3 - 1) + 1);
  }
  let ipt = items / transactions;
  let atv = Math.random() * (110 - 70) + 70;
  let earnings = atv * transactions;

  const dayNum = ++lastId;
  const newDay = {
    dayNum,
    customers: customers,
    transactions: Math.round(transactions),
    items: Math.round(items),
    earnings: Number(earnings.toFixed(2)),
    ipt: Number(ipt.toFixed(2)),
    atv: Number(atv.toFixed(2)),
    conversion: Number(conversion.toFixed(2)),
  };

  days.push(newDay);

  // fetch("http://localhost:5500/new", {
  //   method: "POST",
  //   body: JSON.stringify({ newDay }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  let tds = clon.querySelectorAll("td");
  const values = Object.values(newDay);
  tds.forEach((td, index) => {
    td.textContent = values[index] ?? "";
  });
  document.getElementById("day-stats").appendChild(clon);

  const container = document.getElementById("scrollable");
  container.scrollTop = container.scrollHeight;

  data = getWeek();
  updateChart(Object.keys(data), Object.values(data));
}

function getWeek() {
  const lastWeek = days.slice(-7);
  const result = lastWeek.reduce((obj, item) => {
    obj[item.dayNum] = item.earnings;
    return obj;
  }, {});
  return result;
}

function updateChart(labels, data) {
  myChart.data.labels = labels;
  myChart.data.datasets[0].data = data;
  myChart.update();
}

const removeDayById = (id) => {
  const targetId = days.findIndex((day) => day.id == id);
  days.splice(targetId, 1);
};

const button = document.getElementById("myButton");
button.addEventListener("click", function (e) {
  e.preventDefault();
  simulateDay();
});

const labels = Object.keys(data);
const values = Object.values(data).map(Number);

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Earnings Over Last 7 Days",
        data: values,
        borderColor: "hsl(240, 39%, 58%)",
        backgroundColor: "hsl(240, 30%, 50%)",
        tension: 0,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
      tooltip: {
        bodyColor: "white",
        titleColor: "white",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        min: 1000,
        max: 14000,
        ticks: {
          color: "white",
        },
      },
    },
  },
});

// const express = require("express");
// const app = express();
// app.use(express.json());
// app.use(express.static("../test"));

// app.listen(3000, () => {
//   console.log("Test app listening on port 3000");
// });
