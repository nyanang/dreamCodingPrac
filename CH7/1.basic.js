// function add(a, b) {
//     const result = a + b;
//     return result;
//     // return a + b;
// }

// 사용예제 1

function add(a, b) {
   console.log('function');
    return a+b;
}
const result = add(1,2);
console.log(result);


// 사용예제 2
// let lastName = '김';
// let firstName = '지수';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

// let lastName2 = '박';
// let firstName2 = '철수';
// let fullName2 = `${lastName2} ${firstName2}`;
// console.log(fullName2);

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

let lastName = '김';
let firstName = '지수';

console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';

console.log(fullName(firstName2, lastName2));