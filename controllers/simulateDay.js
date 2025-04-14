let days = [
  {
    dayNum: 1,
    customers: 0,
    transactions: 0,
    items: 0,
    earnings: 0,
    ipt: 0,
    atv: 0,
    conversion: 0,
  },
];
lastId = 1;

const simulateDay = () => {
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
};

// simulateDay();
// simulateDay();
// simulateDay();
// simulateDay();
// simulateDay();
// simulateDay();
// console.log(days);

const getDays = () => {
  return days;
};
const removeDayById = (id) => {
  const targetId = days.findIndex((day) => day.id == id);
  days.splice(targetId, 1);
};

module.exports = {
  simulateDay,
  getDays,
  removeDayById,
};
