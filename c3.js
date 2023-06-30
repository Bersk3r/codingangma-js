// Chapter 3
// Object - methods / computed property

// Computed Property

// let a = 'age';
// const user = {
//     name: 'Mike',
//     age: 30,
// }

// let a = 'age';
// const user = {
//     name: 'Mike',
//     [a]: 30, // computed property (계산된 프로퍼티)
//     // age: 30
// }

// 하기와 같이 식을 넣어서 선언할 수도 있다.
// const user = {
//     [1+4]: 5,
//     ["안녕" + "하세요"]: "hello",
// }
// console.log(user);


// 객체에서 사용 가능한 유용한 메서드

// Object.assign() : 객체 복제
// const user = {
//     name: 'Mike',
//     age: 30,
// }
// 하기 방법으로는 복제가 되지 않는다.
// 이유는 객체 자체가 아닌, 객체에 대한 참조 값이 들어가 있어, 참조 값이 들어가 있음
// 즉 하나의 변수를 두 객체가 접근해 있는 것
// const cloneUser = user;


// Object.assign()에서 첫 번째 인자는 초기 값, 두 번째는 복사하고자 하는 객체

// 두 번째 입자에 있는 값이 초기 값에 병합된다.
// const newUser = Object.assign({}, user);
// // {} + { name: 'Mike', age: 30,} = { name: 'Mike', age: 30, }
// newUser.name = 'Tom';
// console.log(newUser.name); // 'Tom'
// console.log(user.name); // 'Mike'
// console.log(newUser);
// console.log(user);
// 다른 속성이 있어도 병합이 가능하다.
// const newUser = Object.assign({gender: 'male'}, user);
// {gender: 'male'} + { name: 'Mike', age: 30,} = { name: 'Mike', age: 30, gender: 'male',}
// 같은 속성이 있으면 두 번째 인자의 객체의 속성으로 덮여쓰여진다.
// const newUser = Object.assign({name : 'Tom'}, user);
// {name: 'Tom',} + { name: 'Mike', age: 30,} = { name: 'Mike', age: 30 }
// 여러 개의 객체를 병합할 수도 있다.
// const user = {
//     name: 'Mike',
// }
// const info1 = {
//     age: 30,
// }
// const info2 = {
//     gender: 'male',
// }
// Object.assign(user, info1, info2);
// // { name: 'Mike' } + {  age: 30 } + {  gender: 'male' } = { name: 'Mike', age: 30, gender: 'male' }
// console.log(user);

// Object.keys() : 키 배열 반환
// const user = {
//     name: 'Mike',
//     age: 30,
//     gender: 'male',
// }
// console.log(Object.keys(user)); // [ 'name', 'age', 'gender' ]

// Object.values() : 값 배열 반환
// const user = {
//     name: 'Mike',
//     age: 30,
//     gender: 'male',
// }
// console.log(Object.values(user)); // [ 'Mike', 30, 'male' ]

// Object.entries() : 키/값 배열 반환
// const user = {
//     name: 'Mike',
//     age: 30,
//     gender: 'male',
// }
// console.log(Object.entries(user)); // [ [ 'name', 'Mike' ], [ 'age', 30 ], [ 'gender', 'male' ] ]

// Object.fromEntries() : 키/값 배열을 객체로
// const arr = [
//     [ 'name', 'Mike' ],
//     [ 'age', 30 ],
//     [ 'gender', 'male' ],
// ];
// console.log(Object.fromEntries(arr)); // { name: 'Mike', age: 30, gender: 'male' }

// 코드 실습
// let n = "name";
// let a = "age";
//
// const user = {
//     [n] : 'Mike',
//     [a] : 30,
//     [1+4] : 5,
// }
// console.log(user);

// 어떤 것이 key가 될 지 모르는 객체를 만들 때 유용하다. computed property
// function makeObj(key, value) {
//     return {
//         [key] : value,
//     }
// }
//
// const obj = makeObj('age', 33);
// console.log(obj);

const user = {
    name: 'Mike',
    age: 30,
}

// const user2 = user; // 참조 값을 가져오므로 객체를 복제하는 게 아니다.
// user2.name = 'Tom';
// console.log(
//     user,
//     user2,
// );

// const user2 = Object.assign({}, user);
// user2.name = 'Tom';
// console.log(
//     user,
//     user2,
// );

// const result = Object.keys(user);
// console.log(result);

// const result = Object.values(user);
// console.log(result);

// const result = Object.entries(user);
// console.log(result);

// const user2 = Object.fromEntries(result)
// console.log(user2);