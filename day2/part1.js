const fs = require('fs')

const input = fs.readFileSync('./day2.input').toString()
const inputArr = input.split("\n");

let depth = 0;
let horizontal = 0;

for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    const instructionsArr = element.split(" ");
    const command = instructionsArr[0];
    const value = Number(instructionsArr[1]);
    switch (command) {
        case "down":
            depth = depth + value
            break;
        case "up":
            depth = depth - value
            break;
        case "forward":
            horizontal = horizontal + value;
            break;
        default:
            break;
    }
}

console.log(`Horizontal: ${horizontal}\nDepth: ${depth}`)

