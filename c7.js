// Chapter 7
// Array Method

// push() : 뒤에 삽입, pop() : 뒤에 삭제, unshift() : 앞에 삽입, shift() : 앞에 삭제

// arr.splice()
// arr.splice(m,n) : 특정 요소 지움
// n : 시작, m : 개수
// let arr = [1,2,3,4,5];
// arr.splice(1,2);
// console.log(arr);

// arr.splice(m,n,x) 특정 요소를 지우고 삭제
// n : 시작, m : 개수, x : 요소
// let arr = [1,2,3,4,5];
// arr.splice(1,3, 100, 200)
// console.log(arr);

// 두 번째 인자가 0이면 아무것도 지우지 않고, 중간에 새 요소를 추가 가능
// let arr = ["나는", "철수", "입니다"];
// arr.splice(1,0, "대한민국", "소방관");
// console.log(arr);

// arr.splice()는 삭제된 요소를 반환
// 반환 값이 삭제된 요소의 배열을 반환
// let arr = [1,2,3,4,5];
// let result = arr.splice(1,2);
// console.log(arr); // [1,4,5]
// console.log(arr); // 2,3

// arr.slice(n,m) : n부터 m까지 반환
// n이상 m미만 사이의 값 반환, m이 없으면 끝까지
// let arr = [1,2,3,4,5];
// arr.slice(1,4); // [2,3,4]

// arr.concat(arr2,arr3, ...) : 합쳐서 새 배열 반환
// 배열 1개 이상 혹은, 각 요소를 전달해도 합쳐서 전달
// let arr = [1,2];
// console.log(arr.concat([3,4])); // [1,2,3,4]
// console.log(arr.concat([3,4],[5,6])); // [1,2,3,4,5,6]
// console.log(arr.concat([3,4],5,6)); // [1,2,3,4,5,6]

// arr.forEach(fn) : 배열 반복
// for나 for of문을 사용하지 않아도 쉽게 반복 가능
// 첫 번째 : 해당 배열의 요소,  두 번째 : 해당 배열의 인덱스, 세 번째 : 해당 배열 자체
// 보통 1,2번 인자만 사용
// let users = ['Mike', 'Tom', 'Jane'];
// users.forEach((item, index, arr) => {
//     //..
// })

// let arr = ['Mike', 'Tom', 'Jane'];
// arr.forEach((name, index) => {
//     console.log(`${index+1}. ${name}`);
// });

// arr.indexOf / arr.lastIndexOf : 왼쪽/오른쪽부터 탐색하여 있으면 해당 인덱스, 없으면 -1 반환
// 인자가 1개이면 처음 찾은 위치 값, 2개이면 첫 번째는 탐색 시작 위치, 두 번째는 탐색할 값이 된다.
// let arr = [1,2,3,4,5,1,2,3];
// arr.indexOf(3); // 2
// arr.indexOf(3,3); // 7
// arr.lastIndexOf(3); // 7

// arr.includes() : 포함하는 지 확인
// 포함 여부만 확인하는 경우, includes를 사용하는 게 좋음
// let arr = [1,2,3];
// arr.includes(2); // true
// arr.includes(8); // false

// arr.find(fn) / arr.findIndex(fn) : indexOf와 찾는다는 건 동일, 함수를 인자로 받음으로서 복잡한 연산이 가능
// 짝수를 찾거나 성인을 찾는 것이 가능
// find() 주의 사항 : 첫 번째 true 값만 반환하고 끝이며 없으면 undefined 반환
// findIndex()는 있으면 인덱스를 반환, 없으면 -1을 반환

// let arr = [1,2,3,4,5];
// const result = arr.find((item) => {
//     return item%2 === 0;
// });
// console.log(result);

// let userList = [
//     {name : 'Mike', age: 30},
//     {name : 'Jane', age: 27},
//     {name: 'Tom', age: 10},
// ]
// 객체가 들어 있는 배열은 indexOf로 찾기 어려우며 이 때, find가 유용하다
// const result = userList.find((item) => {
//     return item.age < 19;
// });
// const result = userList.findIndex((item) => {
//     return item.age < 19;
// });
// console.log(result);

// arr.filter(fn) : 조건을 만족하는 모든 요소를 배열로 반환
// let arr = [1,2,3,4,5];
// const result = arr.filter((item) => {
//     return item%2 === 0;
// });
// console.log(result);

// arr.reverse() : 역순으로 재정렬
// 최근 가입한 사용자나, 최근 등록된 게시글을 보여줄 때 유용
// let arr = [1,2,3,4,5];
// arr.reverse(); // [5,4,3,2,1]

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
// 기존 배열은 변경되지 않음
// 실무에서 많이 사용하는 배열 메서드
// let userList = [
//     {name : 'Mike', age: 30},
//     {name : 'Jane', age: 27},
//     {name: 'Tom', age: 10},
// ]
// let newUserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         id: index + 1,
//         isAdult: user.age > 19,
//     });
// });
// console.log(newUserList);
// console.log(userList);

// arr.join(n) : 문자열을 특정 문자열을 사이사이에 추가하여 합침
// 구분자가 아무 것도 없으면 요소 사이에 ","를 넣고 합침
// let arr = ['안녕', '나는', '철수야'];
// let result = arr.join(' ')
// console.log(result);
// arr.split(n) : 특정 문자열을 단위로 문자열을 분할
// 아무 것도 없으면 공백 단위로 함치
// let arr = 'Mike,Jane,Tom,Tony';
// let result = arr.split(','); // [ 'Mike', 'Jane', 'Tom', 'Tony' ]
// console.log(result);
// let str = "Hello, My name is Mike.";
// let result = str.split("");
// console.log(result)

// Array.isArray()
// typeof 내장 함수를 사용하면 object로 반환되므로 배열인지를 확인할 수 없다.
// 이 때, 사용하는 매서드이다.

// let user = {
//     name: 'Mike',
//     age: 30,
// };
// let userList = ["Mike", "Tom", "Jane"];
// console.log(typeof user);
// console.log(typeof userList);
// console.log(Array.isArray(user));
// console.log(Array.isArray(userList));
