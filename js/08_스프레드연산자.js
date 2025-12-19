const original = [1, 2, 3];
const copy = [...original];

//배열 결합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

const newArr = [...original, 4, 5];
console.log(newArr);

//객체 복사
const original2 = { name: "홍길동", age: 25 };
const original3 = { ...original2 };
console.log(original3);

//객체 병합
const info = { name: "홍길동" };
const details = { age: 25, city: "서울" };
const merged = { ...info, ...details };
// { name: '홍길동', age: 25, city: '서울' }

//속성 추가(이메일)
const user = { name: "홍길동", age: 25 };
const user2 = { ...user, email: "abc@naver.com" };
// { name: '홍길동', age: 25, city: '서울' }

//속성 수정(age)
const user3 = { ...user, age: 26 };
console.log(user3);
