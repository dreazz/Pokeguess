"use strict";
var game;
var startButton;
var playerName = document.querySelector(".player-name");

window.addEventListener("load", function() {
  game = new Game();
  apiCall(); // call the api so i have the data for the game screen
  game.getHighScore();
  printStartScreen();

  startButton = document.querySelector(".startButton");
  playerName = document.querySelector(".player-name");
  startButton.addEventListener("click", function() {
    game.player.name = playerName.value;
    game.isStarted = true;

    game.printGameScreen();
  });

  //printStartScreen declaration
  function printStartScreen() {
    pokemonSection.innerHTML = ` 
    
    <form class="form">
      <h1>PokeGuess</h1>
      <label for="username">Username</label> 
      <input type="text" class="user-input player-name" placeholder="ash" autofocus/>
      <button class="startButton btn">Start Game</button>
    </form>
  <ul>
    <li class="rules">
      <i class="fas fa-scroll"></i>
      <div class="dropdown-rules dropdown">
        <h3>Rules</h3>
        <p> Guess the pokemon that will be shown </p>
        <p>You have 3 trys before you die, i mean ... you lose :)</p>
        <p>Easy Peasy Lemon Squeezy</p>
      </div>
    </li>
    <li class="high-score">
        <i class="fas fa-trophy"></i>
        <div class="dropdown-score dropdown">
        <h3>Highscore</h3>
        <ul class="high-score-list">
        
        </ul>
        </div>
      </i>
    </li>
  </ul>
  
  `;
  }
});
