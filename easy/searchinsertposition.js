
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i
        } else if (target < nums[i]) {
            return i
        } else if (i === nums.length - 1 || (nums[i] < target && target < nums[i + 1])) {
            return i + 1
        }
    }
};


https://leetcode.com/problems/search-insert-position/description/