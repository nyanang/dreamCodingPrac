// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)


function printOnce(a) {
    max = a;
    for (let i = 1; i <= max ; i++) {
        console.log(i);
    }
}

function printTwice(a) {
    max = a;
    for (let i = 1; i <= max ; i++) {
        console.log(i*2);
    }
}

// printOnce(5);
// printTwice(5);


function iterate(max, action) {
    let result = action(max);
    console.log(result);
}

iterate(5, printOnce);
iterate(3, printTwice);




// 정답!!!!!
function iterate2(max, action){
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

function log(num){
    console.log(num);
}

function doubleAndLog(num){
    console.log(num*2);
}

iterate2(3, log);
iterate2(3, (num)=> console.log(num));
iterate2(3, doubleAndLog);
iterate2(3, (num)=> console.log(num*2));



setTimeout(() => {
    console.log('1초 뒤 이 함수가 실행될 예정스~');
}, 3000) ; 
