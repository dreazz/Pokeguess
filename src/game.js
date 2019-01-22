"use strict";
var main = document.querySelector(".main");
var blurred = document.querySelector(".blurred");
var pokemonSection = document.querySelector(".screen-main");

function Game() {
  this.pokemon = new Pokemon();
  this.player = new Player();
  this.isStarted = false; //detects if game is started
}
Game.prototype.startPlaying = function() {
  
};
//checks the player imput with the name of the pokemon
Game.prototype.nameCheck = function() {
  //refresh the api and calls printNewPokemon
  if (this.player.lives > 2) {
    apiCall();

    if (this.pokemon.name == pokeForm.pokeName.value) {
      this.printGameScreen();
      console.log("correct");
    } else {
      this.player.lives -= 1;
      this.printGameScreen();
      console.log("wrong as fuck");
    }
  } else {
    this.printGameOverScreen();
  }
};

//Sets pokemon data from the api
Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
};

Game.prototype.printGameScreen = function() {
  console.log(this.pokemon.name + " " + this.isStarted);
  pokemonSection.innerHTML = `  
    <div id="pokemonName">
    <h1>Guess the pokemon ${this.pokemon.name}</h1>
    </div>
    <div id="pokemonImage">
    <img class="blurred" src ="${this.pokemon.sprite}"> 
    </div> 
    <form name="myForm" id="pokeForm" class="form" onsubmit="return game.nameCheck()">
     <input type="text" class="user-input" name="pokeName" placeholder="pikcahu" >
    </form> 
    </div>
 `;
};

Game.prototype.printGameOverScreen = function() {
  game.isStarted = false;
  pokemonSection.innerHTML = `
  
  <h1 class="header-game-over"> you suck so bad that you hurted yourself</h1>
    <img class="img-game-over" src="https://pbs.twimg.com/profile_images/498674423357251585/cD4IfiPQ_400x400.jpeg">
    <button class="startButton btn">Play Again</button>
  `;
};
