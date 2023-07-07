/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === s.length;
};

// Testing

console.log(isSubsequence("abc", "ahbgdc")); // Output: true
console.log(isSubsequence("axc", "ahbgdc")); // Output: false
console.log(isSubsequence("abc", "")); // Output: false
console.log(isSubsequence("acb", "ahbgdc")); // Output: false
console.log(isSubsequence("aaaaaa", "bbaaaa")); // Output: false
