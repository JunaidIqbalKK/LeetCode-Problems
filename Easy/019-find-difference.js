/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let i = 0;
  let tArr = t.split("");

  while (i < t.length - 1) {
    //console.log(tArr.indexOf(s[i]), tArr, s[i]);
    tArr.splice(tArr.indexOf(s[i]), 1);
    i++;
  }

  return tArr.join("");
};

// Testing

console.log(findTheDifference("abcd", "abcde")); // Output: e
console.log(findTheDifference("", "y")); // Output: y
