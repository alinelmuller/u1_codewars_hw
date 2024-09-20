## Return Negative

```js
function makeNegative (number){
    if (number > 0){
        console.log(`- ${number}`)
    } else {
        console.log(number)
    }
}
makeNegative(-10)
```

## Sum of Positive

```js
const nums = [1,-2,3,4,5]

let sum =  0
for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0 ){
        sum += nums[i];
    } 
}
console.log(sum)
```

## Function 2

```js
const square = a => a * a
console.log(square(2))
```

## Sum Arrays

```js
const numbers = [1, 5.2, 4, 0, -1]

function sum (numbers) { 
    if (numbers === 0){
        return 0
    } else {
        const x = numbers.reduce((accumulator, value) => {
            return accumulator + value
            }, 0)
            console.log(x)
    } 
}
sum(numbers)
```

## Reversed Strings

```js
function reverse(s) {
    let x = ''
    for (let i = s.length - 1; i >= 0; i--)
      x += s[i]
    console.log(x)
  }

  reverse(`aline`)
```
