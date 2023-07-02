// Chapter 8
// arr.sort() / arr.reduce()

// arr.sort() : 배열 재정렬, 배열 자체가 변경되니 주의!, 인수로 정렬 로직을 담은 함수를 받음

// let arr = [1,5,4,2,3];
// arr.sort();
// console.log(arr);

// let arr = ['a','c','d','b','e'];
// arr.sort();
// console.log(arr);

// 잘못 정렬되는 이유는 정렬할 때 요소를 문자열로 취급하기 때문
// let arr = [27, 8, 5, 13]; // 13, 27, 5, 8
// arr.sort();
// console.log(arr);

// let arr = [27, 8, 5, 13]; // 13, 27, 5, 8

// a와 b를 비교, 양수, 0, 음수를 반환
// a가 b보다 크다면 자리를 변경 (b를 앞으로 이동)
// 같으면 0 (같으므로 자리 유지)
// a가 b보다 작으면 음수를 리턴 (a를 앞으로 이동)

// 8,27,5,13
// 5,8,27,13
// 5,8,13,27
// arr.sort((a,b) => {
//     console.log(a,b);
//     return a - b;
// });
// console.log(arr);

// 보통은 함수를 만들기보다 유용한 기능이 있는 라이브러리를 사용
// 예시 : Lodash 라이브러리
// _.sortBy(arr); : 문자, 숫자, 객체 등 원하는 기준으로 정렬
// https://loadsh.com : 시간이 있으면 공식 사이트 학습 추천


// arr.reduce()
// 인수로 함수를 받음
// (누적 계산값, 현재 값) => { return 계산값 };
// 두 번째 인자는 초기 값이며 초기값이 없는 경우 누적 값은 배열 첫 번째 값이 된다.

// 배열의 모든 수 합치기
// for, for of, forEach
// let arr = [1,2,3,4,5];

// let result = 0;
// arr.forEach(num => {
//     result += num;
// });

// const result = arr.reduce((prev,cur) => { return prev+cur; },0)
// console.log(result);

let userList = [
    {name : 'Mike', age: 30},
    {name : 'Jane', age: 27},
    {name: 'Tom', age: 10},
    {name: 'Sue', age: 26},
    {name: 'Harry', age: 42},
    {name: 'Steve', age: 60},
];

// 성인인 사람만 추출하여 새로운 배열 생성
// let result = userList.reduce((prev, cur) => {
//     if(cur.age > 19) {
//         prev.push(cur.name);
//     }
//     return prev;
// }, []);
// 나이의 합 구하기
// let result = userList.reduce((prev, cur) => {
//     return prev += cur.age;
// }, 0);
// 이름이 세 글자인 사람 찾기
// let result = userList.reduce((prev, cur) => {
//     if(cur.name.length === 3) {
//         prev.push(cur.name);
//     }
//     return prev;
// }, []);
// console.log(result);
// arr.recudeRight() : reduce와 기능은 유사하나 배열 우측부터 진행한다.

// Tip : 상황에 맞는 메서드를 사용하는 것도 실력이다.

