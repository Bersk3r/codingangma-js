// chapter 4
// Type Casting
// 형변환이 필요한 경우는 자료형이 다름으로 인한 의도치 않은 오류를 막기 위해서이다.
// 자동형변환은 편해보여도, 원인이 찾기 어려운 오류를 발생시킬 수 있기 때문에 명시적 형변환을 하는 것이 좋다.

// 문자형으로 변환
// String()
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
);

// 숫자형으로 변환
// Number()
console.log(
    Number("1234"),
    Number("1234abc"),
    Number(true),
    Number(false),
)


// 불린형으로 변환
// Boolean()
// console.log(
//     false,
//     Boolean(0),
//     Boolean(""),
//     Boolean(null),
//     Boolean(undefined),
//     Boolean(NaN),
//     // Boolean(document.all),
// )

// const mathScore = "80";
// const engScore = "90";
// const result = (mathScore + engScore) / 2;
// console.log(result);

// 주의 사항
// console.log(
// Number(null), // 0
// Number(undefined), // NaN
// )

// console.log(
//     Boolean(0), // false
//     Boolean('0'), // true
//     Boolean(''), // false
//     Boolean(' '), // true
// )