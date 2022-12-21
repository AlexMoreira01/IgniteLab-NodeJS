// var numbers = [4, 4, 8, 15, 16, 16, 23, 42];

// var modifiedNumbers = numbers.filter(function (elem, index, array) {
//   return array.indexOf(elem) == index;
// });

// console.log(modifiedNumbers);

// let left = [4, 8, 11, 20];

// let right = [1, 3, 5, 6, 25, 30];

// function merge ( left)

// var a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// for (var i = 0, j = 3; i <= 3; i++, j--) console.log(a[i][j]);

function longPeriodExecution() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('solved after 5 seconds!');
      resolve(true);
    }, 5000);
  });
}

function shortPeriodExecution() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('solved after 2 seconds!');
      resolve(true);
    }, 2000);
  });
}

Promise.all([longPeriodExecution(0, shortPeriodExecution())]).then(function () {
  console.log('iseverithing solved?');
});

console.log('Yay! Done');
