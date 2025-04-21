/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverseStr(str) {
  let ReverseString = "";
  for (let i = str.length-1; i >= 0; i--) {
    ReverseString += str[i];
  }
  return ReverseString;
}

function trim(str) {
  let string = "";
  for (let i = 0; i <= str.length-1; i++) {
    if (
      str[i] == " " ||
      str[i] == "?" ||
      str[i] == "*" ||
      str[i] == "," ||
      str[i] == "." ||
      str[i] == "@" ||
      str[i] == "'" ||
      str[i] == "!" 
    ) {
    } else {
      string += str[i];
    }
  }
  return string;
}

function isPalindrome(str) {
  let Sentance = trim(str.toLowerCase());
  if (Sentance === reverseStr(Sentance)) {
    return true;
  } else {
    // console.log(Sentance);
    return false;
  }
}

// isPalindrome("'Able, was I ere I saw Elba!'");
module.exports = isPalindrome;
