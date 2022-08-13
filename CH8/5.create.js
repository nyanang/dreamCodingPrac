// const apple = {
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}: 🍎`); // 이것의 이름! 표현
//     },
// };

// apple.display();


// const orange = {
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}: 🍊`); // 이것의 이름! 표현
//     },
// };


// 생성자 함수
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`); 
    };
  //  return this; // 생략가능 
}


const greenApple = new Fruit('geenApple', '🍏');
const lemon = new Fruit('lemon', '🍋');

console.log(greenApple);
console.log(lemon);