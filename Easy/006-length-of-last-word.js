/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim the leading and trailing spaces
    s = s.trim();
    //console.log(s);
    
    // Split the string into an array of words
    var words = s.split(" ");
    //console.log(words);
    
    // Return the length of the last word
    return words[words.length - 1].length;
  };

// Testing

console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
