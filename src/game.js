"use strict";
var main = document.querySelector(".main");
var blurred = document.querySelector(".blurred");
var pokemonElements = document.querySelector("#box");

function Game() {
  this.pokemon = new Pokemon();
  this.player = new Player();
  this.isStarted = false;//detects if game is started 
}

//checks the player imput with the name of the pokemon
Game.prototype.nameCheck = function() {
  //refresh the api and calls printNewPokemon
  apiCall();

  if (this.pokemon.name == pokeForm.pokeName.value) {
    this.printGameScreen();
    console.log("correct");
  } else {
    this.printGameScreen();
    console.log("wrong as fuck");
  }
};

//Sets pokemon data from the api
Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
};

Game.prototype.printGameScreen = function() {
  console.log(this.pokemon.name + " " + this.isStarted);
  pokemonElements.innerHTML = `  
    <div id="pokemonName">
    <h1>Guess the pokemon ${this.pokemon.name}</h1>
    </div>
    <div id="pokemonImage">
    <img class="blurred" src ="${this.pokemon.sprite}"> 
    </div> 
    <form name="myForm" id="pokeForm" class="form" onsubmit="return game.nameCheck()" >
     <input type="text" class="userInput" name="pokeName" placeholder="pikcahu">
    </form> 
    </div>
 `;
};
