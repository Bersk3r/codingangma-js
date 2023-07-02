// Chapter 9
// Destructuring Assignment (구조분해할당)

// Destructuring Assignment : 구조분해할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
// let [x,y] = [1,2];
// console.log(x); // 1
// console.log(y); // 2

// let users = ['Mike', 'Tom', 'Jane'];
// let [user1, user2, user3] = users;
// // let user1 = users[0]; let user2 = users[1]; let user3 = users[2];
// console.log(user1); // 'Mike'
// console.log(user2); // 'Tom'
// console.log(user3); // 'Jane'

// let str = "Mike-Tom-Jane";
// let [user1, user2, user3] = str.split("-");
// console.log(user1);
// console.log(user2);
// console.log(user3);

// 배열 구조 분해 : 기본값
// 서로의 길이가 맞지 않는 경우, 왼쪽이 많으면 남은 값에 undefined가 들어감, 오른쪽이 많으면 해당 값을 제외됨
// 이를 방지하기 위해 기본 값을 넣어놓으면 좋음
// let [a,b,c] = [1,2];
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // undefined

// let [a=3,b=4,c=5] = [1,2];
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 5


// 배열 구조 분해: 일부 반환 값 무시
// 공백과 쉼표를 사용하면 필요하지 않은 배열 값을 무시할 수 있음
// let [user1, ,user2] = ['Mike', 'Tom', 'Jane', 'Tony'];
// // 두 번째 값은 공백에 들어가므로 생략, 네 번째 값은 사용하는 것이 없어서 무시
// console.log(user1); // 'Mike'
// console.log(user2); // 'Jane'

// 배열 구조 분해 : 바꿔치기
// 기존에 할당된 값들의 순서를 바꾸려면 새로운 변수를 선언한 다음 바꿔야했음
// 구조 분해 할당을 사용하면 그러지 않고 값을 바꾸는 것이 가능
// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// 객체 구조 분해
// 배열 구조 분해와 다른 점은 순서를 신경쓰지 않아도 됨
// let user = {name: 'Mike', age: 30};
// let {name, age} = user;
// // let name = user.name; let age = user.age;
// console.log(name); // 'Mike'
// console.log(age); // 30

// 객체 구조 분해 : 새로운 변수 이름으로 할당
// let user = {name: 'Mike', age: 30};
// let {name: userName, age: userAge} = user;
// // // let userName = user.name; let userAge = user.age;
// console.log(userName);
// console.log(userAge);

// 객체 구조 분해 : 기본값
// 객체에 해당 프로퍼티가 없다면 기본값으로 할당, 있다면 해당 값으로 할당
// let user = {name: 'Mike', age: 30};
// let {name, age, gender} = user; // gender = undefined
// let {name, age, gender = 'male'} = user; // gender = 'male'

// let user = {name: 'Mike', age: 30, gender: 'female'};
// let {name, age, gender} = user;
// console.log(gender);


