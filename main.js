'use strict';

const assert = require('assert');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  const myVowels = ["a", "e", "i", "o", "u"]

  word = word.toLowerCase().trim();

  for (let i = 0; i < word.length; i++) {

    if (myVowels.includes(word[0])) {
      return word + 'yay'
    } else if (myVowels.includes(word[1]))  {
      let simpleWord = word.substring(1);
      let startingLetter = word[0];
      return simpleWord + startingLetter + 'ay'
    } else (myVowels.includes(word[2])); {
      let complexWord = word.substring(2);
      let startingLetter = word[0];
      let secondLetter = word[1];
      return complexWord + startingLetter + secondLetter + 'ay'
    }

  }

}


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}


if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
