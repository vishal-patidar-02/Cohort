/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str){
    let arr = str.split("").sort().join("");
    return arr;
}

function isAnagram(str1, str2) {
    let sorted1 = sort(str1);
    let sorted2 = sort(str2);
    if(sort(sorted1.toLowerCase()) == sort(sorted2.toLowerCase())){
        return true;
    } else {
      return false;
    }   
}

module.exports = isAnagram;
