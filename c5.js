// Chapter 5
// Number, Math

// toString()
// 개발 시, 10진수 -> 값 표현을 위해 2진수나 16진수를 사용하는 경우가 있음
// 문자열로 변환해주는 메소드이다.
// 괄호 안에 숫자를 넣으면 해당 숫자의 진수로 변환해준다.

// let num = 10;
// console.log(num.toString()); // "10"
// console.log(num.toString(2)); "1010"

// let num2 = 255;
// console.log(num2.toString()); // "10"
// console.log(num2.toString(16)); // "ff"

// Math
// JS에는 숫자랑 관련된 프로퍼티나 메서드를 가진 Math라는 내장 객체가 존재한다.
// console.log(Math.PI); // 3.141592653589793

// let num1 = 5.1;
// let num2 = 5.7;

// Math.ceil() : 소수점 올림
// console.log(Math.ceil(num1)); // 6
// console.log(Math.ceil(num2)); // 6

// Math.floor() : 소수점 내림
// console.log(Math.floor(num1)); // 5
// console.log(Math.floor(num2)); // 5

// Math.floor() : 소수점 반올림
// console.log(Math.round(num1)); // 5
// console.log(Math.round(num2)); // 6

// 소수점 자릿수
// 작업을 하다보면 소숫점까지 표현해야 할 때가 존재한다.
let userRate = 30.1234;

// 요구 사항 : 소수점 둘째자리까지 표현 (셋째 자리에서 반올림)
// 1번 방법
// userRate * 100; // 3012.34
// Math.round(userRate * 100); // 3012
// Math.round(userRate * 100)/100; // 30.12
// console.log(userRate);

// 2번 방법
// 소수점 자릿수 : toFixed()
// 해당 인자의 숫자만큼 소수점 자릿수를 구해준다.
// 0인 경우, 정수 부분만 보여주고, 자릿수보다 큰 경우, 빈 자리를 0으로 채운다.
// 반환 값은 문자열이므로 주의해야 함

// userRate = userRate.toFixed(2); // "30.12"
// userRate = Number(userRate) // 30.12
// userRate = userRate.toFixed(0); // "30"
// userRate = userRate.toFixed(6); // "30.123400"
// console.log(userRate);

// isNaN() : NaN인지 판단
// 해당 메서드만 NaN인지 판단할 수 있음
// let x = Number('x'); // NaN
// x == NaN // false
// x === NaN // false
// NaN === NaN // false
// console.log(isNaN(x)); // true
// console.log(isNaN(3)); // false

// parseInt() : 문자를 숫자로 바꿔준다.
// Number와 다른 점은 문자가 혼용되어도 숫자만 추출이 가능하다.
// let margin = '10px';
// console.log(parseInt(margin)); // 10
// console.log(Number(margin)); // NaN

// 단, 시작 글자가 숫자여만 가능하다.
// let redColor = 'f3';
// console.log(parseInt(redColor)); // NaN

// 두 번째 인수를 받아서, 진수를 지정할 수 있다.
// let redColor = 'f3';
// console.log(parseInt(redColor, 16)); // 243
// // 이진수 -> 십진수 변화도 쉬움
// console.log(parseInt('11', 2)); // 3

// parseFloat() : 문자를 숫자로 바꿔주나, 부동 소수점을 반환한다.
// let padding = '18.5%';
// console.log(parseInt(padding)); // parseInt는 소수점 이하는 무시하고 정수만 반환
// console.log(parseFloat(padding));

// Math.random() : 0 ~ 1 사이 무작위 숫자 생성
// console.log(Math.random());

// 1 ~ 100 사이의 임의의 숫자를 뽑고 싶은 경우
// console.log(Math.floor(Math.random()*100) + 1);

// Math.max() / Math.min() : 최댓값/최솟값을 구하는 메서드
// console.log(Math.max(1,4,-1,5,10,9,5.54)); // 10
// console.log(Math.min(1,4,-1,5,10,9,5.54)); // -1

// Math.abs() : 절댓값
// abs는 absolute의 약어
// Math.abs(-1) // 1

// Math.pow(n,m) : n의 m제곱
// pow는 power의 약어
// console.log(Math.pow(2,10)); // 1024

// Math.sqrt() : 제곱근
// sqrt는 square root의 약어
// console.log(Math.sqrt(16)); // 4

// 숫자와 관련된 메서드나 속성, 객체는 쇼핑몰, 통계, 지표 등과 같은 업무를 할 때 중요함
