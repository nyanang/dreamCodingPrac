// 접근자 프로퍼티 (Accessor Property)

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // fullName()이라고 함수처럼 호출하지 않고, 속성에 접근하든 호출이 가능함
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }

    // 할당을 하는 것
    set fullName(value){
        console.log('set', value);
    }
}

const student = new Student('Song', 'Kim');
console.log(student.firstName);
console.log(student.fullName);

student.fullName = '김철수';