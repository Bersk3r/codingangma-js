// Chapter 14
// inherit, prototype

// const user = {
//     name: 'Mike',
// }
// console.log(user.name);
// Object.hasOwnProperty() : 해당 프로퍼티가 존재하는지 확인할 수 있음
// 해당 메소드는 __proto__라는 객체의 메서드로 존재 (__proto__ : prototype 객체)
// 객체에서 프로퍼티를 찾을 때, 해당 객체에 없으면 __proto__라는 상위 객체에서 찾음
// user.hasOwnProperty('name'); // true
// user.hasOwnProperty('age'); // false

// hasOwnProperty가 객체에 선언된 경우
// 일단 객체에 해당 프로퍼티가 있는 경우, 탐색을 멈춤
// 없을 경우에만, __proto__에서 찾음
// const user = {
//     name: 'Mike',
//     hasOwnProperty: function() {
//         console.log('haha');
//     }
// }
// user.hasOwnProperty();

// 객체 내 공통된 프로퍼티를 처리하는 방법 : 상속을 사용
// const car = {
//     wheels: 4,
//     drive() {
//         console.log("drive ...");
//     },
// }
// const bmw = {
//     color: "red",
//     navigation: 1,
// }
// const benz = {
//     color: "black",
// }
// const audi = {
//     color: "blue",
// }
// bmw.__proto__ = car; // car가 bmw의 프로토타입이 됨 (car의 상속을 받음)
// benz.__proto__ = car; // car가 benz의 프로토타입이 됨 (car의 상속을 받음)
// audi.__proto__ = car; // car가 audi의 프로토타입이 됨 (car의 상속을 받음)

// console.log(bmw);
// console.log(bmw.color);
// console.log(bmw.wheels);

// 객체 상속은 연속으로 이어질 수 있음
// car <- bmw <- x5 : protoype chain
// const x5 = {
//     color: 'white',
//     name: 'x5',
// }
// x5.__proto__ = bmw;
// console.log(x5.name);
// console.log(x5.color);
// console.log(x5.navigation);
// console.log(x5.wheels);

// for(p in x5) {
//     // for .. in문에서 해당 객체의 프로퍼티를 직접 가지고 있는지 확인하는 방법
//     if (x5.hasOwnProperty(p)) {
//         console.log('o',p);
//     } else {
//         console.log('x',p);
//     }
// }
// console.log(x5); // name과 color를 제외하면 prototype에서 정의한 프로퍼티임

// key와 value에 관련된 메서드에는 상속된 프로퍼티는 나오지 않음
// console.log(Object.keys(x5));
// console.log(Object.values(x5));


// 생성자로 생성한 객체에 상속하는 방법
// __proto__를 사용하지 않고, prototype이라는 속성을 사용
// 이는 생성자 함수가 생성하는 객체의 __proto__의 프로퍼티를 해당 속성으로 생성한다는 의미
// 이를 잘 활용하면 중복 코드를 줄일 수 있음
// const car = {
//     wheels: 4,
//     drive: function () {
//         console.log("drive ..");
//     },
// }
// const Bmw = function(color) {
//     this.color = color;
// };

// 하기 방법은 constructor 프로퍼티가 존재
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function() {
//     console.log("drive ..");
// }
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function() {
//     console.log("STOP ..");
// }

// 하기 방법은 constructor 프로퍼티가 존재하지 않음
// 위 사유로 prototype을 하기처럼 덮어쓰지 않고, 하나씩 프로퍼티를 추가하는 게 좋음
// 아니면 수동으로 constructor를 명시하면 됨
// 자바스크립트는 명확한 constructor 프로퍼티를 보장하지 못함
// 개발자에 의해 이 프로퍼티는 언제든지 수정될 수 있음
// Bmw.prototype = {
//     constructor: Bmw,
//     wheels: 4,
//     drive() {
//         console.log("drive..");
//     },
//     navigation: 1,
//     stop() {
//         console.log("STOP..");
//     },
// }

// const x5 = new Bmw("red");
// const z4 = new Bmw("blue");

// x5.__proto__ = car;
// z4.__proto__ = car;
// x5.drive();
// x5.stop();
// console.log(x5.wheels);

// 생성자가 새로운 객체를 만들면 그 객체는 생성자의 인스턴스라고 함
// JS에서는 이를 편리하게 확인할 수 있는 instanceof 라는 연산자가 존재
// 객체와 생성자 비교 가능, 해당 객체가 그 생성자로 생성된 것인지 확인 가능
// console.log(z4);
// console.log(z4 instanceof Bmw);
// 생성자로 만들어진 객체에는 constructor라는 프로퍼티가 존재
// console.log(z4.constructor === Bmw);

// 해당 객체의 프로퍼티는 아무나 쉽게 변경할 수 있음
// const Bmw = function(color) {
//     this.color = color;
// }
// const x5 = new Bmw("red");
// console.log(x5);
// x5.color = "black";
// console.log(x5);

// 이를 방지하는 방법은 클로저를 활용하는 것임
// 하기처럼 변경하면 초기에 설정한 색상 값을 얻는 것만 가능하고, 바꾸는 건 안됨
// getColor는 생성할 당시의 컨텍스트를 기억
// const Bmw = function(color) {
//     const c = color;
//     this.getColor = function() {
//         console.log(c);
//     }
// }
// const x5 = new Bmw("red");
// x5.getColor();
