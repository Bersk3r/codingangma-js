// Chapter 13
// call, apply, bind
// 자바스크립트에서는 일반적인 방법 외에 함수를 어디서 어떻게 호출하였는지 this가 무엇인지 지정할 수 있음
// 함수 호출 방식과 관계 없이 this를 지정할 수 있음

// call 메서드 : 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있음
// 함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드처럼 사용할 수 있음
// 첫 번째 매개변수 : this로 사용할 객체, 나머지는 해당 함수의 매개변수
// const mike = {
//     name :  'Mike',
// };
// const tom = {
//     name : 'Tom',
// };
// function showThisName() {
//     console.log(this.name);
// }
// showThisName();
// console.log(global.name);
// showThisName.call(mike);
// showThisName.call(tom);

// const mike = {
//     name :  'Mike',
// };
// const tom = {
//     name : 'Tom',
// };
// function showThisName() {
//     console.log(this.name);
// }
// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }
// update.call(mike, 1999, 'singer');
// console.log(mike);
// update.call(tom, 2002, 'teacher');
// console.log(tom);

// apply : apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 동일합니다.
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.

// const mike = {
//     name :  'Mike',
// };
// const tom = {
//     name : 'Tom',
// };
// function showThisName() {
//     console.log(this.name);
// }
// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }
// update.apply(mike, [1999, 'singer']);
// console.log(mike);
// update.apply(tom, [2002, 'teacher']);
// console.log(tom);


// apply는 배열의 값을 함수 매개변수로 사용할 때 유용함
// const nums = [3, 10, 1, 6, 4];
// // const minNum = Math.min(...nums);
// // const minNum = Math.min([3, 10, 1, 6, 4]); // NaN
// // const minNum = Math.min.apply(null, nums);
// const minNum = Math.min.call(null, ...nums);
// // const maxNum = Math.max(...nums);
// const maxNum = Math.max.call(null, ...nums);
// console.log(minNum);
// console.log(maxNum);

// bind는 함수의 this 값을 영구히 바꿀 수 있음
// const mike = {
//     name: 'Mike',
// };
// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }
// const updateMike = update.bind(mike);
// updateMike(1980, 'police');
// console.log(mike);

// const user = {
//     name: 'Mike',
//     showName: function () {
//         console.log(`hello, ${this.name}`);
//     },
// }
// user.showName();
// let fn = user.showName; // 이 때, this를 잃어버림
// fn();
// fn.call(user);
// fn.apply(user);
// let boundFn = fn.bind(user);
// boundFn();