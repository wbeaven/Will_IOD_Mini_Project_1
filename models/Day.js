let days = [
  {
    id: 1,
    customers: 0,
    transactions: 0,
    items: 0,
    money: 0,
    ipt: 0,
    atv: 0,
    conversion: 0,
  },
  {
    id: 2,
    customers: 0,
    transactions: 0,
    items: 0,
    money: 0,
    ipt: 0,
    atv: 0,
    conversion: 0,
  },
  {
    id: 3,
    customers: 0,
    transactions: 0,
    items: 0,
    money: 0,
    ipt: 0,
    atv: 0,
    conversion: 0,
  },
];
let lastId = 3;

module.exports = {
  findAll() {
    return days;
  },
  findOne(id) {
    return days.find((day) => day.id === id);
  },
  create(day) {
    const id = ++lastId;
    const newBook = {
      id,
      title: book.title,
    };
    days.push(newBook);
    return newBook;
  },
};
