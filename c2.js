// Chapter 2
// Generator Function

// 객체 리터럴
let user = {
    name: 'Mike',
    age: 30,
}

// 생성자 함수
// 함수명 첫 글자를 대문자로 하여 만듦
// 객체 생성 시, new 키워드를 통해 만듦
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let user1 = new User('Mike', 30);
// let user2 = new User('Jane', 22);
// let user3 = new User('Tom', 17);

// 생성자 함수 - 함수 생성 과정
// 생성자 함수를 사용하면 일일히 객체 리터럴을 선언하지 않고, 빠르고 일관성 있게 객체를 생성할 수 있음
// 스펙이 변경되어도 생성자 함수만 변경하면 되므로 재사용성이 좋음

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// new User();

// function User(name, age) {
//     this = {}
//     this.name = name;
//     this.age = age;
// }
// new User();

// function User(name, age) {
//     this = {}
//     this.name = name;
//     this.age = age;
//     return this;
// }
// new User();

// 생성자 함수 예시
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function() {
//         console.log(this.name);
//     }
// }
// let user5 = new User('Han', 40);
// user5.sayName();

// 코드 실습

function Item(title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원입니다.`);
    }
    // return this;
}

// new 키워드가 없는 경우, 함수로써 실행되므로 반환 값이 없어 undefined가 반환된다.
const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 9000);
console.log(
    item1,
    item2,
    item3,
);
item1.showPrice();


