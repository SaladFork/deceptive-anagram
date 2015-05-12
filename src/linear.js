export default function(words) {
  let anagramsHash = generateAnagramsHash(words);

  return words.filter((word) => isAnagramInHash(word, anagramsHash));
}

export { generateAnagramsHash, hashWord, isAnagramInHash };

function generateAnagramsHash(words) {
  let wordHashes = words.map(word => hashWord(word));

  return wordHashes.reduce((counts, hash) => {
    let hashCount = counts[hash];
    counts[hash] = hashCount === undefined ? 1 : hashCount + 1;
    return counts;
  }, {});
}

function hashWord(word) {
  let characters = word.split(''),
      sortedCharacters = characters.sort();

  return sortedCharacters.join('');
}

function isAnagramInHash(word, hash) {
  let wordHash = hashWord(word);

  // A word has an anagram if its hash appears at least twice: once for the word
  // and once for an anagram
  // NOTE: Unlike the naive solution, this could cause a word to be considered
  // an anagram of itself if it appears twice in the original list
  return hash[wordHash] >= 2;
}
