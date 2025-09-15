let text = "JavaScript is fun but challenging when you want to master it quickly";


let arr = text.split(" ");

arr = arr.filter(word => word.length > 2);


arr = arr.slice(0, 8);


arr.reverse();


arr.unshift("START");
arr.push("END");

console.log(arr.includes("fun")); 


arr.forEach(word => console.log(word));


console.log(arr.join("-"));

let sorted = [...arr].sort();
console.log(sorted);


console.log(sorted.indexOf("JavaScript"));
