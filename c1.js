// Chapter 1
// variable
// var는 한번 선언된 변수를 재선언할 수 있다.
// var name = 'Mike';
// console.log(name);
// var name = 'Jane';
// console.log(name);

// var는 선언하기 전에 사용할 수 있다.
// console.log(name); // undefined
// var name = 'Mike';

// 가능한 사유 : 호이스팅(hosting)으로 인한 변수의 이동
// undefined가 출력되는 이유는 선언만 호이스팅이 되기 때문
// var name; // 선언
// console.log(name); // undefined
// name = 'Mike'; // 할당

// let, const도 호이스팅이 된다.
// console.log(name);
// let name = 'Mike';

// TDZ
// var와 다르게 let, const에서 오류를 발생시키는 이유는 Temporal Dead Zone 때문이다.
// 호이스팅이 되더라도 Temporal Dead Zone 영역에 있는 것은 할당하기 전에는 사용할 수 없다.
// TDZ는 코드를 예측 가능하도록 만들어 잠재적인 버그를 줄이는 데 도움이 된다.
// console.log(name); // Temporal Dead Zone
// const name = 'Mike';
// console.log(name);

// 호이스팅

// 하기 코드는 정상이다.
//  let age = 30;
// function showAge() {
//     console.log(age);
// }
// showAge();

// 하기 코드는 호이스팅으로 인해 문제가 발생한다.
// 호이스팅은 스코프 단위로 발생된다.
//  let age = 30;
// function showAge() {
//     // let age;
//     // console.log(age);
//     // age = 20;
//     console.log(age);
//     let age = 20;
// }
// showAge();

// 변수는 선언 단계 -> 초기화 단계 -> 할당 단계라는 3가지 단계를 거쳐 생성된다.

// var는 선언과 초기화가 동시에 진행된다. (선언 및 초기화 단계 -> 할당 단계)
// 초기화 단계는 undefined를 할당해주는 단계이다.
// 할당 전 호출 시, 오류가 발생되지 않고 undefined를 출력해준다.

// let은 선언 단계, 초기화 단계, 할당 단계로 진행된다. (선언 단계 -> 초기화 단계 -> 할당 단계)
// 초기화 단계는 실제 코드에 도달했을 때 진행되므로 reference 에러가 발생된다.

// const는 선언 + 초기화 + 할당이 동시에 진행된다.

// let name;
// name = 'Mike';
// var age;
// age = 30;
// const gender;
// gender = 'male'; // 에러 발생

// 스코프
// var는 함수 스코프 (function-scoped)
// let, const는 블록 스코프 (block-scoped)

// 블록 스코프는 모든 코드 블록에서 선언된 코드들은 코드 블록에서만 유효하며, 외부에서는 접근할 수 없다.
// 코드 블록 내부에 선언된 변수는 지역 변수이며, 함수, if문, for문, while문, try/catch문 등이 해당
// function add() {}, if() {}, for(let i=0; i<10; i++)

// 함수 스코프는 함수 내에 선언된 변수만 지역 변수가 된다.
// 하기 코드는 정상 동작함
// const age = 30;
// if(age>19) {
//     var txt = '성인'; // let과 const를 사용하면 에러가 발생
// }
// console.log(txt); // '성인'

// 하기 코드는 에러가 발생
// function add(num1, num2) {
//     var result = num1 + num2;
// }
// add(2,3);
// console.log(result);


