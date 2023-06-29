// Chapter 11
// Function Expression Statement & Arrow Function
// 함수 선언문 vs 함수 표현식

//  함수 선언문
// function sayHello {
// }

// 함수 표현식
// let sayHello = function() {
// }

//화살표 함수
// let add = (num1, num2) => {
//     return num1 + num2;
// }
// 코드 부분이 한 줄이고, 인자가 존재하는 경우, 대괄호를 중괄호로 바꾸고 return을 생략할 수 있다.
// let add = (num1, num2) => ( num1 + num2 );
// 코드 부분이 한 줄이고, 인자가 존재하는 경우, return 문이 한 줄이면 괄호도 생략할 수 있다.
// let add = (num1, num2) => num1 + num2;
// 코드 부분이 한 줄이고, 인자가 한 개인 경우, 인자의 괄호도 생략할 수 있다.
// let sayHello = name => `Hello, ${name}`;
// 인수가 없는 경우, 괄호는 생략할 수 없다.
// let showError = () => {
//     console.error('error');
// }
// return 문 전에 여러 개의 코드가 있는 경우, 일반 괄호를 생략할 수 없다.
// let add = function(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }
// let add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }

// 함수 표현식
// showError();
//
// let showError = function() {
//     console.log('error');
// }
// let showError = function() {
//     console.log('error');
// }
// showError();

//  함수 선언문
// showError();
// function showError() {
//     console.log('error');
// }

//  화살표 함수
// let showError = () => {
//     console.log('error');
// };
// showError();

// const sayHello = function (name) {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// };
// const sayHello = (name) => {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// };
// sayHello('Mike');

// const add = function(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }
// const add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }
// const add = (num1, num2) => num1 + num2;
// console.log(add(1,2));

