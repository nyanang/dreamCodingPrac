const x = 0;
const y = 0;
const coordinate = {x, y}; // {x: x, y: y};
console.log(coordinate);
// 변수와 이름이 같다면, 생략 가능


function makeObj(name, age){
    return{
        name, // name: name,
        age, // age: age, 
    };
}

// 이렇게만 써도 된대!!