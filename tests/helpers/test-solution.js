import { expect } from 'chai';

export default function (solution) {

  it('should return words that have anagrams', function () {
    expect(solution(['ab', 'ba']))
            .to.eql(['ab', 'ba']);

    expect(solution(['ab', 'cd', 'ba', 'dc']))
            .to.eql(['ab', 'cd', 'ba', 'dc']);

    expect(solution(['edit', 'wings', 'diet', 'swing']))
            .to.eql(['edit', 'wings', 'diet', 'swing']);
  });

  it('should not return words that do not have anagrams', function () {
    expect(solution(['ab', 'ba', 'c']))
            .to.eql(['ab', 'ba']);

    expect(solution(['edit', 'wings', 'diet', 'tiger', 'swing']))
            .to.eql(['edit', 'wings', 'diet', 'swing']);
  });

  it('should return the desired output for the example input', function () {
    let exampleInput = [
        'edit', 'gulp', 'plug', 'swing',
        'wings', 'printer', 'tiger', 'diet'
      ],
      desiredOutput = [
        'edit', 'gulp', 'plug', 'swing',
        'wings', 'diet'
      ];

    expect(solution(exampleInput)).to.eql(desiredOutput);
  });

}
