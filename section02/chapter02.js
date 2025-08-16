// // function returnFalse() {
// //     console.log('False 함수');
// //     return false;
// // }

// // function returnTrue() {
// //     console.log('True 함수');
// //     return true;
// // }

// function returnFalse() {
//     console.log('False 함수');
//     return undefined;
// }

// function returnTrue() {
//     console.log('True 함수');
//     return 10;
// }

// // 단락평가란?
// // -> 앞의 값만으로도 결과를 판단할 수 있으면 뒤의 값을 실행하지 않는 것.

// // 둘 중 하나가 false면 무조건 false 이기 때문에 앞의 값이 false면 뒤의 값을 실행할 필요가 없음.
// // console.log(returnFalse() && returnTrue());

// // 앞이 true이기 때문에 뒤의 값을 실행하여 최종값이 true인지 확인해야 함.
// // console.log(returnTrue() && returnFalse());

// // 둘 중 하나가 true면 무조건 true 이기 때문에 앞의 값이 true면 뒤의 값을 실행할 필요가 없음.
// // console.log(returnTrue() || returnFalse());

// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례

// function printName(person) {
//     if(!person) {
//         console.log("person에 값이 없음");
//         return;
//     }
//     console.log(person.name);
// }

function printName(person) {
    const name = person && person.name;
    console.log(name || 'person의 값이 없음');
}

printName();
printName({ name: '문인배' });
// T || T -> 앞의 T
// T && T -> 뒤의 T
