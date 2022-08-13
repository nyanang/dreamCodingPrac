// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수(오래된 고전적인 방법)
// 2. 클래스 ✨


// Class 클래스
class Fruit {
    //생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    display = () => {
        console.log(`${this.name}: ${this.emoji}`); 
    }
}

//apple 은 Fruit 클래스의 인스턴스이다.
const greenApple = new Fruit('geenApple', '🍏');
// lemon 은 Fruit 클래스의 인스턴스이다.
const lemon = new Fruit('lemon', '🍋');

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name: 'ellie'};

console.log(greenApple);
console.log(lemon);
console.log(greenApple.name);
console.log(greenApple.emoji);

lemon.display();
