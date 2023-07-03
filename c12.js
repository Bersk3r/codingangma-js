// Chapter 12
// setTimeout / setInterval
// setTimeout : 일정 시간이 지난 후, 함수를 실행
// setInterval : 일정 시간 간격으로 함수를 반복

// function fn() {
//     console.log(3);
// }
// 1번 인수 : 일정 시간 후 실행할 함수, 2번 인수: 시간 (ms)
// setTimeout(fn, 3000);
// setTimeout(function() {
//     console.log(3);
// }, 3000);

// 인수가 필요한 경우, 시간 뒤에 작성하면 됨
// function showName(name) {
//     console.log(name);
// }
// 1번 인수 : 일정 시간 후 실행할 함수, 2번 인수: 시간 (ms), 이후 인수 : 실행할 함수의 인자
// setTimeout(showName, 3000, 'Mike');

// setTimeout을 종료하는 방법
// clearTimeout(tId);
// function showName(name){
//     console.log(name);
// }
// const tId = setTimeout(showName, 3000, 'Mike');
// clearTimeout(tId);

// setInterval
// function showName(name){
//     console.log(name);
// }
// const tId = setInterval(showName, 1000, 'Mike');
// clearInterval(tId);

// 주의 사항 (setTimeout / setInterval)
// delay = 0이여도 바로 실행되지 않음
// 이유 : 현재 실행 중인 스크립트가 종료된 이후, 스케쥴링 함수를 실행하므로
// 브라우저는 기본적으로 4ms의 대기 시간이 존재
// setTimeout(function() {
//     console.log(2) // (2)
// }, 0);
// console.log(1); // (1)

// 코드 실습
// let num = 0;
// function showTime() {
//     console.log(`안녕하세요. 접속하신 지 ${num++}초가 지났습니다.`);
//     if(num > 5) { clearInterval(tId); }
// }
// const tId = setInterval(showTime, 1000);