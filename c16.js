// Chapter 16
// Promise

// Promise
// new Promise로 생성
// resolve는 성공, reject는 실패했을 때 실행
// 어떤 일이 완료된 후 호출하는 함수를 콜백함수라고 함
// const pr = new Promise((resolve, reject) => {
// }) ;

// new Promise가 생성하는 객체
// state와 result를 프로퍼티로 가짐
// 초기
// state : pending(대기), result: undefined
// resolve(value) 호출 후
// state : fullfilled(이행됨), result: value
// reject(error) 호출 후
// state : rejected(거부됨), result: error


// 코드 예시

// 하기 코드는
// state가 pending이었다가, 3초 후 fullfilled로 전환
// result가 undefined이었다가, 3초 후 'OK'로 전환
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 3000);
// }) ;

// 하기 코드는
// state가 pending이었다가, 3초 후 rejected로 전환
// result가 undefined이었다가, 3초 후 error로 전환
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('error..'));
//     }, 3000);
// }) ;


// then
// 판매자의 코드
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 3000);
// }) ;

// 소비자의 코드
// then을 사용하여, resolve나 reject의 코드를 처리할 수 있음
// pr.then(
//     function(result){}, // 이행했을 때 실행
//     function(error){}, // 거부되었을 때 실행
// );

// 판매자의 코드
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 3000);
// }) ;

// 소비자의 코드
// then을 사용하여, resolve나 reject의 코드를 처리할 수 있음
// pr.then(
//     function(result){
//         console.log(result + ' 가지러 가자.');
//     }, // 이행했을 때 실행
//     function(error){
//         console.log('다시 주문해주세요.');
//     }, // 거부되었을 때 실행
// );

// catch, finally
// catch는 status가 rejected인 경우에 실행
// catch를 작성하는 것이 가독성이 좋고, then에서 발생된 에러도 잡아주므로 catch문도 작성하는 게 좋음
// finally는 이행/거부에 상관없이 항상 실행
// finally는 로딩 화면을 없앨 때 유용
// 판매자의 코드
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 3000);
// }) ;

// 소비자의 코드
// then을 사용하여, resolve나 reject의 코드를 처리할 수 있음
// pr.then(
//     function(result){}, // 이행했을 때 실행
// ).catch(
//     function(error){}, // 거부되었을 때 실행
// ).finally(
//     function () {
//         console.log('---- 주문 끝 ----');
//     }
// )

// 코드 실습
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('OK');
//         reject(new Error('error'));
//     }, 1000);
// }) ;
//
// console.log('시작');
// pr.then(
//     (result) => {
//         console.log(result);
//     }
// ).catch(
//     (error) => {
//         console.log(error);
//     }
// ).finally(
//     () => {
//         console.log('끝');
//     }
// );

// Promise를 사용하지 않고, callback 함수 처리
// const f1 = (callback) => {
//     setTimeout(function () {
//         console.log('1번 주문 완료');
//         callback();
//     }, 1000);
// };
// const f2 = (callback) => {
//     setTimeout(function () {
//         console.log('2번 주문 완료');
//         callback();
//     }, 3000);
// };
// const f3 = (callback) => {
//     setTimeout(function () {
//         console.log('3번 주문 완료');
//         callback();
//     }, 2000);
// };
//
// // 하기처럼 depth가 깊어지면서 코드가 복잡해지는 것을 callback hell (콜백 지옥)이라고 함
// console.log('시작');
// f1(function() {
//     f2(function() {
//         f3(function () {
//             console.log('끝');
//         });
//     });
// });

// Promise를 사용하고, 콜백 함수 처리
// const f1 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(function () {
//             res('1번 주문 완료');
//         }, 1000);
//     })
// };
// const f2 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(function () {
//             res('2번 주문 완료');
//             rej('error ... ');
//         }, 3000);
//     })
// };
// const f3 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(function () {
//             res('3번 주문 완료');
//         }, 2000);
//     })
// };

// 프로미스 체이닝 (promises chaining)
// reject가 실행되면 그 이후 코드는 실행되지 않음
// console.log('시작');
// console.time('x');
// f1()
//     .then(res => f2(res))
//     .then(res => f3(res))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => {
//         console.log('끝');
//         console.timeEnd('x');
//     });

// Promise.all :
// 상기 코드는 각 건마다 시간이 각각 1,3,2초가 소요되여 총 6초가 소요된다.
// 하기 코드는 3초가 소요됨
// 이 시간을 줄이기 위해 Promise.all을 사용하면 한꺼번에 실행이 가능
// 단, 모든 작업이 종료되어야 resolve가 실행됨
// 한꺼번에 시작하여, 모든 작업이 끝나야 값을 사용할 수 있음
// 주의할 점은 단, 한 가지라도 reject가 되면 에러가 발생되면서 아무 값도 받지 못함
// 이 경우는 하나의 데이터라도 누락되면 페이지를 보여주지 않고자 할 때 유용함 (다 보여주거나 그렇지 않을 때 사용)
// const f1 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(function () {
//             res('1번 주문 완료');
//         }, 1000);
//     })
// };
// const f2 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(function () {
//             res('2번 주문 완료');
//         }, 3000);
//     })
// };
// const f3 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(function () {
//             res('3번 주문 완료');
//         }, 2000);
//     })
// };
//
// // Promise.all()
// console.time('x');
// Promise.all([f1(), f2(), f3()])
// .then((res) => {
//     console.log(res);
//     console.timeEnd('x');
// });


// Promise.race()
// all은 다 끝날때까지 기다림
// race는 하나라도 1등으로 완료되면 종료
// 해당 함수는 용량이 큰 이미지를 운용하는데, 그 중 하나라도 완료되면 그 이미지를 보여줄 때 사용하면 유용함

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

// Promise.all()
console.time('x');
Promise.race([f1(), f2(), f3()])
.then((res) => {
    console.log(res);
    console.timeEnd('x');
});