// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 // 생성자에 아무것도 넣지 않고 생성하면 현재 시각으로 생성됨.
console.log(date1);

// let date2 = new Date('2001-02-13');
// let date2 = new Date('2001.02.13');
// let date2 = new Date('2001/02/13'); // - . / 중 아무거나로 구분해서 인식함.

// let date2 = new Date('2001/02/13/10:10:10');
let date2 = new Date(2001, 2, 13, 23, 59, 50); // ,도 인식함.
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분 00초"를 UTC(협정 세계시)라고 함.
// UTC는 세계의 모든 나라가 표준으로 사용하는 시간이 시작되는 기준을 뜻함.
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);

console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 0부터 시작됨.
let date = date1.getDate();

let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minutes, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 실제로는 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); // 현지 표기법
