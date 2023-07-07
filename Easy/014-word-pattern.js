function wordPattern(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternMap = {};
  const mappedWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (patternMap[char]) {
      if (patternMap[char] !== word) {
        return false;
      }
    } else {
      if (mappedWords.has(word)) {
        return false;
      }
      patternMap[char] = word;
      mappedWords.add(word);
      //console.log(patternMap, mappedWords);
    }
  }

  return true;
}

// Testing

console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
console.log(wordPattern("abba", "dog constructor constructor dog")); // Output: true
console.log(wordPattern("abba", "dog dog dog dog")); // Output: false
