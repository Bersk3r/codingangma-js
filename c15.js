// Chapter 15
// Class

// 지금까지 비슷한 형태의 객체를 생성하기 위해 생성자를 사용
// const User = function(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.showName = function() {
//     //     console.log(this.name);
//     // };
// }
// User.prototype.showName =  function() {
//     console.log(this.name);
// }
// const mike = new User('Mike', 30);

// Class : ES6에서부터 추가된 스펙
// new를 통해 생성했을 때, 내부 정의 내용으로 객체를 생성하는 것은 동일

// 생성자 함수와 class의 차이
// 겉으로 다른 점은 class라는 키워드 사용, constructor라는 내부 메서드 존재
// constructor는 객체를 만들어주는 생성자 메서드
// class에서 정의된 메서드는 __proto__에 저장됨
// new라는 키워드를 제외했을 때, 생성자 함수는 에러가 없으나, class는 에러가 발생하므로 문제점을 파악 시 용이
// 이는 __proto__의 constuctor 값이 class로 명시되어 있기 때문 (이 경우, new 키워드 없이 호출 시 에러 발생)
// class User2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     showName() {
//         console.log(this.name);
//     }
// }

// const tom = new User2("Tom", 19);
// mike에는 showName이 존재하나, tom은 __proto__에 showName이 존재
// console.log(mike); // User { name: 'Mike', age: 30, showName: [Function (anonymous)] }
// console.log(tom); // User2 { name: 'Tom', age: 19 }
// mike.showName();
// tom.showName();

// for .. in 문으로 순회했을 때, 생성자 함수는 __proto__에 있는 메서드까지 보여주었으나,
// class는 __proto__에 있는 메서드를 보여주지 않음
// for(const p in mike) {
//     console.log(p);
// }
//
// for(const p in tom) {
//     console.log(p);
// }

// Class : 상속
// extends
// class Car {
//     constructor(color) {
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log("drive ..");
//     }
//     stop() {
//         console.log("STOP!");
//     }
// }
// class Bmw extends Car {
//     park() {
//         console.log("PARK");
//     }
// }
// const z4 = new Bmw('blue');
// console.log(z4);
// z4.drive();

// 메소드 오버라이딩 (method overriding)
// 동일한 이름으로 메서드를 정의하면 기존 생성 메소드를 덮어씀
// 부모의 메서드를 사용하면서, 기능을 확장하는 방법은 super를 사용하면 됨
// class Car {
//     constructor(color) {
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log("drive ..");
//     }
//     stop() {
//         console.log("STOP!");
//     }
// }
// class Bmw extends Car {
//     park() {
//         console.log("PARK");
//     }
//     stop() {
//         super.stop(); // Car : stop()
//         console.log("OFF"); // Bmw: stop()
//     }
// }
// const z4 = new Bmw('blue');
// z4.stop();


// class : 생성자 오버라이딩
class Car {
    constructor(color) { // class의 constructor는 빈 객체({})로 만들어주고, this로 이 객체를 가리킴
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive ..");
    }
    stop() {
        console.log("STOP!");
    }
}
// extends로 만든 객체는 class의 constructor는 빈 객체({})로 만들어주고, this로 이 객체를 가리키는 작업을 건너뜀
class Bmw extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
}
const z4 = new Bmw('blue');
console.log(z4);

// 상속 받은 객체에 constructor가 없을 때 자바스크립트 동작 방식
// 기본 값으로 constructor를 생성함
// 생성자가 있는 경우, 반드시 super를 호출해야 함
//
// class Bmw extends Car {
//     /*
//     * constructor(...args) {
//     *   super(...args);
//     * }
//     */
//     park() {
//         console.log("PARK");
//     }
// }
// const z4 = new Bmw('blue');
// console.log(z4);