function Player(name) {
  this.name = name;
  this.points = 0;
  this.lives = 3;
  this.highScore = this.points;
}

Player.prototype.printName = function() {
  return this.name;
};
Player.prototype.loseLives = function() {
  return (this.lives -= 1);
};
Player.prototype.earnPoints = function() {
  return (this.points += 1);
};
Player.prototype.printHighscore = function() {
  return this.highScore;
};
