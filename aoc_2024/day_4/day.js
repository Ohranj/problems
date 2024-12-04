
const fs = require('fs').promises;


let arr = [];


const getData = async() => {
   const data = (await fs.readFile('./day_4/input.txt', {encoding: 'utf-8'}))
   arr = data.split('\n');
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
   const word = ['X', 'M', 'A', 'S'];
   let counts = 0;

   const rowLength = arr[0].length;
   const asString = arr.join('')
   for (let i = 0; i < asString.length; i++) {
       const letter = asString[i]
       if (letter != 'X') continue;
       if (i >= rowLength * 3) {
           let isMatch = true;
           for (let k = 0; k <= 3; k++) {
               const compVal = asString[i - (k * rowLength)]
               if (compVal != word[k]) {
                   isMatch = false;
                   break;
               }
           }
           counts += Number(isMatch);
       }

       if (i < asString.length - (rowLength * 3)) {
           let isMatch = true;
           for (let k = 0; k <= 3; k++) {
               const compVal = asString[i + (k * rowLength)]
               if (compVal != word[k]) {
                   isMatch = false;
                   break;
               }
           }
           counts += Number(isMatch);
       }

       if (i % rowLength >= 3) {
           const slc = asString.slice(i - 3, i + 1).split('').reverse();
           let isMatch = true
           for (let k = 0; k < slc.length; k++) {
               if (slc[k] != word[k]) {
                   isMatch = false;
                   break;
               }
           }
           counts += Number(isMatch);
       }

       if (i % rowLength <= rowLength - 3) {
           const slc = asString.slice(i, i + word.length).split('');
           let isMatch = true;
           for (let k = 0; k < slc.length; k++) {
               if (slc[k] != word[k]) {
                   isMatch = false;
                   break;
               }
           }
           counts += Number(isMatch);
       }

       if (i >= rowLength * 3) {
           if (i % rowLength >= 3) {
               let isMatch = true;
               for (let k = 0; k <= 3; k++) {
                   const compVal = asString[i - (k * (rowLength + 1))]
                   if (compVal != word[k]) {
                       isMatch = false;
                       break;
                   }
               }
               counts += Number(isMatch);
           }
       }

       if (i >= rowLength * 3) {
           if (i % rowLength <= rowLength - 3) {
               let isMatch = true;
               for (let k = 0; k <= 3; k++) {
                   const compVal = asString[i - (k * (rowLength - 1))]
                   if (compVal != word[k]) {
                       isMatch = false;
                       break;
                   }
               }
               counts += Number(isMatch);
           }
       }

       if (i < asString.length - (rowLength * 3)) {
           if (i % rowLength >= 3) {
               let isMatch = true;
               for (let k = 0; k <= 3; k++) {
                   const compVal = asString[i + (k * (rowLength - 1))]
                   if (compVal != word[k]) {
                       isMatch = false;
                       break;
                   }
               }
               counts += Number(isMatch);
           }
       }

       if (i < asString.length - (rowLength * 3)) {
           if (i % rowLength <= rowLength - 4) {
               let isMatch = true;
               for (let k = 0; k <= 3; k++) {
                   const compVal = asString[i + (k * (rowLength + 1))]
                   if (compVal != word[k]) {
                       isMatch = false;
                       break;
                   }
               }
               counts += Number(isMatch);
           }
       }
   }
   console.log(counts)
}


/**
*
*/
function partTwo() {
   let counts = 0;

   for (let i = 1; i < arr.length - 1; i++) {
       const row = arr[i];
       for (let k = 1; k < row.length - 1; k++) {
           if (row[k] != 'A') continue;
           const [tl, tc, tr] = arr[i - 1].slice(k - 1, k + 2)
           const [bl, bc, br] = arr[i + 1].slice(k - 1, k + 2)

           const invalidChar = [tl, tr, bl, br].find((x) => x == 'X' || x == 'A');
           if (invalidChar) continue;

           const validMap = { 'MS': true, 'SM': true }
           if (!validMap[tl + br] || !validMap[tr + bl]) continue;

           counts += 1
       }
   }
   console.log(counts)
}