// Chapter 6
// String
// ', " , `

// HTML의 코드는 작은 따옴표로 감싸는 게 편하다.
// let html = '<div class="box_title">제목 영역</div>';
// console.log(html);

// 영어로 된 문장은 큰 따옴표로 감싸는 게 편하다.
// let desc = "It's 3 o'clock";
// console.log(desc);

// backtick은 $와 중괄호를 이용해 변수를 표현하거나 표현식을 사용할 수 있다.
// let name = 'Mike';
// let result = `My name is ${name}`; // My name is Mike
// let add = `2 더하기 3은 ${2+3}입니다.`; // 2 더하기 3은 5입니다.
// console.log(result);
// console.log(add);

// backtick은 여러 줄을 표현할 때도 유용하다.
// 따옴표는 \n을 사용해야 하며, 줄 바꿈을 할 시 에러가 발생됨
// let desc = `오늘은 맑고 화창한
// 날씨가 계속 되겠습니다.
// 내일은 비소식이 있습니다.`;
// let desc2 = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.\n내일은 비소식이 있습니다.';
// console.log(desc);
// console.log(desc2);

// length : 문자열 길이
// 배열과 동일하게 문자열의 길이도 구할 수 있음
// 비밀번호나 아이디의 길이를 제한할 때 사용
// let desc = '안녕하세요.';
// console.log(desc.length); // 6

// 특정 위치에 접근
// 배열과 동일하게 문자열도 인덱스를 사용하여 특정 위치의 문자에 접근 가능 (인덱스는 0부터 시작)
// let desc = '안녕하세요.';
// console.log(desc[2]); // 하
// 배열과 다르게 한 글자만 바꾸는 건 어려움
// desc[4] = '용';
// console.log(desc); // 안녕하세요.

// toUpperCase() / toLowerCase() : 영어를 대/소문자로 변환
// let desc = 'Hello Guys';
// console.log(desc.toUpperCase());
// console.log(desc.toLowerCase());

// str.indexOf(text) : 문자를 인자로 받아 어느 위치에 있는지 알려줌
// 단, 포함된 문자가 여러 개여도 첫 번째 문자의 위치만 반환
// 없는 경우, -1을 반환
// let desc = 'Hello Guys';
// console.log(desc.indexOf('Guys')); // 6
// console.log(desc.indexOf('to')); // -1

// indexOf 주의 사항
// 비교문에 반드시 -1보다 큰지에 대한 조건을 추가해야 함
// if(desc.indexOf('Hi')) { // 잘못된 동작 (0을 반환 -> 이는 false)
// if(desc.indexOf('Hi') > -1) { // 옳은 동작
//     console.log('Hi가 포함되어 있습니다.')
// }

// str.slice(n,m) : 특정 범위의 문자열만 추출
// n : 시작점, m : 없으면 문자열 끝까지, 양수면 그 숫자까지 (포함 X), 음수면 끝에서부터 셈
// let desc = "abcdefg";
// console.log(desc.slice(2)); // "cdefg"
// console.log(desc.slice(0,5)); // "abcde"
// console.log(desc.slice(2,-2)); // "cde"

// str.substring(n,m) : n과 m사이 문자열 반환
// slice와 유사하나, n과 m의 순서를 바꿔도 동작함
// 음수는 0으로 인식
// let desc = "abcdefg";
// console.log(desc.substring(2,5)); // "cde"
// console.log(desc.substring(5,2)); // "cde"

// str.substr(n,m) : n부터 시작, m개를 가져옴
// substring()과 유사하나 동작 방식이 다름
// let desc = "abcdefg";
// console.log(desc.substr(2,4)); // "cdef"
// console.log(desc.substr(-4,2)); // "de"

// str.trim() : 앞 뒤 공백 제거
// 사용자로부터 값을 입력 받을 때 사용, 의도적으로 공백을 넣는 경우는 없으므로
// let desc = "  coding       ";
// console.log(desc.trim());

// str.repeat(n) : n번 반복
// let hello = "hello!";
// console.log(hello.repeat(3)); // "hello!hello!hello!"

// 문자열 비교
// 아스키 값으로 비교
// 단순히 알파벳은 a보다 z가 크다, 대문자보다 소문자가 크다만 알면 됨
// console.log(1<3); // true
// console.log('a' < 'c'); // true
// console.log("a".codePointAt(0)); // 97
// console.log(String.fromCodePoint(97)); // 97
// console.log("c".codePointAt(0)); // 99
// console.log(String.fromCodePoint(99)); // 97


// 코드 실습
// list에서 숫자만 제외한 값을 추출하여 newList에 저장
// let list = [
//     "01. 들어가며",
//     "02. JS의 역사",
//     "03. 자료형",
//     "04. 함수",
//     "05. 배열",
// ];

// let newList = [];
// for(let i = 0; i<list.length; i++) {
//     newList.push(
//         list[i].slice(4)
//     );
// }

// console.log(newList);


// 금칙어 : 콜라

// function hasCola(str) {
//     if(str.indexOf('콜라') > -1) {
//         console.log('금칙어가 있습니다.');
//     } else {
//         console.log('통과');
//     }
// }

// hasCola('와 사이다가 짱이다.'); // -1 (true)
// hasCola('무슨 소리, 콜라가 최고');
// hasCola('콜라'); // 0 (false)

// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 없으면 false 반환

// function hasCola(str) {
//     if(str.includes('콜라')) {
//         console.log('금칙어가 있습니다.');
//     } else {
//         console.log('통과');
//     }
// }
// hasCola('와 사이다가 짱이다.'); // -1 (true)
// hasCola('무슨 소리, 콜라가 최고');
// hasCola('콜라'); // 0 (false)