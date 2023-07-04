// Chapter 1
// DOM & EVENT

// DOM : Document Object Model
// HTML의 각 요소를 트리 형태로 표현함
// 개발자는 자바스크립트를 사용하여 이를 생성하거나, 수정하거나 삭제할 수 있음
// 하나의 개체를 노드라고 함
// 위 쪽을 부모 노드, 아래 쪽을 자식 노드라고 함
// Document를 제외한 최상단 HTML 태그는 root 노드가 됨
// Chrome에서 개발자 도구로 열었을 때 볼 수 있는 구조가 DOM임
// 모든 HTML 태그는 객체임 => 객체는 모두 자바스크립트로 접근하고 제어가능함


// document.documentElement : HTML
// document.body : BODY
// document.head : HEAD
// document.body.style : BODY STYLE
// document.body.style.opacity = '0'; // 투명도
// document.body.style.opacity = '0.5'; // 투명도
// document.body.style.padding = '100px'; // 패딩 간격
// const el = document.getElementById('first');
// el;
// const pList = document.getElementsByTagName('p'); // p 태그를 전부 선택
// pList;
// for(p of pList) {
//     p.style.fontSize = '30px';
// }
// for(p of pList) {
//     p.style.opacity = String(Math.Random());
// }

// ID는 한 페이지에 딱 한번만 사용가능
// document.getElementBy~ / getElementsBy~를 이용히면 Name이나 클래스 이름으로 접근이 가능
// pList는 for .. of로 순회 가능
// document.getElementsByClassName('link');

// document.querySelectorAll('.link'); // 클래스 이름이 link을 태그를 모두 지정
// document.querySelector('#first'); // ID명이 first인 태그를 지정
// document.querySelector('.link'); // 클래스 이름이 link을 태그를 1개 지정
// document.querySelector('h3:nth-of-type(2)'); // 두 번째 h3 태그를 지정
// document.querySelector('h3:nth-of-type(2)').style.color = 'red'; // 두 번째 h3 태그의 글자색을 빨강으로 변경
// document.querySelector('p:nth-of-type(2n)'); // p 태그의 짝수번째만 선택
// for(p of pList) {
//     p.style.backgroundColor = '#000'; // p 태그의 스타일 배경색을 검은색으로 변경
//     p.style.color = '#fff'; // p 태그의 스타일 글자색을 흰색으로 변경
// }

// 지금까지 메소드로 가져온 태그 목록은 배열로 보이나, 실제로는 nodeList라는 자료형으로 되어 있다.
// Array가 아니므로 배열에서 사용가능한 메소드는 사용할 수 없음
// nodeList는 Iterable한 Collection을 의미
// pList[1]; // 인덱스를 통해 접근 가능
// pList.length;



