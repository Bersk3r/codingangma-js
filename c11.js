// Chapter 11
// closure

// 어휘적 환경 (Lexical Environment)
// 코드가 실행되면 스크립트에 선언된 변수나 함수가 Lexical 환경에 올라감
// 함수에서 변수를 찾는 순서는 내부 -> 외부 -> 전역 환경에서 찾음


// 예시 1
/*
(1)
* Lexical 환경
* one: 초기화 X => 사용 불가
* addOne: function (초기화 O => 사용 가능, 단 함수 표현식은 사용 불가)
*/
// let one;
/*
(2)
* Lexical 환경
* one: undefined => 사용 가능
* addOne: function => 사용 가능
*/
// one = 1;
/*
(3)
* Lexical 환경
* one: 1
* addOne: function
*/
// function addOne(num) {
//     console.log(one + num);
/*
(5)
* <전역>Lexical 환경
* one: 1
* addOne: function
*/
/*
(5)
* <내부>Lexical 환경
* 먼저 one과 num을 여기서 찾음
* num: 5
*/
/*
(6)
* <전역>Lexical 환경
* 외부에서 one을 찾았음
* one: 1
* addOne: function
*/
/*
(6)
* <내부>Lexical 환경
* num은 있으나 one은 없으므로, 외부에서 찾음
* num: 5
*/
// }
// addOne(5);
/*
(4)
* <전역>Lexical 환경
* one: 1
* addOne: function
*/
/*
(4)
* <내부>Lexical 환경
* (이 곳에선 함수가 넘겨받은 매개변수나 지역변수가 저장됨)
* (전역 Lexical 환경에 대한 참조를 가짐)
* num: 5
*/


/*
(1)
* <전역>Lexical 환경
* makeAdder: function
* add3: 초기화 X
*/
function makeAdder(x) {
    return function(y) {
        return x + y;
/*
(6)
* <전역>Lexical 환경
* makeAdder: function
* add3: function
*/
/*
(6)
* <makeAdder>Lexical 환경 (전역 참조) <2>
* x : 3
*/
/*
(6)
* <익명 함수>Lexical 환경 (makeAdder 참조) <1>
* y : 2
*/
    }
}

const add3 = makeAdder(3);
/*
(2)
* <전역>Lexical 환경
* makeAdder: function
* add3: 초기화 X
*/
/*
(2)
* <makeAdder>Lexical 환경
* x: 3
*/
/*
(3)
* <전역>Lexical 환경
* makeAdder: function
* add3: function
*/
/*
(3)
* <makeAdder>Lexical 환경
* x: 3
*/
console.log(add3(2));
/*
(4)
* <전역>Lexical 환경
* makeAdder: function
* add3: function
*/
/*
(4)
* <makeAdder>Lexical 환경
* x : 3
*/
/*
(4)
* <익명 함수>Lexical 환경
* y : 2
*/
/*
(5)
* <전역>Lexical 환경
* makeAdder: function
* add3: function
*/
/*
(5)
* <makeAdder>Lexical 환경 (전역 참조)
* x : 3
*/
/*
(5)
* <익명 함수>Lexical 환경 (makeAdder 참조)
* y : 2
*/

// 코드 정리
// function makeAdder(x) {
//     return function (y) { // y를 가지고 있고, 상위 함수인 makeAdder의 x에 접근 가능
//         return x + y;
//     }
// }
// const add3 = makeAdder(3);
// console.log(add3(2)); // add3 함수가 생성된 이후에도 상위 ㅎ마수인 makeAdder의 x에 접근 가능
// const add3 = makeAdder(10);
// console.log(add10(5));
// console.log(add3(1));


// closure : 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 그 변수에 접근 가능
// 외부 함수의 실행이 끝나서 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근할 수 있음

// 코드 실습
function makeCounter() {
    let num = 0; // 은닉화

    return function() {
        return num++;
    };
}

let counter = makeCounter();
// 하기 숫자들은 임의로 직접 변경이 불가능하며 오직 counter 함수 호출로만 변경이 가능
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
