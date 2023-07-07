/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charMapS = {};
  const charMapT = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    //console.log(charS, charT);
    //console.log(charMapS[charS], charMapT[charT]);

    if (charMapS[charS] !== charMapT[charT]) {
      return false;
    }

    charMapS[charS] = i;
    charMapT[charT] = i;
    //console.log(charMapS[charS], charMapT[charT]);
  }

  return true;
}

// Testing

console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false
console.log(isIsomorphic("paper", "title")); // Output: true
