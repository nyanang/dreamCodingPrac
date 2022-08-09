// 퀴즈!

let num = 2;
// num의 숫자가 짝수면 👍, 홀수면 🤌🏻 을 출력하도록
// if
//ternary

//Answer
//1. if
if (num % 2 === 0) {
    console.log('👍');
} else {
    console.log('🤌🏻');
};

//2. ternary
num % 2 === 0 ?  console.log('👍') :  console.log('🤌🏻');

let emoji = num % 2 === 0 ?  '👍' :  '🤌🏻'; // 할당
console.log(emoji);