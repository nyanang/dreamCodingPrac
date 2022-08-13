// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class EmployeeInfo {
    #name;
    #depName;
    #hours;
    #wage;
    
    constructor(name, depName, hours, wage) {
        this.#name = name;
        this.#depName = depName;
        this.#hours = hours;
        this.#wage = wage;
    }

    monthlyWage() {
       return  this.#hours * this.#wage;
    }

}

class FullTime extends EmployeeInfo {
    static wage = 10000;
    constructor(name, depName, hours) {
        super(name, depName, hours, FullTime.wage);
    }
}

class PartTime extends EmployeeInfo {
    static wage = 8000;
    constructor(name, depName, hours) {
        super(name, depName, hours, PartTime.wage);
    }
}

const song = new FullTime('송', '개발', '80');
const yeol = new PartTime('열', '회계', '40');
console.log(song.monthlyWage());
console.log(yeol.monthlyWage());





// Answer beflow!!!!!!!!!


// class Employee {
//     constructor(name, department, hoursPerMonth, payRate) {
//         this.name = name;
//         this.department = department;
//         this.hoursPerMonth = hoursPerMonth;
//         this.payRate = payRate;
//     }
//     calculatePay() {
//         return this.hoursPerMonth * this.payRate; 
//     }
// }

// class FrullTimeEmployee extends Employee{
//     static PAY_RATE = 10000; 

//     constructor(name, department, hoursPerMonth) {
//         super(name, department, hoursPerMonth, FrullTimeEmployee.PAY_RATE);
//     } 
// }

// class PartTimeEmployee extends Employee{
//     static PAY_RATE = 8000; 


//     constructor(name, department, hoursPerMonth) {
//         super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
//     } 
// }



// const song = new FrullTimeEmployee('송', '개발', '80');
// const yeol = new PartTimeEmployee('열', '회계', '40');
// console.log(song.calculatePay());
// console.log(yeol.calculatePay());
