const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num, idx) => {
//   return num *idx;
// });

const doubled = numbers.map((num) => {
  num * 2;
});
console.log(doubled);

// 객체 배열 다루기
const users = [
  { id: 1, name: "철수", age: 25 },
  { id: 2, name: "영희", age: 20 },
  { id: 3, name: "민수", age: 28 },
];

//name만 추출해서 새로운 배열 만들기
// const names = users.map((user) => {
//   return user.name;
// });
const names = users.map((user) => user.name);
console.log(names);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//짝수만 필터링
const evens = nums.filter((nums) => {
  return nums % 2 === 0;
});
console.log(evens);

//객체 배열에서 조건 필터링
const members = [
  { id: 1, name: "철수", age: 25, isActive: true },
  { id: 2, name: "영희", age: 30, isActive: false },
  { id: 3, name: "민수", age: 28, isActive: true },
];
// const activeMembers = members.filter((mem) => {
// return mem.isActive;
// });
const activeMembers = members.filter((mem) => mem.isActive);
console.log(activeMembers);

const products = [
  { id: 1, name: "노트북", price: 1000000, inStock: true },
  { id: 1, name: "마우스", price: 30000, inStock: false },
  { id: 1, name: "키보드", price: 80000, inStock: true },
  { id: 1, name: "모니터", price: 300000, inStock: true },
];

// const availableProducts = products.filter((products) => {
//   return products.inStock;
// });
// console.log(availableProducts);

const availableProducts = products
  .filter((product) => product.inStock)
  .map((product) => product.name);

console.log(availableProducts); // ["노트북", "키보드", "모니터"]
