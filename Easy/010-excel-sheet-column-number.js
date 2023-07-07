/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let columnNumber = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const element = columnTitle[i];
    const elementValue = element.charCodeAt(0) - 64;

    columnNumber = (26 * columnNumber) + elementValue;
  }

  return columnNumber;
};

// Testing

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
