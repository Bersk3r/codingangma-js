// Chapter 10
// Rest Parameters, Spread syntax
// ...

// 인수 전달
// 자바스크립트에서 함수에 넘겨주는 인수의 갯수엔 제약이 없음
// 인수의 갯수를 정해도 실제로 그 갯수를 맞출 필요 없음
// 함수에서 인수를 얻는 방법은 arguments로 접근하는 것과 나머지 매개 변수를 사용하는 것
// 최근에는 장점이 있는 나머지 매개변수를 사용하는 것이 추세
// function showName (name) {
//     console.log(name);
// }
// showName('Mike'); // 'Mike'
// showName('Mike', 'Tom'); // 에러는 발생하지 않음, 'Mike'만 출력
// showName(); // undefined 출력

// arguments
// 함수로 넘어 온 모든 인수에 접근
// 함수 내에서 이용가능한 지역 변수
// length / index
// Array 형태의 객체
// 배열의 내장 메서드 없음 (forEach, map 등의 메서드 사용 불가)
// function showName(name) {
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }

// 나머지 매개변수 (Rest paramteters)
// ES6 구문 사용이 가능하면, 가급적 나머지 매개변수 사용 권장
// 나머지 매개변수는 정해지지 않은 갯수의 인수를 배열로 나타날 수 있게 함
// 나머지 매개변수는 반드시 인자의 맨 끔테 존재해야 한다.
// function showName(...nameㄴ) {
//     console.log(names);
// }
// showName(); // []
// showName('Mike'); // [ 'Mike' ]
// showName('Mike', 'Tom'); // [ 'Mike', 'Tom' ]

// function add(...numbers) {
//     let result = 0;
//     numbers.forEach((num) => (result += num));
//     console.log(result);
// }

// function add(...numbers) {
//     let result = numbers.reduce((prev, cur) => prev + cur);
//     console.log(result);
// }
// add(1,2,3);
// add(1,2,3,4,5,6,7,8,9,10);

// function User(name, age, ...skills) {
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }

// const user1 = new User('Mike', 30, 'html', 'css');
// const user2 = new User('Tom', 20, 'JS', 'React');
// const user3 = new User('Jane', 17, 'English');

// console.log(user1);
// console.log(user2);
// console.log(user3);

// 전재 구문 (Spread Syntax) : 배열
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [...arr1, ...arr2];
// ...arr1 = 1,2,3; ..arr2= 4,5,6//

// 전개 구법은 arr.push() / arr.splice() / arr.concat()의 기능을 수행
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [0, ...arr1, ...arr2. 7, 8, 9];

// 전재 구문 (Spread Syntax) : 객체
// let user = {name: 'Mike'};
// let mike = {...user, age: 30};
// console.log(mike); // {name: 'Mike', age: 30}

// 전재 구문 (Spread Syntax) : 복제
// 객체의 경우, Object.assign()을 사용하지 않고 복제 가능
// let arr = [1,2,3];
// let arr2 = [...arr];

// let user = {name: 'Mike', age: 30};
// let user2 = {...user};

// user2.name = "Tom";

// console.log(user.name);
// console.log(user2.name);

// 전개 구문 코드 실습
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// })
// arr1 = [...arr2, ...arr1];
// console.log(arr1);

// let user = {name: 'Mike'};
// let info = {age: 30};
// let fe = ["JS", "React"];
// let lang = ["Korean", "English"];

// user = Object.assign({}, user, info, {skills : [],})
// fe.forEach( item => {
//     user.skills.push(item);
// })
// lang.forEach( item => {
//     user.skills.push(item);
// })

// user = {...user, ...info, skills: [...fe, ...lang]};
// console.log(user);
