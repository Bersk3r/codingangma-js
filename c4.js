// Chapter 4
// Symbol

// 다른 데이터 형으로 만들어도, 객체 프로퍼티는 모두 문자형으로 변환된다.
// 객체 프로퍼티는 문자형으로 가능하다.
const obj =  {
    1: '1입니다.',
    false: '거짓',
}
Object.keys(obj);
obj['1'] // "1 입니다."
obj['false'] // "거짓"

// Symbol
// 유일한 식별자를 만들 때 사용한다.
// 유일성이 보장된다.
// const a = Symbol(); // new를 붙이지 않는다.
// const b = Symbol(); // new를 붙이지 않는다.
// console.log(a); // Symbol()
// console.log(b); // Symbol()
// console.log(a === b);
// console.log(a == b);

// Symbool은 만들 떄 설명을 붙일 수가 있다.
// 이는 디버깅할 때 편리하다.
// 해당 문자열은 Symbol 생성에 어떠한 영향도 미치지 않습니다.
// 설명이 중복되도, 충돌하지 않는다.
// const id = Symbol('id');
// const id2 = Symbol('id');
// console.log(id);
// console.log(id2);
// console.log(id === id2);
// console.log(id == id2);

// Property Key: 심볼형
// 심볼은 객체 프로퍼티로 존재하나, 하기 메소드나 문법으로 출력했을 때 제외되어 있음
// Object.keys(), Object.values(), Object.entries(), for(let a in user){ }는 key가 Symbol 형인 프로퍼티를 건너뜁니다.
// const id = Symbol('id');
// const user = {
//     name: 'Mike',
//     age: 30,
//     [id]: 'myid',
// }
// console.log(user);
// console.log(user[id]);
//
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// for(let a in user) {
//     console.log(a);
// }

// Symbol은 특정 객체의 원본 데이터는 건드리지 않고, 유일한 프로퍼티를 추가하는 것이 가능하다.
// 다른 사람이 만든 객체의 자신의 속성을 추가하여 덮어쓰지 않도록 하기 위함이다.
// 그렇다고 하여, 긴 네이밍의 프로퍼티를 사용하기에는 문제가 있다.
// 객체가 Object.keys()나 for .. in으로 순회할 수도 있기 때문에 데이터를 확인할 수도 있으므로 예측이 어려움
// const user = {
//     name: 'Mike',
//     age: 30,
// }
//
// const id = Symbol('id');
// user[id] = 'myid';
// user.name = 'myname';

// Symbol.for() : 전역 심볼
// 심볼은 이름이 같아도 다른 존재인데, 이를 전역 변수처럼 이름이 같으면 다른 객체를 가리켜야 되는 경우 사용
// 하나의 심볼만 보장받을 수 있고, 없으면 만들고 있으면 가져오기 때문이다.
// Symbol 함수는 매번 다른 Symbol 값을 생성하나, Symbol.for 메소드는 하나를 생성한 뒤, 키를 통해 같은 Symbol을 공유
// 코드 어디에서든 사용할 수 있음
// const id1 = Symbol.for('id11');
// const id2 = Symbol.for('id2');
// console.log(id1 === id2); // true

// // Symbol.keyFor() : 전역 심볼의 key 값을 알아낼 때 사용하는 메소드
// console.log(Symbol.keyFor(id1));// "id"

// symbol.description : 전역 심볼이 아닌 것에 key 값을 알아낼 때 사용하는 속성
// const id3 = Symbol('id1');
// console.log(id3.description);

// 객체에서 숨겨진 Symbol key를 보는 방법
// Object.getOwnPropertySymbols(객체명) : 객체 내 심볼형 키만 보여준다.
// Reflect.ownKeys(객체명) : 심볼형 키를 포함한 객체의 모든 key를 보여준다.
// 대부분 라이브러리나 내장 함수는 상기 두 메서드를 사용하지 않는다.
// const id = Symbol('id');
// const user = {
//     name: 'Mike',
//     age: 30,
//     [id]: 'myid',
// }
// console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]
// console.log(Reflect.ownKeys(user)); // [ 'name', 'age', Symbol(id) ]

// 코드 실습

// 다른 개발자가 만들어 놓은 객체 (user)
const user = {
    name: "Mike",
    age: 30,
};

// 내가 작업한 내용
// 하기 내용을 추가하면 사용자가 접속했을 때 내부 메서드를 볼 수 있게 된다.
// user.showName = function () {};

// 하지만 심볼을 추가하면 사용자는 해당 객체를 확인할 수 없다.
// 또한 메서드의 사용도 정상적으로 가능하다.
// const showName = Symbol('showName');
// user[showName] = function() {
//     console.log(this.name);
// };
//
// user[showName]();


// 사용자가 접속하면 보는 메세지
// 다른 개발자가 작성한 코드
// for (let key in user) {
//     console.log(`His ${key} is ${user[key]}.`);
// }