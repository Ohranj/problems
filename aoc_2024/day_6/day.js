const fs = require('fs').promises;

let arr = [];

const getData = async () => {
   const data = (await fs.readFile('./day_6/input.txt', { encoding: 'utf-8' }))
   arr = data.split('\n');
}

/**
*
*/
(async () => {
   await getData();
   partOne();
   //partTwo();
})()


/**
*
*/
function partOne() {
   const dirMap = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N' }

   const cords = {}
   for (let i = 0; i < arr.length; i++) {
       const row = arr[i];
       for (let k = 0; k < row.length; k++) {
           if (row[k] == '^') {
               cords[`${i}|${k}`] = true;
               break;
           }
       }
       if (Object.keys(cords).length) break;
   }

   let canWalk = true;
   let row = Object.keys(cords)[0].split('|')[0]
   let col = Object.keys(cords)[0].split('|')[1]
   let dir = 'N'
   while (canWalk) {
       let cord = {row, col};

       switch (dir) {
           case 'N':
               cord.row = Number(row - 1);
           break;
           case 'E':
               cord.col = Number(col) + 1;
           break;
           case 'S':
               cord.row = Number(row) + 1;
           break;
           case 'W':
               cord.col = Number(col) - 1;
           break;
       }

       const {row: r, col: c} = cord

       if (r < 0 || r > arr.length - 1 || c < 0 || c > arr[0].length - 1) {
           canWalk = false;
           break;
       }

       if (arr[r][c] == '#') {
           dir = dirMap[dir];
           continue;
       }

       row = r;
       col = c;

       const key = `${row}|${col}`;
       if (!cords[key]) cords[key] = true;
   }

   console.log(Object.keys(cords).length)
}