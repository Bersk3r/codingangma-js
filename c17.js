// Chapter 17
// async / await

// async / await를 사용하면 Promise에서 then 메서드를 호출하는 것보다 가독성을 높일 수 있음
// Promise.then보다 async/await를 사용하는 것을 선호
// async function getName() {
//     // return "Mike";
//     // return Promise.resolve("Tom");
//     throw new Error('error');
// }

// getName().then((name) => {
//     console.log(name);
// })
// getName().catch((err) => {
//     console.log(err);
// })

// await 키워드
// async 함수 내부에서만 사용 가능
// await 오른쪽에는 반드시 Promise가 온다.
// function getName(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(name);
//         }, 1000);
//     });
// }
//
// async function showName() {
//     const result = await getName('Mike');
//     console.log(result);
// }
//
// console.log("시작");
// showName();


const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res('1번 주문 완료');
        }, 1000);
    })
};
const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function () {
            res('2번 주문 완료');
            // rej('error ... ');
        }, 3000);
    })
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function () {
            res('3번 주문 완료');
        }, 2000);
    })
};

// async function order() {
//     try {
//         const result1 = await f1();
//         const result2 = await f2(result1);
//         const result3 = await f3(result2);
//         console.log(result3);
//     } catch(e) {
//         console.log(e)
//     }
//     console.log('종료');
// }
// order();

// async / await 함수 내부에서도 비동기 함수를 병렬로 사용할 수 있음
// console.log('시작');
// async function order() {
//     try {
//         const result = await Promise.all([f1(), f2(), f3()]);
//         console.log(result);
//     } catch(e) {
//         console.log(e)
//     }
//     console.log('종료');
// }
// order();
