const fs = require('fs').promises;

let arr = [];

const getData = async () => {
    const data = await fs.readFile('./day_2/input.txt', { encoding: 'utf-8' })
    arr = data.split("\n");
}


/**
*
*/
(async () => {
    await getData();
    //partOne();
    partTwo();
})()


/**
*
*/
function partOne() {
    let safeTally = 0;
    for (let i = 0; i < arr.length; i++) {
        let isSafe = true;
        const row = arr[i].split(' ').map((x) => Number(x));

        let leftPointer = 0;
        let rightPointer = 1;
        let isIncreasing = true;
        while (rightPointer < row.length) {
            const cur = row[leftPointer]
            const nxt = row[rightPointer]
            if (leftPointer == 0) {
                isIncreasing = cur < nxt;
            }

            if (isIncreasing) {
                if (cur >= nxt) isSafe = false;
            } else {
                if (cur <= nxt) isSafe = false;
            }

            const diff = Math.abs(cur - nxt);
            if (diff == 0 || diff >= 4) isSafe = false;

            if (!isSafe) break;

            leftPointer += 1;
            rightPointer += 1;
        }

        if (isSafe) {
            safeTally += 1;
        }
    }
    console.log(safeTally)
}


/**
*
*/
function partTwo() {
    let safeTally = 0;

    const check = (iter, row, inc) => {
        if (iter == row.length) return true;

        const cur = row[iter];
        const nxt = row[iter + 1];

        const diff = Math.abs(cur - nxt);
        if (diff == 0 || diff >= 4) return false

        if (inc) {
            if (cur >= nxt) return false
        } else {
            if (cur <= nxt) return false
        }

        iter += 1;
        return check(iter, row, inc);
    }

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i].split(' ').map((x) => Number(x));

        let k = 0;
        let isSafe = false;

        while (k < row.length) {
            const rowCopy = row.slice()
            rowCopy.splice(k, 1);
            const isIncreasing = rowCopy[0] < rowCopy[1];
            isSafe = check(0, rowCopy, isIncreasing);
            if (isSafe) {
                break;
            }
            k += 1
        }

        if (isSafe) {
            safeTally += 1;
        }
    }
    console.log(safeTally)
}