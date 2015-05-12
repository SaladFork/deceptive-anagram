import { expect } from 'chai';

import testSolution   from './helpers/test-solution';

import linearSolution from '../src/linear';
import { generateAnagramsHash, hashWord, isAnagramInHash } from '../src/linear';

describe('linear solution', function () {

  testSolution(linearSolution);

  context('unit tests', function () {

    describe('#generateAnagramsHash', function () {
      it('should return a hash count of each word passed to it', function () {
        let words = ['ab', 'ba', 'cd'];
        expect(generateAnagramsHash(words)[hashWord('ab')]).to.eql(2);
        expect(generateAnagramsHash(words)[hashWord('ba')]).to.eql(2);
        expect(generateAnagramsHash(words)[hashWord('cd')]).to.eql(1);
      });
    });

    describe('#hashWord', function () {
      it('should return the same hash for anagrams', function () {
        expect(hashWord('ab')).to.eql(hashWord('ba'));
        expect(hashWord('swing')).to.eql(hashWord('wings'));
      });
      it('should return a different hash for non-anagrams', function () {
        expect(hashWord('ab')).to.not.eql(hashWord('cd'));
        expect(hashWord('swing')).to.not.eql(hashWord('plug'));
      });
    });

    describe('#isAnagramInHash', function () {
      it('should return true for anagrams in the hash', function () {
        let hash = generateAnagramsHash(['ab', 'ba']);
        expect(isAnagramInHash('ab', hash)).to.equal(true);
        expect(isAnagramInHash('ba', hash)).to.equal(true);
      });
      it('should return false for non-anagrams in the hash', function () {
        let hash = generateAnagramsHash(['ab', 'cd']);
        expect(isAnagramInHash('ab', hash)).to.equal(false);
        expect(isAnagramInHash('cd', hash)).to.equal(false);
      });
    });

  });
});
