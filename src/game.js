"use strict"

function Game() {
this.pokemon = new Pokemon; 
this.player  = new Player; 

}

Game.prototype.startGame = function() {};
Game.prototype.buildDom = function() {};
Game.prototype.nameCheck = function() {};
Game.prototype.printStartScreen = function() {};
Game.prototype.printGameScreen = function() {};
Game.prototype.printWinScreen = function() {};
Game.prototype.printGameOverScreen = function() {};
Game.prototype.deleteScreen = function() {};