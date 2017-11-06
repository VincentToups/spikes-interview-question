require("./puff.js").pollute(global);
var fs = require("fs");
var neuronData = require("neurons.json");
var predictions = rOn(fs.readFileSync("predictions.csv"),split("\n"),map(split(",")),map(p_(parseInt,10)));

console.log(predictions);


