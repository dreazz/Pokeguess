"use strict"
var main = document.querySelector(".main");
var startButton;
function Game() {
this.pokemon = new Pokemon; 
this.player  = new Player; 

}

Game.prototype.startGame = function() {};
Game.prototype.buildDom = function() {};
Game.prototype.nameCheck = function(name) {
  // check pokemon name with the users input
};
Game.prototype.printStartScreen = function() {
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
  
};
Game.prototype.printGameScreen = function() {
  main.innerHTML =`<h1> gameScreen</h1>`;
};
Game.prototype.printWinScreen = function() {};
Game.prototype.printGameOverScreen = function() {};
