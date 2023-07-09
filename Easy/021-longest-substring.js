function longestSubstring(s) {
  let maxLen = 0;
  let str = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charIndex = str.indexOf(char);

    if (charIndex !== -1) {
      str = str.slice(charIndex + 1);
    }

    str += char;

    if (str.length > maxLen) {
      maxLen = str.length;
    }
  }

  return maxLen;
}

// Testing

var s = "pwwkew";
var len = longestSubstring(s);
console.log(len); // Output: 3

var s = "bbbb";
var len = longestSubstring(s);
console.log(len); // Output: 1

var s = "abcabcbb";
var len = longestSubstring(s);
console.log(len); // Output: 3