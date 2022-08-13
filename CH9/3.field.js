// 접근제어자 - 캡슐화
// private(#), public(기본), protected




// Class 클래스
class Fruit {
    #name;
    #emoji;
    #type = '과일';
    //생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }
    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.#name}: ${this.#emoji}`); 
    }
}

//apple 은 Fruit 클래스의 인스턴스이다.
const greenApple = new Fruit('geenApple', '🍏');
console.log(greenApple);