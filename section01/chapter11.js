// 함수선언

// function greeting() {
//     console.log('안녕하세요!');
// }

// console.log('호출 전');
// greeting();
// console.log('호출 후');

// 함수
// function getArea(width, height) {
//     // 매개변수

//     function another() {
//         // 중첩 함수
//         console.log('another');
//     }
//     another();

//     let area = width * height;

//     // console.log(area);
//     return area;
// }

let area1 = getArea(10, 20); // 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팀
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
    // 매개변수

    function another() {
        // 중첩 함수
        console.log('another');
    }
    another();

    let area = width * height;

    // console.log(area);
    return area;
}
