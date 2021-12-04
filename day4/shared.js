const checkWin = (board) => {
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

const sumUnmarked = (board) => {
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

module.exports = {
    checkWin,
    sumUnmarked
}