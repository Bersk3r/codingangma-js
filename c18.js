// Chapter 18
// Generator

// Generator : 함수의 실행을 중간에 멈췄다 재개할 수 있는 기능
// Generator는 function 옆에 * 키워드를 작성하고, 내부에서 yield 키워드를 사용
// yield를 통해 함수를 멈출 수 있음
// Generator 객체를 반환, 해당 객체에는 next 메서드가 존재
// function* fn() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return "finish";
// }
// const a = fn();

// a.next를 호출해야 실행됨
// a.next를 호출하면 가장 가까운 yield문을 만날 때까지 실행되고 데이터 객체를 반환
// 반환된 데이터 객체는 value와 done이라는 속성을 가짐
// value는 yield 오른쪽 기입된 값이며, 값을 생략하면 undefined가 됨
// done은 함수 코드가 끝났는지 여부를 판단, 끝났으면 true, 아니면 false를 반환
// function* fn() {
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
//     console.log(3);
//     console.log(4);
//     yield 3;
//     return "finish";
// }

// const a = fn();
// console.log(a);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// Generator는 next 메소드 외에, return과 throw 메소드를 가짐
// return 메소드를 사용하면 그 즉시, done이 true가 되며, 함수가 종료됨
// const a = fn();
// console.log(a.next());
// console.log(a.next());
// console.log(a.return('END'));
// console.log(a.next());

// throw 메소드를 사용하면 그 즉시, done이 true가 되며, 함수가 종료됨
// function* fn() {
//     try {
//         console.log(1);
//         yield 1;
//         console.log(2);
//         yield 2;
//         console.log(3);
//         console.log(4);
//         yield 3;
//         return "finish";
//     } catch(e) {
//         console.log(e);
//     }
// }
// const a = fn();
// console.log(a.next());
// console.log(a.next());
// console.log(a.throw(new Error('err')));
// console.log(a.next());

// Generator는 Interator이면서 Iterable임
// Iterable은 Symbol.iterator라는 메소드가 존재하며, Symbol.iterator는 iterator를 반환해야 함. (반복이 가능)
// iterator는 next 메소드를 가지며, next 메소드는 value와 done 속성을 가진 객체를 반환, 작업이 끝나면 done은 true가 됨

// 배열도 반복이 가능한데, 해당 내용을 들어본 적이 없음
// const arr =[ 1, 2, 3, 4, 5 ];
// const it = arr[Symbol.iterator]();
// 아까와 동일하게 동작됨
// 배열은 Symbol.iterator를 가지고 있고, 반환 값이 iterator이므로 iterable하다고 할 수 있음
// 배열은 반복 가능한 객체임
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// iterable은 for .. of를 통한 순회도 가능
// for(let num of arr) {
//     console.log(num);
// };

// function* fn() {
//     yield 4;
//     yield 5;
//     yield 6;
// }

// const a = fn();
// 하기 코드는 Generator에서 Symbol.iterator를 실행하는 값이 자기 자신이다라는 의미임
// console.log(a[Symbol.iterator]() === a);
// for .. of가 시작되면, Symbol.iterator를 호출
// 없으면 에러가 발생함
// 반환된 iterator에 next 메소드를 호출하면서 done이 true가 될 때까지 반복
// for(let num of a) {
//     console.log(num);
// }

// 문자열도 iteratoble이다.
// const str = 'hello';
// console.log(str[Symbol.iterator]);
// const xx = str[Symbol.iterator]();
// console.log(xx.next());
// for(let num of str) {
//     console.log(num);
// }

// Generator : next()에 인수 전달
// Generator는 외부로부터 값을 입력받을 수 있음
// function* fn() {
//     const num1 = yield "첫 번째 숫자를 입력해주세요.";
//     console.log(num1);
//
//     const num2 = yield "두 번째 숫자를 입력해주세요.";
//     console.log(num2);
//
//     return num1 + num2;
// }
//
// const a = fn();
// a.next();
// a.next(2); // 헤당 값은 num1에 저장
// a.next(3); // 헤당 값은 num2에 저장

// Generator : 미리 값을 만들어두지 않음
// 메모리 관리 측면에서 효율적임
// 필요한 순간에만 연산해서 값을 주기 때문
// 무한 루프를 돌아도 브라우저 죽지 않음
// 즉, Generator를 사용하지 않았을 때 break가 없는 while(true)문은 사절
function* fn() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

const a = fn();
a.next();
a.next();
a.next();
a.next();

// Generator는 필요한 값만 그 때마다 생성함
// 일반적인 함수로 어떤 것을 구할 때 모든 값을 미리 계산해야 함
// 사용하지 않는 상황에서도 그 값을 유지해야 함
// 하지만 Generator를 사용하면 필요한 순간까지 미룰 수 있음

// 다른 Generator 호출
// yield*을 이용

function* gen1() {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2() {
    yield "Hello, ";
    yield* gen1(); // 해당 부분에 반복가능한 모든 객체가 올 수 있음
    yield "!";
}
// spread 문법은 done이 true가 될 때까지 값을 펼쳐줌
console.log(...gen2());

// Generator는 다른 작업을 하다가 다시 돌아와서 next()를 하면 진행이 멈춘 부분부터 이어서 실행
// ex) Redux Saga : Generator를 가장 활발히 사용
