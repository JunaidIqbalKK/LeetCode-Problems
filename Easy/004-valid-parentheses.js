var isValid = function (s) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      //  console.log(stack);
      if (stack.length === 0 || stack.pop() !== bracketPairs[bracket]) {
        return false;
      }
      //console.log(stack);
    }
  }

  return stack.length === 0;
};

// Testing

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
