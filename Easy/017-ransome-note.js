/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let arr = magazine.split("");

  for (const char of ransomNote) {
    var charIndex = arr.indexOf(char);

    if (charIndex === -1) {
      return false;
    }

    arr.splice(charIndex, 1);
  }

  return true;
};

// Testing

console.log(canConstruct("a", "a")); // Output: false
console.log(canConstruct("aa", "ab")); // Output: false
console.log(canConstruct("aa", "aab")); // Output: true
console.log(canConstruct("car", "care")); // Output: true