/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let left = 0;
  let right = s.length - 1;
  const arr = s.split("");

  while (left < right) {
    if (vowels.has(arr[left]) && vowels.has(arr[right])) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;

      left++;
      right--;

    } else if (vowels.has(arr[left])) {
      right--;

    } else {
      left++;
    }
  }

  return arr.join("");
};

// Testing

console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
