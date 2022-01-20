const number = 4;
let sum = 0;


const sumNumber = function(number) {
    for(let i = 0; i <= number; i++) {
    sum = sum + i
    }
    return sum
}

sumNumber(number)

console.log(sum)