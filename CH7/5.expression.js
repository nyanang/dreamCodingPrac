// 함수 선언문 function ( ) { }
// 함수 표현식 const name = function () { }
// 화살표 함수 const name = () => { }

let add = function sum(a, b) {
    return a+b;
};

console.log(add(1,2));

add = (a, b) => {
    return a + b;
};

console.log(add(1,2));  

// add = (a, b) => a + b; 
// 가능가능

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸


// IIFE (Immediately-Ivoked Function Expressions)
(function run(){
    console.log('🤕');
})();