let day = {
  customers: 0,
  transactions: 0,
  items: 0,
  money: 0,
  ipt: 0,
  atv: 0,
  conversion: 0,
};

class Day {
  constructor(
    dayNum,
    customers,
    transactions,
    items,
    money,
    ipt,
    atv,
    conversion
  ) {
    this.dayNum = dayNum;
    this.customers = customers;
    this.transactions = transactions;
    this.items = items;
    this.money = money;
    this.ipt = ipt;
    this.atv = atv;
    this.conversion = conversion;
  }
}

const day1 = new Day(1, 500, 50, 105, 3680, 2.16, 10);
console.log(day1);
// const myCar2 = new Car("Audi", 2019);

function simulateDay() {
  day.customers = Math.round(Math.random() * (625 - 200) + 200);
  day.conversion = Math.random() * (20 - 10) + 10;
  day.transactions = day.customers * (day.conversion / 100);

  for (let i = 0; i < day.transactions; i++) {
    day.items += Math.round(Math.random() * (4 - 0) + 0);
    day.money += Math.random() * (200 - 14.99) + 14.99;
  }
  day.ipt = day.items / day.transactions;
  day.atv = day.money / day.transactions;
}

simulateDay();
console.log(
  `Customers: ${day.customers}, transactions: ${Math.round(
    day.transactions
  )}, items: ${Math.round(day.items)}, money: $${day.money.toFixed(
    2
  )}, ipt: ${day.ipt.toFixed(2)}, atv; ${day.atv.toFixed(
    2
  )}, conversion; ${day.conversion.toFixed(2)}%`
);

// function randn_bm(min, max, skew) {
//   let u = 0,
//     v = 0;
//   while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
//   while (v === 0) v = Math.random();
//   let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

//   num = num / 10.0 + 0.5; // Translate to 0 -> 1
//   if (num > 1 || num < 0) num = randn_bm(min, max /*, skew*/);
//   // resample between 0 and 1 if out of range
//   else {
//     // num = Math.pow(num, skew); // Skew
//     num *= max - min; // Stretch to fill range
//     num += min; // offset to min
//   }
//   return num;
// }
