function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor

        setTimeout(() => {
            // const num = 10;
            // const num = null;

            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject('num이 숫자가 아닙니다.');
            }

            // console.log('안녕');
            // // resolve('안녕');
            // reject('왜 실패했는지 이유...');
        }, 2000);
    });
    return promise;
}

// const p = add10(0);
add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
        // const newP = add10(result);

        // return newP;
    })
    .then((result) => {
        console.log(result);
        // return add10(result);
        return add10(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// console.log(promise); // pending

// setTimeout(() => {
//     console.log(promise); // resolve -> fulfilled / reject -> rejected
// }, 3000);

// then 메서드
// -> 그 후에

// // resolve -> then
// promise.then((value) => {
//     // then은 성공했을 때만 작동
//     console.log(value);
// });

// // reject -> catch
// promise.catch((error) => {
//     // 실패 버전의 then
//     console.log(error);
// });

// 이렇게 단축 가능
// promise
//     .then((value) => {
//         // then은 성공했을 때만 작동
//         console.log(value);
//     })
//     .catch((error) => {
//         // 실패 버전의 then
//         console.log(error);
//     });
