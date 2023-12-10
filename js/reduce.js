// const numbers = [5, 6, 7, 8, 9];
// const random_number = Math.random();
// console.log(random_number);

// const total = numbers.reduce((acc, number) => acc + number, random_number);
// console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (acc, value) => acc + value,
  0
);
console.log(totalSalary);
