const fs = require('fs')

const input = fs.readFileSync('./day1.input').toString()
const inputArr = input.split("\n").map((e) => parseInt(e));

let numberOfIncrements = 0;
inputArr.map((element, index) => {
    const prevElement = inputArr[index - 1];
    if (prevElement && element > prevElement) numberOfIncrements++;
})

console.log(numberOfIncrements)