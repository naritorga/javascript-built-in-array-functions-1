let words = ["apple", "cat", "dog", "elephant"];

function countWords (word){
  return word.length >= 5
}

function get5CharWords(words) {
  // Start coding here
  let char5Words = words.filter(countWords)
  return char5Words
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
