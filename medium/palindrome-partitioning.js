var partition = function(s) {
    const isPalindrome = (sub) => {
        let left = 0, right = sub.length - 1;
        while (left < right) {
            if (sub[left++] !== sub[right--]) {
                return false;
            }
        }
        return true;
    };
    
    const backtrack = (start, path, partitions) => {
        if (start === s.length) {
            partitions.push([...path]);
            return;
        }
        
        for (let end = start + 1; end <= s.length; end++) {
            const sub = s.substring(start, end);
            if (isPalindrome(sub)) {
                path.push(sub);
                backtrack(end, path, partitions);
                path.pop();
            }
        }
    };
    
    const partitions = [];
    backtrack(0, [], partitions);
    return partitions;
};