// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// counter 클래스 만들기

// class Counter {
//     constructor(input) {
//         if (input <  0) {
//             this.input = 0;
//         } else {
//             this.input = input; 
//         }
//     }
//     increment(){
//         this.input++;
//         console.log(this.input);
//     }
// }

// const counter = new Counter(-1);
// counter.increment(); //숫자를 하나씩 호출 1이됨 
// counter.increment(); // 2가됨 
// console.log(counter.value);

class Counter {
    #value;
    constructor(startValue){
        if (isNaN(startValue) || startValue< 0) {
            this.#value = 0;
        } else{
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value++;
    };
    increment = () => {
        this.#value++;
    };
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value); 