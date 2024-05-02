
var subsets = function(nums) {
    const res = [];
    const subset = [];

    const createSubset = function(i) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        createSubset(i + 1);

        subset.pop();
        createSubset(i + 1);
    };

    createSubset(0);
    return res;    
};















https://leetcode.com/problems/subsets/description/