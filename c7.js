// Chapter 7
// Logical Operator
// ||, &&, !
// OR는 여러 개 중 하나라도 true면 true, 즉 모든 값이 false일 때만 false를 반환
// AND는 여러 개 중 하나라도 false면 false, 즉 모든 값이 true일 때만 true를 반환
// NOT는 true면 false, false면 true를 반환

//평가
// OR는 첫 번째 true를 발견하는 즉시 평가를 멈춤
// AND는 첫 번째 false를 발견하는 즉시 평가를 멈춤

// 우선순위
// AND (&&) > OR (||)

// OR
// const name = "Jim";
// const age = 30;
// if(name === "Tom" || age > 19) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// AND
// const name = "Jim";
// const age = 30;
// if(name === "Tom" && age > 19) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

//NOT
// const age = 20;
// const isAdult = age > 19;
// if(!isAdult) {
//     console.log("돌아가!");
// } else {
//     console.log("통과");
// }

// const gender = 'F';
// const name = 'Jane';
// const isAdult = true;

// if(gender === 'M' && name === 'Mike' || isAdult) { // 의도와 다르게 동작된다.
// if(gender === 'M' && (name === 'Mike' || isAdult)) { // 의도에 맞게 동작된다.
//     console.log('Pass!');
// } else {
//     console.log('Fail!');
// }