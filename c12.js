// Chapter 12
// Object

//  객체 : 각 요소(속성)는 키와 값으로 구성되어 있다.
//  각 요소는 쉼표로 구분한다.
// const superman = {
//     name: 'clark',
//     age: 33,
// };


// const superman = {
//     name: 'clark',
//     age: 33,
// };
// // 접근
// superman.name; // 'clark'
// superman[age]; // 33
//
// // 추가
// superman.gender = 'male';
// superman['hairColor'] = 'black';
//
// // 삭제
// delete superman.hairColor;

//  단축 프로퍼티
// const superman = {
//     name, // name: name
//     age, // age: age
//     gender: 'male',
// };
//
// const name = 'clark';
// const age = 33;

// 존재하지 않는 속성 접근 시
// const superman = {
//     name: 'clark',
//     age: 33,
// };
// superman.birthDay; // undefined
// console.log(
//     superman.birthDay,
//     'birthDay' in superman,
//     'age' in superman,
// );
// in 키워드는 어떤 값이 나올지 확신할 수 없을 떄 사용한다. 함수 인자나 API 통신으로 값을 받을 때 사용한다.

// for .. in 반복문
// for .. in 반복문을 사용하면 객체를 순회하면서 값을 얻을 수 있다.
// for(let key in superman) {
//     console.log(key);
//     console.log(superman[key]);
// }

// const superman = {
//     name: 'clark',
//     age: 30,
// }
//
// console.log(
//     superman.name,
//     superman['age'],
// );
//
// superman.hairColor = 'black';
// superman['hobby'] = 'football';
// delete superman.hobby;
// console.log(superman);

// function makeObject(name, age) {
//     return {
//         name,
//         age,
//         hobby: 'football',
//     }
// }
//
// const Mike = makeObject('Mike', 30);
// console.log(Mike);
//
// console.log('age' in Mike);
// console.log('birthday' in Mike);

// function isAdult(user) {
//     // if(user.age < 20) {
//     if(
//         !('age' in user) || // user에 age가 없거나
//         user.age < 20) { // age가 20 미만인 경우,
//         return false;
//     }
//     return true;
// }
//
// const Mike = {
//     name: 'Mike',
//     age: 30,
// }
// const Jane = {
//     name: 'Jane',
// }
//
// console.log(isAdult(Mike));
// console.log(isAdult(Jane)); // true가 나와서는 안 된다. (나이가 없기 때문에)

// for .. in
// const Mike = {
//     name: 'Mike',
//     age: 30,
// }
//
// for(x in Mike) {
//     console.log(x);
//     console.log(Mike[x]);
// }