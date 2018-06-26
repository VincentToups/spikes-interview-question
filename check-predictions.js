require("./puff.js").pollute(global);

function pairsToMap(pairs){
    var out = {};
    pairs.map(addOne);
    return out;

    function addOne(pair){
        out[pair[0]] = pair[1];
    }    
}

function actualsToMap(actuals){
    var out = {};
    actuals.map(addOne);
    return out;

    function addOne(actual){
        out[actual.id] =  actual.rate;
    }
}

var fs = require("fs");
var neuronData = require("./neurons.json");
var predictions = rOn(fs.readFileSync("label_predictions.csv"),
                      p_(md,"toString"),
                      split("\n"),
                      p_(md,"slice",1),
                      map(split(",")),
                      map(map(p_(parseInt,10))),
                      pairsToMap);

var actuals = actualsToMap(neuronData);

function calculateErrorRate(actual,prediction){
    var nCorrect = 0;
    var n = 0;
    Object.keys(prediction).forEach(function(key){
        n = n + 1;
        if(actual[key]===prediction[key]) nCorrect = nCorrect + 1;
    });
    return {
        n:n,
        nCorrect:nCorrect,
        pct:nCorrect/n
    };
}

console.log(calculateErrorRate(actuals,predictions));




