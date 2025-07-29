// 1. 콜백함수
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log('end');
}

// function sub() {
//     console.log('i am sub');
// }

// main(sub);

// main(function sub() {
//     console.log('i am sub');
// });

main(() => {
    // console.log('i am sub');
});
