"use strict";
var game;
var startButton;
var playerName = document.querySelector(".player-name");

window.addEventListener("load", function() {
  game = new Game();
  apiCall(); // call the api so i have the data for the game screen
  game.printStartScreen();
  // game.getHighScore()
  startButton = document.querySelector(".startButton");
  playerName = document.querySelector(".player-name");
  startButton.addEventListener("click", function() {
    game.player.name = playerName.value;
    game.isStarted = true;

    game.printGameScreen();
  });
});
