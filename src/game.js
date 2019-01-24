"use strict";

var main = document.querySelector(".main");
var blurred = document.querySelector(".blurred");
var startButton = document.querySelector("#menu-button");
var pokemonSection = document.querySelector(".screen-main");
var scoreList = document.getElementsByClassName("high-score-list");
var myObjSerialized;
var myObjDeserialized;
function Game() {
  this.pokemon = new Pokemon();
  this.player = new Player();
  this.isStarted = false; //detects if game is started
  this.maxPoints = 6;
}
Game.prototype.hall = function() {
  return this.pokemon.hallOfFame;
};
//checks the player imput with the name of the pokemon
Game.prototype.nameCheck = function() {
  if (myForm.pokeName.value === this.pokemon.name) {
    if (this.player.points === this.maxPoints) {
      this.printGameOverScreen();
    } else {
      this.pokemon.hallOfFame.push({
        name: this.pokemon.name,
        sprite: this.pokemon.sprite
      });
      this.player.points += 1;
      apiCall();
      this.printGameScreen();
    }
  } else {
    if (this.player.lives === 0) {
      this.printGameOverScreen();
    } else {
      this.player.lives -= 1;
      apiCall();
      this.printGameScreen();
    }
  }
};
// Game.prototype.getHighScore = function() {
//   myObjDeserialized = JSON.parse(localStorage.player)
//   for (var i in myObjDeserialized) {
//     scoreList.innerHTML = `
//     <li class="score">
//      <h3>${i} </h3>
//     <h3>${myObjDeserialized[(i)]}</h3>
//     </li> `;
//   }
// };
//Sets pokemon data from the api
Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
};

//printStartScreen declaration
Game.prototype.printStartScreen = function() {
  pokemonSection.innerHTML = ` 
  
  <form class="form">
    <h1>PokeGuess</h1>
    <label for="username">Username</label> 
    <input type="text" class="user-input player-name" placeholder="ash" autofocus>
    <button class="startButton btn">Start Game</button>
  </form>
<ul>
  <li class="rules">
    <i class="fas fa-scroll"></i>
    <div class="dropdown-rules dropdown">
      <h3>Rules</h3>
      <p> Guess the pokemon that will be shown </p>
      <p>You have 4 trys before you die, i mean ... you lose :)</p>
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
};
Game.prototype.getFocus = function() {
  $(".user-input").focus();
};
Game.prototype.printGameScreen = function() {
  pokemonSection.innerHTML = `  
  <div class="player-status">
  <div class="game-icon"> <i class="far fa-heart"><span>${this.player.lives}</span></i> </div>
  <div class="game-icon"> <i class="fas fa-trophy"><span>${this.player.points}</span></i> </div>
  
  </div>
    <div id="pokemonName">
    <h1>${this.pokemon.name}</h1>
    </div>
    <div id="pokemonImage">
    <img class="blurred" src ="${this.pokemon.sprite}"> 
    </div> 
    <form name="myForm" id="pokeForm" class="form" onsubmit="return game.nameCheck()">
    <input type="text" class="user-input game-input" name="pokeName" placeholder="pikachu" autofocus>
    
    </form> 
    
 `;
  this.getFocus();
};
Game.prototype.printGameOverScreen = function() {
  game.isStarted = false;
  if (this.player.points === this.maxPoints && this.player.lives > 0) {
    setTimeout(confetti, 800);

    pokemonSection.innerHTML = `

    <h1 class="header-game-over win-title"> Hall of fame</h1>
    <div class="hall-of-fame">
      <h1>${this.pokemon.hallOfFame[0].name}</h1>
      <img src="${this.pokemon.hallOfFame[0].sprite}" >
      <h1>${this.pokemon.hallOfFame[1].name}</h1>
      <img src="${this.pokemon.hallOfFame[1].sprite}" >
      <h1>${this.pokemon.hallOfFame[2].name}</h1>
      <img src="${this.pokemon.hallOfFame[2].sprite}" >
    </div>
    <div class="hall-of-fame">
      <h1>${this.pokemon.hallOfFame[3].name}</h1>
      <img src="${this.pokemon.hallOfFame[3].sprite}" >
      <h1>${this.pokemon.hallOfFame[4].name}</h1>
      <img src="${this.pokemon.hallOfFame[4].sprite}" >
      <h1>${this.pokemon.hallOfFame[5].name}</h1>
      <img src="${this.pokemon.hallOfFame[5].sprite}" >
    </div>
    <!--<button class="startButton btn">Play Again</button>-->
    <button class="startButton btn" onclick="game.printStartScreen()">Menu</button>
  `;

    // pokemonSection.classList.add("full-width");
    // myObjSerialized = JSON.stringify({
    //   name: this.player.name,
    //   points: this.player.points
    // });
    // window.localStorage.setItem("player", myObjSerialized);
  } else {
    pokemonSection.innerHTML = `
  
    <h1 class="header-game-over lose-title"> You suck so bad that you hurt yourself</h1>
    <img class="img-game-over" src="https://pbs.twimg.com/profile_images/498674423357251585/cD4IfiPQ_400x400.jpeg">
    <!--<button class="startButton btn">Play Again</button>-->
    <button class="startButton btn" onclick="game.printStartScreen()">Menu</button>
  `;
  // myObjSerialized = JSON.stringify({
  //     name: this.player.name,
  //     points: this.player.points
  //   });
  //   window.localStorage.setItem("player", myObjSerialized);
  // }
};
