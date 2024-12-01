const fs = require('fs').promises;

let arr = [];

const getData = async() => {
    const data = await fs.readFile('./day_1/input.txt', {encoding: 'utf-8'})
    arr = data.split("\n").reduce((acc, c) => {
        const [l, r] = c.split('   ');
        acc.left.push(Number(l));
        acc.right.push(Number(r));
        return acc;
    }, {left: [], right: []})
}

/**
 * 
 */
(async() => {
    await getData();
    //partOne();
    partTwo();
})()

/**
 * 
 */
function partOne() {
    const sortedLeft = arr.left.sort();
    const sortedRight = arr.right.sort();

    let sum = 0;
    let i = 0;
    while (i < sortedLeft.length) {
        sum += Math.abs(sortedLeft[i] - sortedRight[i])
        i += 1;
    }
    console.log(sum)
}

/**
 * 
 */
function partTwo() {
    let sum = 0;
    let i = 0;

    while (i < arr.left.length) {
        let x = 0;
        let occurs = 0;

        const leftVal = arr.left[i];    
        while(x < arr.right.length) {
            if (arr.right[x] == leftVal) occurs += 1;
            x += 1;
        }
        sum += leftVal * occurs;
        i += 1;
    }
    console.log(sum)
}