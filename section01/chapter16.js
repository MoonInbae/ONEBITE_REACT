// 1. 상수 객체
const animal = {
    type: '고양이',
    name: '나비',
    color: 'black',
};

// animal = { a: 1 }; // 상수는 재정의 불가

animal.age = 2; // 추가
animal.name = '까망이'; // 수정
delete animal.color; // 삭제

// console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: '문인배',
    // 메서드 선언
    // sayHi: function () {
    //     console.log("안녕!");
    // },
    // sayHi: () => {
    //     console.log("안녕!");
    // },
    sayHi() {
        // 보통 객체의 동작을 정의하는 데 사용
        console.log('안녕!');
    },
};

person.sayHi();
person['sayHi']();
