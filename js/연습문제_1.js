//연습문제1
// 구조 분해 할당 사용하기
const person = { name: "홍길동", age: 30, city: "서울" }; // name과 city만 꺼내보세요

const { name, city } = person;
console.log(name); //홍길동
console.log(city); //서울

//연습문제 2
const user = { name: "Tom", age: 20, city: "Seoul" };

// 여기에 함수 작성
const printUser = ({ name, age, city }) => {
  console.log(`이름:${name}, 나이:${age}`);
};
printUser(user);
// 함수 호출 예시: printUser(user);
// 출력: "이름: Tom, 나이: 20"

//연습문제 3

const arr = [3, 7, 10];

//여기에 함수 작성
const sumFirstTwo = ([num1, num2]) => {
  console.log(num1 + num2);
};
sumFirstTwo(arr);
//함수 호출 예시: sumFirstTwo(arr);
//결과: 10

// 연습문제 1
// 문제 1: 다음 점수 배열에서 80점 이상인 점수만 필터링하세요
const scores = [95, 72, 88, 63, 91, 55, 87];

const passScores = scores.filter((score) => score >= 80);
console.log(passScores);
