/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
    let title = '';
  
    while (columnNumber > 0) {
      let remainder = columnNumber % 26;
      if (remainder === 0) {
        remainder = 26;
      }
      const char = String.fromCharCode(remainder + 64);
      title = char + title;
      columnNumber = Math.floor((columnNumber - remainder) / 26);
    }
  
    return title;
  };

  // Testing

console.log(convertToTitle(1));    // Output: "A"
console.log(convertToTitle(28));   // Output: "AB"
console.log(convertToTitle(701));  // Output: "ZY"
