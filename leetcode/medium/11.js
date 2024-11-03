const maxArea = (height) => {
    let maxArea = 0
    let i = height.length - 1;
    let leftPointer = 0;
    let rightPointer = i;
    while (i >= 0) {
        const left = height[leftPointer];
        const right = height[rightPointer];
        const minStep = Math.min(left, right)
        maxArea = Math.max(maxArea, minStep * i)
        left < right 
            ? leftPointer += 1
            : rightPointer -= 1;
        i -= 1;
    }
    return maxArea
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const res = maxArea(height)
console.log(res)