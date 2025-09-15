let words2 = ["Hello", "World", "JS"];


words2.forEach(word => {
  console.log(word, "→ last letter:", word[word.length - 1]);
});


let joined = words2.join("-");
console.log(joined); 
