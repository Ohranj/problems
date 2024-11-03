const longestConsecutive = (nums) => {
    const vals = new Set(nums);
    let maxConsec = 0;
    for (const n of vals) {
        if (vals.has(n - 1)) continue;

        let hasIncrement = true;
        let curConsec = 0;
        while (hasIncrement) {
            if (vals.has(n + curConsec)) {
                curConsec += 1;
                continue;
            } 
            hasIncrement = false;
        }
        maxConsec = curConsec > maxConsec 
            ? curConsec 
            : maxConsec
    }

    return maxConsec;
}


const nums = [100, 4, 200, 1, 3, 2];
const res = longestConsecutive(nums)
console.log(res)