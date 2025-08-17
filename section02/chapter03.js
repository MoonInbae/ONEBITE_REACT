// 1. 배열의 구조 분해 할당 => [] 이용
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당 => {} 이용
let person = {
    name: '문인배',
    age: 25,
    hobby: '테니스',
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { name, age: myAge, hobby, extra = 'hello' } = person; // 할당 받고자 하는 변수명도 변경 가능
// console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
};

func(person);
