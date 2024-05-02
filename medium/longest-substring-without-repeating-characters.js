function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charMap[char] !== undefined) {
            start = Math.max(start, charMap[char] + 1);
        }
        charMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
