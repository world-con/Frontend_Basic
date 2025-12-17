"use strict";

console.log("----------조건문----------");

let score = 90;
if (score >= 60) {
  console.log("합격입니다.");
} else if (score === 60) {
  console.log("턱걸이로 합격하셨습니다.");
} else {
  console.log("불합격입니다.");
}

console.log("-----------삼항연산자------------");
// 조건 ? 참일때 실행할거 : false일때 실행할 거
const result = score > 60 ? "합격" : "불합격";
console.log(result);

console.log("-----------반복문----------");
// for (초기식 ; 조건식 ; 증감식) { }
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 1부터 10까지 합
let total = 0;
for (let i = 1; i < 11; i++) {
  total += i;
}
console.log(total);

//구구단 3단 출력하는 반복문
let number = 1;
for (let i = 1; i < 10; i++) {
  number = 3 * i;
  console.log(`3 * ${i} = ${number}`);
}

const fruits = ["사과", "바나나", "오렌지"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i in fruits) {
  //인덱스
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  //요소값
  console.log(fruit);
}
