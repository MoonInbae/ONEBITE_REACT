// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr2 = [4, ...arr1, 5, 6]; // ...이 Spread 연산자
// console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};
// let obj2 = {
//     a: obj1.a,
//     b: obj1.b,
//     c: 3,
//     d: 4,
// };
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, two, ...rest) {
    // 매개변수 선언부분에서 ...이 사용되면 rest 매개변수!!
    // rest매개변수 뒤에는 추가로 다른 매개변수를 선언하지 못함.
    // 모든 인수들이 배열 형태로 전송됨.
    console.log(rest);
}

funcB(...arr1);
