/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[right];
    s[right] = s[left];
    s[left] = temp;

    left++;
    right--;
  }
};

// Testing

const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // Output: ["o", "l", "l", "e", "h"]

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // Output: ["h", "a", "n", "n", "a", "H"]
