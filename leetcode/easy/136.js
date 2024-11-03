const singleNumber = (nums) => {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]]
            ? delete(map[nums[i]])
            : map[nums[i]] = 1
    }
    return Number(Object.keys(map)[0])
}

const nums = [2, 2, 1];
const res = singleNumber(nums)
console.log(res)