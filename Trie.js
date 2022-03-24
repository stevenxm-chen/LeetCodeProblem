// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True


// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

const node = function () {
  this.trie = {};
  this.isEnd = false
}


var Trie = function() {
    this.storage = new node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let n = this.storage
    for (let char of word) {
      if (!n[char]) {
        n[char] = {};
      }
      n = n[char];
    }
   n.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.traverse = function (word)  {
  let n = this.storage;

  for (let c of word) {
    n = n[c];
    if (!n) return null;
  }
  return n;
}

Trie.prototype.search = function(word) {

    let n = this.traverse(word);

   if (!n) return false

  if (n !== null && n.isEnd) {
      return true;
    }
    return false
  };


/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

  let n = this.traverse(prefix);

  if (n !== null) return true;

  return false
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */