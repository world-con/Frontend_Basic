const user = {
  name: "김철수",
  age: 30,
  email: "kim@example.com",
  job: "개발자",
};

// 점 표기법으로 개별 변수에 객체의 값을 할당
// const name = user.name;
// const age = user.age;
// const email = user.email;
// const job = user.job;
// console.log(name, age, email, job);

// 구조분해할당으로 개별 변수에 객체값을 할당
// const { name: username, age, email, job } = user;
// console.log(userjmname, age, email, job);

//기본값을 줄 수 있다.
const { name: username, age, email, job, phone = "없음" } = user;
console.log(username, age, email, job, phone);

const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third);
