// console.log('안녕 Node.js');

// 모듈 사용
// const moduleData = require('./math');
// console.log(moduleData);

// const moduleData = require('./math');
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 구조분해할당 사용
const { add, sub } = require('./math');
console.log(add(1, 2));
console.log(sub(1, 2));
