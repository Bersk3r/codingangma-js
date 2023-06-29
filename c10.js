// Chapter 10
// function

// function showError() {
//     console.log('Error Occurs');
// }
//
// showError();

// function sayHello(name='default') {
//     const msg = `hello ${name}`;
//     console.log(msg);
// }

// sayHello("meow");
// sayHello("game");
// sayHello("korea");
// sayHello();

// let msg = `hello `; // 전역 변수 (global variable)
// console.log('함수 호출 전');
// console.log(msg);
//
// function sayHello(name) {
//     if(name) {
//         msg += name;
//     }
//     console.log('함수 내부');
//     // 지역 변수 (local variable)
//     console.log(msg);
// }
//
// sayHello('Mike');
// console.log('함수 호출 후');
// console.log(msg);

//  전역 변수와 지역 변수

// let msg = "welcome";
// console.log(msg);
// function sayHello(name) {
//     let msg = "hello";
//     console.log(`${msg} ${name}`);
// }
// sayHello('Jim');
// console.log(msg);

// let name = "Jim";
// function sayHello(name) {
//     console.log(name);
// }
// sayHello(); // undefined
// sayHello('Mike');

// function sayHello(name) {
//     let newName = name || `friend`;
//     const msg = `Hello, ${newName}`;
//     console.log(msg);
// }
//
// sayHello();
// sayHello('Jane');


// function add(num1, num2) {
//     return num1 + num2;
// }
//
// const result = add(2,3);
// console.log(result);

// function showError() {
//     console.log('에러 발생');
//     return; // undefined를 반환, 주로 함수를 종료하는 목적으로 사용
//     console.log('실행되지 않는 코드');
// }
//
// console.log(showError()); // return 문이 없으면 항상 undefined를 반환
