const missingNumber = (nums) => {
    let targetTotal = 0;
    let curTotal = 0
    for (let i = 1; i <= nums.length; i++) {
        targetTotal += i;
        curTotal += nums[i - 1]
    }
    return targetTotal - curTotal;
}

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const res = missingNumber(nums)
console.log(res)