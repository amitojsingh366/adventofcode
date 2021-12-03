const fs = require('fs')

const input = fs.readFileSync('./day3.input').toString()
const inputArr = input.split("\n");

const digits = 12;
let oxyCurrentBit = carbonCurrentbit = 0;
let oxyArr = carbonArr = inputArr;

for (let index = 0; index < digits; index++) {
    let oxyZero = 0;
    let oxyOne = 0;
    let carbonZero = 0;
    let carbonOne = 0;

    for (let idx = 0; idx < oxyArr.length; idx++) {
        const element = oxyArr[idx];
        if (element[oxyCurrentBit] && element[oxyCurrentBit] == "0") { oxyZero++; }
        else { oxyOne++; }
    }
    for (let idx = 0; idx < carbonArr.length; idx++) {
        const element = carbonArr[idx];
        if (element[carbonCurrentbit] && element[carbonCurrentbit] == "0") { carbonZero++; }
        else { carbonOne++; }
    }

    const oxyCommon = oxyZero == oxyOne ? "1" : oxyZero > oxyOne ? "0" : "1";
    const carbonCommon = carbonZero == carbonOne ? "0" : carbonZero < carbonOne ? "0" : "1";
    if (oxyArr.length !== 1) oxyArr = oxyArr.filter((e) => e[oxyCurrentBit] == oxyCommon)
    if (carbonArr.length !== 1) carbonArr = carbonArr.filter((e) => e[carbonCurrentbit] == carbonCommon)

    oxyCurrentBit++;
    carbonCurrentbit++;
}

const oxygenGen = oxyArr[0];
const co2Scrubber = carbonArr[0];


console.log(`Oxygen Generator: ${oxygenGen} (${parseInt(oxygenGen, 2)})\nCo2 Scrubber:\t  ${co2Scrubber} (${parseInt(co2Scrubber, 2)})`)