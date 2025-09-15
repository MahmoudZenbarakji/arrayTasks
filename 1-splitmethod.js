let sentences = ["I love JS", "JS is fun"];

let words = sentences.flatMap(sentence => sentence.split(" "));

console.log(words); 
