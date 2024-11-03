const majorityElement = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)]
    
}

const nums = [3, 2, 3];
const res = majorityElement(nums)
console.log(res)