"use strict";
var main = document.querySelector(".main");
var startButton;
function Game() {
  this.pokemon = new Pokemon();
  this.player = new Player();
}

//unused
Game.prototype.startGame = function() {};
Game.prototype.buildDom = function() {};
// check pokemon name with the users input
Game.prototype.nameCheck = function(name){};
Game.prototype.printWinScreen = function() {};
Game.prototype.printGameOverScreen = function() {};

Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
  
  console.log(this.pokemon);
};

Game.prototype.printGameScreen = function() {
  main.innerHTML = `<h1>${this.pokemon.name}</h1>
  <img src ="${this.pokemon.sprite}">
 `;
  console.log(this.pokemon.printName());
};



