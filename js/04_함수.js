// function 함수명
function sayhello(name) {
  return `hello ${name}`;
}

console.log(sayhello("김철수"));

console.log("---------함수표현식----------");
// 순서를 바꿔쓸 수 없다.
// 함수의 이름을 선언하지않는다.
const add = function (x, y) {
  return x + y;
};

console.log(add(1, 2));

console.log("----------화살표함수----------"); // ES6+
// () =>()
const add2 = (x, y) => {
  return x + y;
};
console.log(add2(2, 2));

// ()=>{}
const sayhello = (userName) => {
  return `hello ${userName}`;
};
HTMLFormControlsCollection.log();

// 합격여부 리턴하는 화살표 함수 작성
(score) => {
  return (score = 60);
};

// 화살표 함수작성
const area = (r) => Math.PI * r ** 2;
