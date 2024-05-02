var longestConsecutive = function(nums) {
    const n = nums.length;
    
    if (n === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let cnt = 1;
    let maxi = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                cnt++;
            } else {
                maxi = Math.max(maxi, cnt);
                cnt = 1;
            }
        }
    }

    return Math.max(maxi, cnt);
};