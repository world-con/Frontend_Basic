console.log("----------Truthy와 Falsy-----------");
// 조건문 안에서 false로 평가되는 값
// 0, -0, "", undefined, null, NaN, 0n
// [], {} => Truthy

const f = null;
if (f) {
  console.log(true);
} else {
  console.log(false);
}

console.log("----------단축평가----------");
const isAdmin = true;
isAdmin && console.log("관리자 메뉴에 접근할 수 있습니다.");
// isAdmin이 true일 때만 메시지가 출력됩니다.

// 왼쪽이 false이면 오른쪽 출력
const isLoggedIn = false;
isLoggedIn || console.log("로그인하세요.");

const user = {};
user && user.name && console.log(`안녕하세요, ${user.name}님!`);

// 이름이 있으면 이름 출력, 없으면 '이름 없음' 문구가 출력
const name = "";
const displayName = name || "이름 없음";
console.log(displayName); // "이름 없음"
console.log("----------삼항연산자---------");
