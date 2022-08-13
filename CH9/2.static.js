// static 정적 프로퍼티, 메서드


// Class 클래스
class Fruit {
    static MAX_FRUITS = 4;

    //생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }


    //클래스 레벨의 메서드
    static makeRandomFruit(){
        // 클래스 레벨의 메서드에서는 this 참조를 할 수 없음
        return new Fruit('banana', '🍌');
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`); 
    }
}


const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);


//apple 은 Fruit 클래스의 인스턴스이다.
const greenApple = new Fruit('geenApple', '🍏');
// lemon 은 Fruit 클래스의 인스턴스이다.
const lemon = new Fruit('lemon', '🍋');



Math.pow();
Number.isFinite(1);