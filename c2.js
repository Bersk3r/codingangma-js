// Chapter 2
// Parent, Child, Brother nodes

// 하기의 두 메소드는 결과는 동일하나, 반환 값이 다름
// querySelectorAll은 NodeList를 반환
// getElementByTagName은 HTMLCollection을 반환
// 둘 다 유사배열 객체면서 Iterable임
// document.querySelectorAll('p');
// document.getElementsByTagName('p');

// const pList1 = document.querySelectorAll('p');
// const pList2 = document.getElementsByTagName('p');
// pList1;
// pList2;
// p 태그를 임의로 추가했을 때, pList1은 그대로이나, pList2는 값이 변했음
// 선언은 p를 추가하지 전에 했으나, HTMLCollection은 최신 값을 반영함
// HTMLCollection은 Node의 결과 값이 자동으로 실시간 반영됨, 하지만 NodeList는 한번 저장된 값을 계속 사용
// 대부분은 이렇게 동작하나, 아닌 경우도 존재함

// const red = document.getElementById('red');
// red.parentNode; // ul
// red.parentElement; // ul
// document.documentElement; // HTML
// document.documentElement.parentNode; // document (HTML 부모 노드 중 모든 노드를 반환)
// document.documentElement.parentElement; // null (부모 노드 중에 요소 노드만 반환)
// 요소 노드란, HTML 태그로 이뤄진 요소를 의미

// Node는 다양한 타입이 존재, 총 12개 존재 (그 중 5,6,12는 사용되지 않음)
// Node.ELEMENT_NODE (1) : 요소 노드 (p, div와 같은 HTML 요소)
// Node.ATTRIBUTE_NODE (2) : attribute 노드 (img 태그의 alt 값)
// Node.TEXT_NODE (3) : TEXT 노드 (말그대로 텍스트)
// Node.COMMENT_NODE (8) : 주석
// Node.DOCUMENT_NODE (9) : document

// const ul = document.getElementById('color');
// ul.childnodes; // 자식 노드 전부를 의미 (NodeList 반환, 모든 타입의 노드)
// li를 포함한 모든 타입의 노드를 반환함
// ul과 li 사이엔 텍스트가 존재하지 않는데 텍스트가 존재하는 이유는 HTML이 파싱된 후, DOM을 생성할 때 생기는 공백 문자
// 들여쓰기나 줄 바꿈도 텍스트 노드에 포함됨
// 예외적으로 HTMLCollection과 같이 실시간 변화가 동작함
// ul.children; // 자식 노드 중 요소 노드만 반환 (HTMLCollection 반환, 요소 타입의 노드)
// HTML에 접근할 때는 가급적 요소 노드에만 접근하는 게 편함
// ul.firstChild; // 첫 번째 노드
// ul.lastChild; // 마지막 노드
// 상기 2개보다 이게 많이 사용됨
// ul.firstElementChild; // 첫 번째 요소 노드
// ul.lastElementChild; // 마지막 요소 노드

// 형제 노드
// 이전 형제와 다음 형제로 나뉨
// const blue = document.getElementById('blue');
// blue.previousSibling; // 이전 형제 노드
// blue.nextSibling;  // 다음 형제 노드
// 상기 2개보다 이게 많이 사용됨
// blue.previousElementSibling; // 이전 형제 요소 노드
// blue.nextElementSibling;  // 다음 형제 요소 노드

// 노드에 대한 구조
/*
*      / 모든 노드 / 요소 노드만
* 부모 /  parentNode / parentElement
* 자식 /  childNodes / children
*      /  firstChild / firstElementChild
*       / lastChild /  lastElementChild
* 형제  /  previousSibling / previousElementSibling
*       / nextSibling   / nextElementSibling
*/

// 실무에선 요소 노드에 접근하는 경우가 많음