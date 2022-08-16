//UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date());
console.log(new Date('Aug 17, 2022'));
console.log(new Date('2022-12-25T03:12:12'));


console.log(Date.now());
console.log(Date.parse('2022-12-25T03:12:12'));


const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // 0부터 시작 1월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); //0 일요일 부터 시작해!... 6: 토요일
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));

