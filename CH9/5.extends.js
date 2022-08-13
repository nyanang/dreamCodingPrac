// class Tiger {
//     constructor(color) {
//         this.color = color; 
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔당!');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color; 
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔당!');
//     }
//     play() {
//         console.log('놀자뤼');
//     }
// }


class Animal {
    constructor(color) {
        this.color = color; 
    }
    eat() {
        console.log('먹자!');
    }
    sleep() {
        console.log('잔당!');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();


class Dog extends Animal {
    constructor(color, ownerName){
        // 자식의 constructor를 정의하는 순간
        // 부모의 속성도 받아와야하며,
        
        super(color); // 부모생성자를 의미함
        this.ownerName = ownerName;
    }

    play() {
        console.log('놀자뤼');
    }

    // overriding
    eat() {
        super.eat();
        console.log('강아지 먹는다 많이'); // 부모 eat을 덮어 쓸 수 있음
    }
}


const dog = new Dog('빨강이', '똥이');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
