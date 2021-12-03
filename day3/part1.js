const fs = require('fs')

const input = fs.readFileSync('./day3.input').toString()
const inputArr = input.split("\n");

const digits = 12;
let currentBit = 0;
const commonBits = [];

for (let index = 0; index < digits; index++) {
    let zero = 0;
    let one = 0;
    for (let idx = 0; idx < inputArr.length; idx++) {
        const element = inputArr[idx];
        if (element[currentBit] && element[currentBit] == "0") { zero++; }
        else { one++; }
    }
    commonBits[currentBit] = zero > one ? "0" : "1"
    currentBit++;
}

const gamma = commonBits.join("")
const epsilon = gamma.split("").map((el) => el == "0" ? "1" : "0").join("")

console.log(`Gamma:\t ${gamma} (${parseInt(gamma, 2)})\nEpsilon: ${epsilon} (${parseInt(epsilon, 2)})`)
