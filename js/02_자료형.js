console.log("----------String----------");
const greeting = "안녕하세요";
const name = "김철수";
const message = `
김철수님
안녕하세요
`;
console.log(name);
console.log(message);

const message2 = `${name}님 안녕하세요.`;
console.log(message2);

console.log("----------Number----------");
const age = 25;
const price = 19.99;
const negative = -1;

console.log(typeof age);
console.log(typeof price);
console.log(typeof message);

console.log(typeof negative);

console.log("----------boolean----------");
const a = 1;
const b = "1";
console.log(a == b);
console.log(a != b);
console.log(a === b); // 동등비교
console.log(a !== b);

console.log("----------자료형 변환(명시적)----------");
let x;
let y;

x = 100;
y = String(100);
console.log(typeof x, typeof y);

y = Number("100");
console.log(typeof y); // string

y = Number("3.14");
console.log(typeof y); // number

y = parseInt("3.14");
console.log(y, typeof y); // 3.14, number

x = 100;
y = x.toString();
console.log(y, typeof y);

console.log("----------자료형 변환(암묵적)----------");
let result;
result = "10" + 5; // 105
result = "10" + undefined;
result = "10" * 5;
result = "10" * null; // 0
console.log(result); // 105

console.log("----------배열----------");
const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits[-1]); // 파이썬과 다르게 음수 인덱싱 불가
console.log(fruits[10]);
console.log(fruits.length);

fruits.push("포도");
console.log(fruits);

console.log("----------객체----------");
const person = {
  name: "홍길동",
  age: 25,
  isStudent: true,
};

console.log(person["name"]);
console.log(person.name);
// person.name = "김철수"; // 1번째 방식
person["name"] = "김철수"; // 2번째 방식
console.log(person["name"]);
console.email = "abc@naver.com";
console.log(person);

console.log("----------증갑연산자----------");
let num1 = 10;
console.log(num1++);
console.log(num1);

console.log("----------논리연산자----------");
console.log(true && false);
