const fs = require('fs')

const input = fs.readFileSync('./day4.input').toString()
const inputArr = input.split("\n\n");

const drawOrder = inputArr[0].split(", ");
let boards = inputArr.slice(1, inputArr.length)

for (let index = 0; index < boards.length; index++) {
    const element = boards[index];
    const lines = element.split("\n");
    let numbers = []

    for (let idx = 0; idx < lines.length; idx++) {
        const el = lines[idx];
        numbers = numbers.concat(el.split(" ").filter((e) => e !== ""));
    }

    const temp = [];
    const chunk = 5;

    for (let idx = 0; idx < numbers.length; idx += chunk) {
        const chunked = numbers.slice(idx, idx + chunk);
        temp.push(chunked)
    }


    boards[index] = temp;
}

for (let index = 0; index < drawOrder.length; index++) {
    const draw = drawOrder[index];
    let loopBreak = false;

    for (let idx = 0; idx < boards.length; idx++) {
        const board = boards[idx];
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            if (row.includes(draw)) {
                const drawIndex = row.indexOf(draw)
                boards[idx][i][drawIndex] = true;
            }
        }

        const win = checkWin(board);
        if (win) {
            const sum = sumUnmarked(board);
            console.log(`Sum of unmarked: ${sum}, Final draw number: ${draw}`)
            loopBreak = true;
            break;
        }

    }

    if (loopBreak) break;

}

function sumUnmarked(board) {
    let sum = 0;
    for (let index = 0; index < board.length; index++) {
        const row = board[index];
        for (let i = 0; i < row.length; i++) {
            const element = row[i];
            if (element !== true) sum += Number(element);
        }
    }
    return sum;
}

function checkWin(board) {
    let w = false;
    for (let xIndex = 0; xIndex < 5; xIndex++) {
        const yWin = [];
        for (let yIndex = 0; yIndex < 5; yIndex++) {
            if (!board[yIndex].map((e) => e == true).includes(false)) w = true;
            yWin.push(board[yIndex][xIndex] === true);
        }
        if (!yWin.includes(false)) w = true;
    }
    return w;
}
