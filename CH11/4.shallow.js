// 얕은 복사 shoallow copy - 객체는 메모리 주소 전달
// JS 에서 복사할 때, 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), object.assign




const pizza = {name: '🍕', price: 2};
const ramen = {name: '🍜', price: 1};
const sushi = {name: '🍣', price: 3};

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('str1', store1);
console.log('str2', store2);

console.clear()
store2.push(sushi);
console.log('str1',  store1);
console.log('str2', store2);


pizza.price = 4;
console.log('str1',  store1);
console.log('str2', store2);