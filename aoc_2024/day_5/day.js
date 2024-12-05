const fs = require('fs').promises;

let arr = [];

const getData = async () => {
   const data = (await fs.readFile('./day_5/input.txt', { encoding: 'utf-8' }))
   arr = data.split('\n\n');
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
   const [rules, updates] = arr;

   const rulesMap = rules.split('\n').reduce((acc, c) => {
       const [b, a] = c.split('|');
       acc[b] ? acc[b] = [...acc[b], a] : acc[b] = [a];
       return acc;
   }, {})

   let tally = 0;

   const updatesArr = updates.split('\n');
   for (const x of updatesArr) {
       const row = x.split(',')

       const updatedRow = [...row].sort((a, b) => rulesMap[a].find((x) => x == b) ? -1 : 1)

       let altered = false;
       for (let k = 0; k < row.length; k++) {
           if (row[k] != updatedRow[k]) {
               altered = true;
               break;
           }
       }

       if (!altered) {
           const indx = Math.floor(row.length / 2);
           tally += Number(row[indx])
       }
   }
   console.log(tally)
}


/**
*
*/
function partTwo() {
   const [rules, updates] = arr;

   const rulesMap = rules.split('\n').reduce((acc, c) => {
       const [b, a] = c.split('|');
       acc[b] ? acc[b] = [...acc[b], a] : acc[b] = [a];
       return acc;
   }, {})

   let tally = 0;

   const updatesArr = updates.split('\n');
   for (const x of updatesArr) {
       const row = x.split(',')

       const updatedRow = [...row].sort((a, b) => rulesMap[a].find((x) => x == b) ? -1 : 1)

       let altered = false;
       for (let k = 0; k < row.length; k++) {
           if (row[k] != updatedRow[k]) {
               altered = true;
               break;
           }
       }

       if (altered) {
           const indx = Math.floor(row.length / 2);
           tally += Number(updatedRow[indx])
       }
   }
   console.log(tally)
}