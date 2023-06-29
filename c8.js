// Chapter 8
// loop
// while, do-while, for

// 반복문 loop : 동일한 작업을 여러 번 반복
//  break는 실행문을 멈추고 빠져나옴, continue는 멈춘 다음, 다음 반복을 진행

// for
// for(let i = 0; i < 10; i++) {
//     console.log(i+1);
// }
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// for(let i = 1; i < 11; i++) {
//     console.log(i);
// }

// while
// let i = 0;
//
// while(i<10) {
//     console.log(i+1);
//     i++;
// }

//do..while
// let i = 0;
// do {
//     console.log(i+1);
//
//     i++;
// } while(i<10);

// break
// let a = 1;
// while(true) {
//     console.log(a);
//     if(a === 10) {
//         break;
//     }
//     a++;
// }

// continue
// for(let i = 0; i < 10; i++) {
//     if(i%2) {
//         continue;
//     }
//     console.log(i);
// }