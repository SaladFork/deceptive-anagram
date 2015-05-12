export default function(words) {
  return words.filter((word) => hasAnagram(word, words));
}

export { hasAnagram, isAnagram, characterCountHash };

function hasAnagram(word, words) {
  return words.some(otherWord => {
    // We do not consider words anagrams of themselves
    if (word === otherWord) {
      return false;
    }

    return isAnagram(word, otherWord);
  });
}

function isAnagram(stringA, stringB) {
  let countHashA = characterCountHash(stringA),
      countHashB = characterCountHash(stringB);

  let characters = Object.keys(countHashA);

  return characters.reduce((hasSameCharacters, character) => {
    let sameCharCount = countHashA[character] === countHashB[character];

    return hasSameCharacters && sameCharCount;
  }, true);
}

function characterCountHash(str) {
  let characters = str.split('');
  return characters.reduce((hash, character) => {
    let charCount = hash[character];

    hash[character] = charCount === undefined ? 1 : charCount + 1;

    return hash;
  }, {});
}
