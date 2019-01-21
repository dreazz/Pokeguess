"use strict";
var startButton;
var game;

window.addEventListener("load", function() {
  
  game = new Game()
   // call the api so i have the data for the game screen
 
  printStartScreen();
  
  apiCall();

  startButton = document.querySelector(".startButton");
  startButton.addEventListener("click", function() {
    
    game.isStarted = true;
    game.printGameScreen();
  });
  
  function printStartScreen() {
    main.innerHTML = ` 
    <section class="startScreenMain">
    <form>
    <h1>PokeGuess</h1>
  <label for="username">Username</label> 
  <input type="text" id="usernameInput" placeholder="ash"/>
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
        <div class="dropdown-score dropdown"><h3>Highscore</h3></div>
      </i>
    </li>
  </ul>
  </section>
  `;
  }
  
});
