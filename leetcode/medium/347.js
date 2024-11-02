const topKFrequent = (nums, k) => {
    const keyCounts = {}
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];
        keyCounts[key] ? keyCounts[key] +=1 : keyCounts[key] = 1
    }

    let bucketArr = []
    for (const [key, value] of Object.entries(keyCounts)) {
        bucketArr[value] ? bucketArr[value].push(key) : bucketArr[value] = [key];
    }
   
    const res = [];
    for (let i = bucketArr.length - 1; i > 0; i--) {
        if (!bucketArr[i]) continue;
        for (let k = 0; k < bucketArr[i].length; k++) {
            res.push(Number(bucketArr[i][k]))
        }
        if (res.length == k) break;
    }
    return res;
}

const inpt = [1, 1, 1, 2, 2, 3];
const res = topKFrequent(inpt, 2);
console.log(res)