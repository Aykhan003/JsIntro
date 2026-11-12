// let n = 21;
// if (n % 3 === 0 && n % 7 === 0) {
//     console.log(n + " is even");
// } else {
//     console.log(n + " is odd");
// }

// let n = 21;
// let m = 34;
// let count = 0;
// for (let i = n; i <= m; i++) {
//     if ( i % 2 === 1) {
//         count++;
//     }
// }
// console.log("Number of odd numbers between " + n + " and " + m + ": " + count);

// let n = 21;
// let m = 34;
// let sum = 0;
// for (let i = n; i <= m; i++) {
//     if ( i % 2 === 1) {
//         sum += i;
//     }
// }
// console.log("Sum of odd numbers between " + n + " and " + m + ": " + sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     }
// }
// console.log("Sum of even numbers in the array: " + sum);

// function CalculatesTheSumOfTheSquaresOfEvenNumbersInAnArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i] * arr[i];
//         }
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = CalculatesTheSumOfTheSquaresOfEvenNumbersInAnArray(arr);
// console.log("Sum of the squares of even numbers in the array: " + result);

// function CalculatesBetweenTwoNumbers(n, m) {
//     let sum = 0;
//     if (IsNaN(n) || IsNaN(m)) {
//         return "Please enter valid numbers";
//     }
//     for (let i = n; i <= m; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }