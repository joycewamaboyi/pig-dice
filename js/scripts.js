function Player(name) {
    this.name = name;
    this.turnRunningScore = 0;
    this.totalBankedScore = 0;
    this.lastRoll = 0;
    this.currentTurnArray = [];
  }
  
  //Creates our two players
  var playerOne = new Player("Player One");
  var playerTwo = new Player("Player Two");
  // Dice Constructor (argument = number of sides you want. default = 6)
  function Dice(sides) {
    this.sides = sides || 6;
  }
  
  // Roll Prototype - Gets a random number between 1 and 6
  Dice.prototype.roll = function() {
    var roll = Math.floor((Math.random() * this.sides ) + 1);
    if (roll === 1) {
      alert("Doh! You rolled a 1. Your turn is over.");
    }
    return roll;
}
  
// Current Turn Array Prototype
Player.prototype.addRollToArray = function (x) {
  this.currentTurnArray.push(x)
}

// Get sum of Turn Running Total (and exclude 1s from total)
Player.prototype.sumOfRolls = function() {
  for (var i = 0; i < this.currentTurnArray.length; i++) {
    if (this.currentTurnArray[i = this.currentTurnArray.length - 1] === 1) {
      this.turnRunningScore = this.turnRunningScore;
    } else {
      this.turnRunningScore += this.currentTurnArray[i = this.currentTurnArray.length - 1];
    }
}
}
// Prototype to Bank points
Player.prototype.bankPoints = function() {
this.totalBankedScore += this.turnRunningScore;
}

// Hold/Next turnRunningScore <--Added this, score will bank when a user presses stay
Player.prototype.nextTurn = function () {
this.bankPoints();
this.turnRunningScore = 0;
}
// Create six-sided dice
var sixSidedDice = new Dice();
  
//Prototype to enter last roll value into player object
Player.prototype.setLastRoll = function(x) {
  this.lastRoll = x;
}

// Prototype to reset running total if 1 is rolled
Player.prototype.resetRunningTotalOnOne = function() {
  if (this.lastRoll === 1) {
    this.turnRunningScore = 0;
  }