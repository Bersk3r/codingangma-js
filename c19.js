// Chapter 19
// ES2021 added functions

console.clear();
// ES2021
// 직접 테스트하는 경우, Chrome 사용을 권장

// String.replaceAll();
// replace와 사용법이 동일
// replace는 첫 번째 문자만 바꾸지만, replaceAll은 모든 문자열에 적용
//const str1 = "Hello World";
// console.log(str1.replace("l", "~"));
// console.log(str1.replaceAll("l", "~"));
// replaceAll이 없었을 때
// console.log(str1.replace(/l/g, "~"));

// 특수문자가 존재하는 경우, replaceAll이 유용
// replaceAll이 replace에서 정규 표현식을 사용했을 때보다 가독성이 좋음
// const str1 = "I'm [Mike]. This is Tom's [Car].";
// console.log(str1.replaceAll("[","~").replaceAll("]","~"));
// console.log(str1.replace(/\[/g,"~").replace(/\]/g,"~"));

// Promise.any()

// const rejPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("fail ...")
//     }, 1000)
// })
// const resPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("success")
//     }, 2000)
// })
// race는 전달된 Promise 중에 가장 먼저 완료된 결과 값으로 이행/거부
// Promise.race([rejPromise, resPromise])
//     .then(() => console.log("성공"))
//     .catch(e => console.log(e));

// any는 전달된 Promise 중에 가장 먼저 이행된 객체 반환
// 모두 reject인 경우, 모든 프로미스가 거부되었다는 메세지를 보여줌
// Promise.any([rejPromise, resPromise])
// Promise.any([rejPromise, rejPromise])
//     .then(() => console.log("성공"))
//     .catch(e => console.log(e));

// Logical Assignment Operators
// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add();
// function add(num1, num2) {
//     num1 = num1 || 0;
//     num2 = num2 || 0;
//     console.log(num1 + num2);
// }
// add();
// function add(num1, num2) {
//     num1 ||= 0;
//     num2 ||= 0;
//     console.log(num1 + num2);
// }
// add();

// let num = 0;
// num = num + 3;
// num += 3;

// name = name && `Hello ${name}`;
// let name;
// name &&= `Hello ${name}`;
// console.log(name);

// name = name ?? "Mike";
// ||는 앞의 값이 falsy이면, 뒤의 값 (0이나 빈 문자열이여도 뒤의 값 반환)
// ?? : Nullish coalescing operator : null 병합 연산자 (null이거나 undefined일 때, 뒤에 부분 실행)
// let name;
// name ??= "Mike";
// console.log(name);

// let num = 0;
// let a = num || 3;
// let b = num ?? 3;
// console.log(
//     a,
//     b
// );


// Numeric Separators
// let billion = 1000000000 // 10억
// let billion = 1,000,000,000 // 10억 (자바스크립트는 , 구분자를 허용 X)
// let billion = 1_000_000_000 // 10억 (, 대신에 _를 구분자로 사용)
// console.log(billion);

// WeakRef : Weak Reference의 약어
// MDN 문서에는 가능한한 피하라고 되어 있음
// JS에는 가비지 컬렉터가 존재 (사용하지 않는 객체를 메모리에서 자동해제해주는 역할)
// 참조가 되어 있으면 메모리에서 제거하지 않음, 개발자가 사용하고 있는 객체를 없애면 안 되므로
// 약한 참조는 가비지 컬렉터의 대상이 됨
// WeakRef는 약한 참조이므로 특정 객체를 일정 시간 동안 캐싱하도록 만들 수 있음

let user = {name: 'Mike', age: 30};
const weakUser = new WeakRef(user); // 약한 참조로 user를 참조

user = null;

const timer = setInterval(() => {
    const wUser = weakUser.deref(); // deref는 참조에 접근하기 위해 사용
    if(wUser) {
        console.log(wUser.name);
    } else {
        console.log('제거되었습니다.');
        clearInterval(timer);
    }
}, 1000)

class MyCache {
    constructor() {
        this.cache = {}
    }

    add(key, obj) {
        this.cache[key] = new WeakRef(obj) // 약한 참조
        // this.cache[key] = obj // 강한 참조 (Garbage Collector 대상이 아님)
    }

    get(key) {
        let cachedRef = this.cache[key].deref()
        if(cachedRef) {
            return cachedRef
        } else {
            return false;
        }
    }
}