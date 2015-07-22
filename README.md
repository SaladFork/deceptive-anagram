
# The Deceptive Anagram Question

[![Build Status](https://travis-ci.org/SaladFork/deceptive-anagram.svg?branch=master)](https://travis-ci.org/SaladFork/deceptive-anagram)

## The Problem

Originally asked on Hacker News, the question is stated as such:

> Write an algorithm that given an array of unique words `W`, returns an array of words in `W` that are an anagram of another word in `W`, in the order in which they appear in `W`.

### Example Input

```javascript
[ "edit", "gulp", "plug", "swing", "wings", "printer", "tiger", "diet" ]
```

### Desired Output

```javascript
[ "edit", "gulp", "plug", "swing", "wings", "diet" ]
```

## Running Tests

One-time install before running any tests:

```bash
$ npm install
```

To run tests one time:

```bash
$ npm run test
```

To run tests and watch directory for changes:
```bash
$ npm run autotest
```

## Approaches

### Naive

The naive approach iterates through the list of words, filtering it to words that have an anagram elsewhere in the list. This is determined by comparing each word to every other word in the list until an anagram is found (or not).

One way to determine if two words are anagrams is to count the number of times each character appears in each and to compare the results. If both words have the same letters the same number of times, they must be anagrams (or the same word twice, but we are told the input list is unique).

This approach solves the problem in `O(n^2)` time (where `n` is the number of words).

### Linear

The linear approach starts with the realization that if we can test whether a word has an anagram in constant time (`O(1)`), we can iterate through the list and filter to anagrams in linear time (`O(n)`).

This can be accomplished by taking a two-pass approach through the list:
  1. On the first pass, hash each word in a way such that anagrams will have the same hash but non-anagrams will have different hashes and build a hash map which maps these hashes to the count of how often they appear.
  2. On the second pass, filter the list to only words whose hash appears in the hash map twice or more, as then we know the word has an anagram.

One approach to hash anagrams to the same hash is to sort the letters within each word. That is, `edit` will be sorted to `deit`, the same hash as its anagram, `diet`.

This approach solves the problem in `O(n)` time (where `n` is the number of words), though one must consider the time it takes to sort the letters in each word (`O(mlogm)` time where `m` is the length of a word) which has to be done for each word.
