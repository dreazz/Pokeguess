"use strict";
var main = document.querySelector(".main");
var startButton;
function Game() {
  this.pokemon = new Pokemon();
  this.player = new Player();
}

Game.prototype.startGame = function() {};
Game.prototype.buildDom = function() {};
Game.prototype.nameCheck = function(name) {
  // check pokemon name with the users input
};

Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
  console.log(this.pokemon);
};

Game.prototype.printGameScreen = function() {
  main.innerHTML = `<h1> gameScreen</h1>
 `;
  console.log(this.pokemon.printName());
};
Game.prototype.printWinScreen = function() {};
Game.prototype.printGameOverScreen = function() {};
