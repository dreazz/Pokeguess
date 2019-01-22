"use strict";
var main = document.querySelector(".main");
var pokemonElements = document.querySelector("#box");
var pokemonImage;
var pokemonName = document.querySelector("#pokemonName");
var startButton;
var blurred = document.querySelector(".blurred");

function Game() {
  this.pokemon = new Pokemon();
  this.player = new Player();
  this.isStarted = false;
}

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
    <form name="myForm" id="pokeForm" onsubmit="return game.nameCheck()" >
    Name: <input type="text" name="pokeName">
    </form> 
 `;
};
