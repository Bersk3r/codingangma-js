// Chapter 14
// Array
// 배열 : 순서가 있는 리스트
// 배열은 문자 뿐만이 아닌 숫자, 객체, 함수 등도 포함할 수 있다.
// let arr  = ['민수', 3, false, {name: 'Jim', age: 30,},function () { console.log('TEST');}];
// console.log(arr.length);
// 배열의 길이 => 배열명.length
// push() : 배열 끝의 값을 추가
// pop() : 배열 끝의 값을 제거
// unshift() : 배열 앞 값을 추가
// shift() : 배열 앞 값을 제거
// push()/unshift()는 여러 값을 한 번에 추가할 수 있다.
// 배열을 쓰는 이유는 반복문을 사용 쓰기 좋기 때문이다.
// let days = ['월','화','수'];
// 반복문 : for
// for(let index = 0; index < days.length; index++) {
//     console.log(days[index]);
// }
// 반복문 : for .. of
// for .. in과 혼동하지 않도록 주의
// 배열도 객체이므로 for .. in이 사용이 가능하나, 장점보다 단점이 많다.
// for문보다 간단하나 index를 얻을 수 없는 단점이 존재
// for(let day of days) {
//     console.log(day);
// }

// let days = ['월','화','수'];
// console.log(days[1]);
// days[1] = 'tue';
// console.log(days);
// console.log(days.length);
// days.push('목')
// console.log(days);
// days.unshift('일');
// console.log(days);
// for(let index = 0; index < days.length; index++) {
//     console.log(days[index]);
// }
// for(let x of days) {
//     console.log(x);
// }