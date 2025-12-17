console.log("변수");
// console.log("let과 const를 사용하는 것을 권장합니다.");
console.log("---------let----------");

let l1;
console.log(l1);

l1 = 100;
console.log(l1);

l1 = 900;
console.log(l1);

l1 = "apple";
console.log(l1);

let l2 = 0;
console.log(l2);

console.log("---------const----------");

// const는 반드시 값을 먼저 할당해줘야함.
const c1 = "c";

console.log("---------스코프----------");

function f() {
  const num = 1;
  console.log(num);
}
f();
