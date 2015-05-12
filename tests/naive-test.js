import { expect } from 'chai';

import testSolution   from './helpers/test-solution';

import naiveSolution from '../src/naive';
import { hasAnagram, isAnagram, characterCountHash } from '../src/naive';

describe('naive solution', function () {

  testSolution(naiveSolution);

  context('unit tests', function () {

    describe('#hasAnagram', function () {
      it('should return true if an anagram exists', function () {
        expect(hasAnagram('ab', ['ab', 'bc', 'ba'])).to.equal(true);
        expect(hasAnagram('ba', ['ab', 'bc', 'ba'])).to.equal(true);
      });
      it('should return false if an anagram does not exists', function () {
        expect(hasAnagram('ab', ['ab', 'bc', 'cd'])).to.equal(false);
        expect(hasAnagram('bc', ['ab', 'bc', 'cd'])).to.equal(false);
      });
    });

    describe('#isAnagram', function () {
      it('should return true for anagrams', function () {
        expect(isAnagram('ab', 'ba')).to.equal(true);
        expect(isAnagram('diet', 'edit')).to.equal(true);
      });
      it('should return false for non-anagrams', function () {
        expect(isAnagram('ab', 'cd')).to.equal(false);
        expect(isAnagram('diet', 'tiger')).to.equal(false);
      });
    });

    describe('#characterCountHash', function () {
      it('should return a hash of character counts for a string', function () {
        expect(characterCountHash('abcd')).to.eql({
          'a': 1, 'b': 1, 'c': 1, 'd': 1
        });
        expect(characterCountHash('aaa')).to.eql({
          'a': 3
        });
        expect(characterCountHash('printer')).to.eql({
          'p': 1, 'r': 2, 'i': 1, 'n': 1, 't': 1, 'e': 1
        });
      });
    });

  });

});
