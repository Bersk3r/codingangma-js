// Chapter 13
// Object (method/this)
// method : 객체 프로퍼티로 할당된 함수
// const superman = {
//     name: 'clark',
//     age: 33,
//     fly: function() {
//         console.log('fly');
//     }
// }
// superman.fly();

// 메소드 단축 구문
// const superman = {
//     name: 'clark',
//     age: 33,
//     fly() {
//         console.log('fly');
//     }
// }
// superman.fly();

// this
// 메소드를 통해 자신의 프로퍼티를 사용하고자 하는 경우
// const superman = {
//     name: 'clark',
//     age: 33,
//    sayName() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// superman.sayName();

// this (arrow func)
// const superman = {
//     name: 'clark',
//     age: 33,
//    sayName: () => {
//         console.log(`My name is ${this.name}`);
//     }
// }
// superman.sayName(); // undefined
// 화살표 함수는 일반 함수와는 다르게 자신만의 this를 가지지 않는다.
// 화살표 함수 내부에서 this를 사용하면 그 this는 외부에서 값을 가져온다. (전역 객체)
// 브라우저 환경에서 전역 객체는 window, node.js에서는 global이다.

// let boy = {
//     name: 'Mike',
//     showName() {
//         console.log(boy.name);
//     }
// }
//
// let man = boy;
// // man.name = "Tom";
// // console.log(boy.name);
// boy = null; // error occurs
// man.showName();

// let boy = {
//     name: 'Mike',
//     showName() {
//         console.log(this.name);
//     }
// }
//
// let man = boy;
// // man.name = "Tom";
// // console.log(boy.name);
// boy = null; // error occurs
// man.showName();

// let boy = {
//     name: 'Mike',
//     sayThis() {
//         console.log(this);
//     }
// }
//
// boy.sayThis();

let boy = {
    name: 'Mike',
    sayThis: () => {
        console.log(this);
    }
}

boy.sayThis();

