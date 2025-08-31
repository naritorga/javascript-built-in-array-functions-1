let words = ["hello", "world"];

function newWordsLenghts(word) {
  return word.length
}

function getWordLengths(words) {
  // Start coding here
  let newWords = words.map(newWordsLenghts)
  return newWords
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
