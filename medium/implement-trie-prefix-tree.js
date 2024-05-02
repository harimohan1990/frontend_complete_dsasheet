
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.children = {};
    this.isEndOfWord = false;
};

/** 
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
            node.children[char] = { children: {}, isEndOfWord: false };
        }
        node = node.children[char];
    }
    node.isEndOfWord = true;
};

/** 
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return node.isEndOfWord;
};

/** 
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this;
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return true;
};

// Example usage:
// var trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple"));   // returns true
// console.log(trie.search("app"));     // returns false
// console.log(trie.startsWith("app")); // returns true
// trie.insert("app");
// console.log(trie.search("app"));     // returns true


https://leetcode.com/problems/implement-trie-prefix-tree/