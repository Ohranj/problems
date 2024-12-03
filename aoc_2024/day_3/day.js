const fs = require('fs').promises;

let data = null;

const getData = async () => {
    data = (await fs.readFile('./day_3/input.txt', { encoding: 'utf-8' })).split("\n").join(',')
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
    let sum = 0;
    const vals = [...data.matchAll(/(mul\()[,\d]*?(\))/g)]
    for (const x of vals) {
        const [left, right] = x[0].substr(4, x[0].length - 5).split(',')
        sum += Number(left) * Number(right);
    }
    console.log(sum)
}


/**
 * 
 */
function partTwo() {
    function cleanString() {
        let val = /(don't\(\)).*?(do\(\)|$)/g.exec(data);
        if (!val) return;
        data = data.substring(0, val.index) + data.substring(val.index + val[0].length)
        return cleanString();
    }
    cleanString()
    
    let sum = 0;
    vals = [...data.matchAll(/(mul\()[,\d]*?(\))/g)]
    for (const x of vals) {
        const [left, right] = x[0].substr(4, x[0].length - 5).split(',')
        sum += Number(left) * Number(right);
    }
    console.log(sum)
}