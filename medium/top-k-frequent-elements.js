
var topKFrequent = function(nums, k) {
    const freqMap = {}; // Hashmap to store frequencies
    
    // Count frequencies of each element
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    
    const freqArray = []; // Array to store [element, frequency] pairs
    
    // Convert hashmap entries into [element, frequency] pairs
    for (let num in freqMap) {
        freqArray.push([parseInt(num), freqMap[num]]);
    }
    
    // Custom sort function to sort based on frequency
    freqArray.sort(function(a, b) {
        return b[1] - a[1]; // Sort in descending order of frequency
    });
    
    const result = []; // Array to store top K frequent elements
    
    // Extract the first k elements from the sorted array
    for (let i = 0; i < k; i++) {
        result.push(freqArray[i][0]);
    }
    
    return result;
};












https://leetcode.com/problems/top-k-frequent-elements/description/