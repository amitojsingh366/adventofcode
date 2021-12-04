const fs = require('fs')

const input = fs.readFileSync('../day1.input').toString()
const inputArr = input.split("\n").map((e) => parseInt(e));

const chunk = 3;
const windowSums = [];

for (let index = 0; index < inputArr.length; index++) {
    const temp = inputArr.slice(index, index + chunk);
    if (temp.length !== 3) break;

    let sum = 0;
    for (let idx = 0; idx < temp.length; idx++) {
        const el = temp[idx];
        sum = sum + el;
    }

    windowSums.push(sum);
}

let numberOfIncrements = 0;
windowSums.map((element, index) => {
    const prevElement = windowSums[index - 1];
    if (prevElement && element > prevElement) numberOfIncrements++;
})

console.log(numberOfIncrements)