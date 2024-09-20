// Description:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// function makeNegative (number){
//     if (number > 0){
//         console.log(`- ${number}`)
//     } else {
//         console.log(number)
//     }
// }
// makeNegative(1)


//CODEWARS
// function makeNegative (number){
//     if (number > 0){
//         return(- number)
//     } else {
//         return(number)
//     }
// }


//You get an array of numbers, return the sum of all of the positives ones.

// const nums = [1,-2,3,4,5]

// let sum =  0
// for (i = 0; i < nums.length; i++) {
//     if (nums[i] > 0 ){
//         sum += nums[i];
//     } 
// }
// console.log(sum)

//Now you have to write a function that takes an argument and 
//returns the square of it.

// const square = a => a * a
// console.log(square(2))


// Write a function that takes an array of numbers and returns the sum 
// of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// const numbers = [1, 5.2, 4, 0, -1]

// function sum (numbers) { 
//     if (numbers === 0){
//         return 0
//     } else {
//         const x = numbers.reduce((accumulator, value) => {
//             return accumulator + value
//             }, 0)
//             console.log(x)
//     } 
// }
// sum(numbers)


//REVERSE STRING


function reverse(s) {
    let x = ''
    for (let i = s.length - 1; i >= 0; i--)
      x += s[i]
    console.log(x)
  }

  reverse(`aline`)


// stringInput = `Aline`

// function reverse (stringInput) {
//     const stringReverse = "";
//     const i = this.length;
//     while (i>0) {
//         stringReverse += this.substring(i-1,i);
//         i--;
//     }
//     return stringReverse;
// }

// reverse(stringInput)