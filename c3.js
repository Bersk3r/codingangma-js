// Chapter 3
// node 생성, 추가, 복제, 삭제

// const blue = document.getElementById('blue');
// blue.firstChild;
// blue.firstElementChild;
// const blueTextNode = blue.firstChild;
// blueTextNode.nodeName; // '#text'
// blueTextNode.nodeType; // 3

// 개발 도중 특정 요소의 텍스트를 가져와서 사용해야할 때, nodeValue 활용 가능
// 수정도 가능
// nodeValue는 모든 노드가 가지고 있는 프로퍼티이나, 텍스트 노드가 아니면 null임
// TEXT_VALUE만 nodeValue를 사용한 수정이 가능
// 단, textContent는 TEXT 노드가 아니어도 값 수정 가능
// blueTextNode.nodeValue; // 'Blue'
// blueTextNode.nodeValue = '파랑'; // '파랑'
// const ul = document.getElementById('color');
// ul.nodeType; // 1
// ul.nodeName; // 'UL'
// ul.nodeValue; //  null
// ul.textContent; //  마크업이 모두 사라짐
// ul.textContent = 'xxxx'; // 다른 값으로 덮어쓰여짐
// ul.textContent = '<li>RED</li>'; // 제대로 된 마크업을 넣어도 넣은 문자열 그대로 표시됨
// 마크업을 잘 표현하려면 innerHTML을 사용하면 됨
// 마크업을 간단하게 적용할 수 있으나, 추가, 변경 등의 작업을 할 때 모든 HTML을 스트링으로 모두 작성해야 함
// ul.innerHTML = '<li>RED</li>'
// ul.innerHTML = '<li>RED</li><li>BLUE</li>'

// 자바스크립트로 DOM을 다루면 추가, 수정, 삭제가 빈번히 발생됨
// 이를 쉽게 적용할 수 있는 방법

// innerHTML 사용
// const newLi = document.createElement('li');
// newLi;
// newLi.innerHTML = 'green';
// const ul = document.getElementById('color');
// ul.appendChild(newLi);

// innerHTML 사용 X
// const newLi2 = document.createElement('li');
// const newText = document.createTextNode('pink');
// newText;
// newLi2.appendChild(newText);
// const ul = document.getElementById('color');
// ul.appendChild(newLi2);

// 위 내용은 부모 노드의 마지막에 추가됨
// 그것보다 위나 이전에 추가하고자 하면 insertBefore를 활용하면 됨
// 새롭게 노드를 생성하지 않고, 기존 노드에 이 메서드를 전달하면 노드가 이동함
// const newLi3 = document.createElement('li');
// const textNode3 = document.createTextNode('black');
// textNode3;
// newLi3.appendChild(textNode3);
// const ul = document.getElementById('color');
// const red = document.getElementById('red');
// ul.insertBefore(newLi3, red);
// ul.appendChild(red);
// ul.insertBefore(red, newLi3);

// 노드 복제
// cloneNode는 인수로 Boolean 값을 받음
// 아무것도 없거나 false인 경우, 단순히 해당 노드만 복제함 (자식 노드 X)
// true인 경우, 자식 노드까지 복제함
// const newBlack = newLi3.cloneNode(); // 얕은 복제, 해당 노드만 복제
// const newBlack2 = newLi3.cloneNode(true); // 깊은 복제, 자식 노드까지 복제
// ul.appendChild(newBlack);
// ul.appendChild(newBlack2);

// 노드 삭제
// removeChild
// ul.removeChild(red);
// ul.removeChild(newBlack);
// ul.removeChild(ul.firstElementChild);
// ul.removeChild(ul.lastElementChild);