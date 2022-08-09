// 문자열타입
let string = '안녕하세요';
string = `안녕`;
console.log(string);

//특수문자 출력하는법
string = "'안녕!'";
console.log(string);

string = '안녕! \n 송아! \t\t 내 이름은 \\ \u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '쏭';
let greetings = "'안녕!'," +id+ "🫠🥺\n즐거운 하루 보내용! ";
console.log(greetings);

//ctrl + cmd + space emoji~~~~
greetings = `'안녕, ${id} 🫠🥺
쥴건하룻!'`;
console.log(greetings);