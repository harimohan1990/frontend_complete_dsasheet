/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        let currentIndexSwap = i;
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] > nums[i] && nums[j] < nums[currentIndexSwap]) || (nums[j] > nums[currentIndexSwap] && currentIndexSwap === i)) {
                currentIndexSwap = j;
            }
        }
        if (i !== currentIndexSwap) {
            [nums[i], nums[currentIndexSwap]] = [nums[currentIndexSwap], nums[i]];
            for (let k = i + 1; k < nums.length; k++) {
                for (let p = k + 1; p < nums.length; p++) {
                    if (nums[p] < nums[k]) {
                        [nums[k], nums[p]] = [nums[p], nums[k]];
                    }
                }
            }
            return nums;
        }
    }
    return nums.sort((a, b) => a - b);
};