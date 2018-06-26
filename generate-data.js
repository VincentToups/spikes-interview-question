var puff = require('./puff.js').pollute(global);

var n = 1000;
var categories = [2,4,8]
var jitter = 0.1;
var neuronNumber = 1000;
var neurons = new Array(n).fill(0).map(makeNeuron);
var simulationLength = 60;

function generateSuccessRate(){
    var rates = [1,1,1,1,.75,.75,.75,.5,.5,.25,.15];
    var actualRate = oneRandomly(rates)+Math.random()*0.1;
    return Math.min(Math.max(actualRate,0),1);
}

var fs = require("fs");

function oneRandomly(a){
    return a[Math.floor(Math.random()*a.length)];
}


console.log("at top",neuronNumber);
function Neuron(rate,labeled,jitter){
    this.rate = rate;
    this.labeled = labeled;
    this.jitter = jitter;
    this.lastEvent = 0;
    this.neuronNumber = neuronNumber;
    this.successRate = generateSuccessRate();
    this.numberGenerated = 0;
    this.numberRecorded = 0;
    neuronNumber = neuronNumber + 1;
}

Neuron.prototype.nextEvent = function(){
    let next = this.lastEvent + (1/this.rate) + jitter*Math.random()-(jitter/2);
    this.lastEvent = next;
    this.numberGenerated = this.numberGenerated + 1;
    return {id:this.neuronNumber, time:this.lastEvent, label:this.labeled ? this.rate : "?"};
};

Neuron.prototype.toJson = function(){
    return {
        id:this.neuronNumber,
        rate:this.rate,
        labeled:this.labeled,
        jitter:this.jitter,
        successRate:this.successRate,
        numberGenerated:this.numberGenerated,
        numberRecorded:this.numberRecorded
    };
};

function makeNeuron(){
    return new Neuron(oneRandomly(categories),oneRandomly([true,false]),jitter);   
}

var data = [];
neurons.forEach(function(neuron){
    while(neuron.lastEvent<simulationLength){
        let event = neuron.nextEvent();
        if(Math.random()<=neuron.successRate){
            data.push(event);
            neuron.numberRecorded = neuron.numberRecorded+1;
        };
    }
});
data = data.sort(byTime);

fs.writeFileSync("./data.json",JSON.stringify(data,null,"  "));
fs.writeFileSync("./neurons.json",JSON.stringify(neurons.map(function(n){
    return n.toJson();
}),null,"  "));

function byTime(a,b){
    var q = a.time;
    var r = b.time;
    return q-r;
}







