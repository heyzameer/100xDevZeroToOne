/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove spaces and convert strings to lowercase for a case-insensitive comparison
  const normalize = (str) => str.replace(/\s+/g, '').toLowerCase();
  
  // Normalize both strings
  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);
  
  // Check if their sorted characters are equal
  return (
    normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('')
  );
}

module.exports = isAnagram;
