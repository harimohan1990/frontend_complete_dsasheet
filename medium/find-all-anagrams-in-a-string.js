
var findAnagrams = function(s, p) {
    let list = [];
    let freqS = new Array(26).fill(0);
    let freqP = new Array(26).fill(0);

    if (s.length < p.length) {
        return list;
    }

    for (let i = 0; i < p.length; i++) {
        freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freqP[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let start = 0;
    let end = p.length;

    if (freqS.join('') === freqP.join('')) {
        list.push(start);
    }

    while (end < s.length) {
        freqS[s.charCodeAt(start) - 'a'.charCodeAt(0)]--;
        freqS[s.charCodeAt(end) - 'a'.charCodeAt(0)]++;

        if (freqS.join('') === freqP.join('')) {
            list.push(start + 1);
        }

        start++;
        end++;
    }
    
    return list;
};









https://leetcode.com/problems/find-all-anagrams-in-a-string/description/