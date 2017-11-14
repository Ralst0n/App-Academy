//Additional intro problems.js
console.log(`Titleize`)
function printCallBack(name) {
  console.log(name);
}
function titleize(arr, func) {
  titles = arr.map( name => {
    return `Mx. ${name} Jingleheimer Scmidt`;
  });
  titles.forEach(printCallBack)
}

titleize(["Mary", "Brian", "Leo"], printCallBack);


function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
  this.paradeHelper = function(name) {
    console.log(this.tricks[0]);
  }
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} goes 'phrRRRRRRRRR!!!!!!'`);
}
Elephant.prototype.grow= function() {
  this.height += 12;
  console.log(`${this.name} grew another 12 inches. ${this.name} is now ${this.height} inches tall!`)
}
Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
  console.log(`${this.name} learned ${this.tricks[this.tricks.length - 1]}!`);
}

Elephant.prototype.play= function() {
  let count = this.tricks.length;
  let trick_number = Math.floor(Math.random() * count);
  console.log(`${this.name} is ${this.tricks[trick_number]}`)
}

const curly = new Elephant('Curly', 264, ['milly rocking', 'singing a song', 'pulling up from 30ft']);

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [curly, ellie, charlie, kate, micah];

herd.forEach(paradeHelper);
