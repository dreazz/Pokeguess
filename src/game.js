"use strict";
var main = document.querySelector(".main");
var pokemonImage;
var pokemonName = document.querySelector("#pokemonName")
var startButton;
function Game() {
  this.pokemon = new Pokemon();
  this.player = new Player();
  this.isStarted = false;
}
// var game = new Game();

//unused
Game.prototype.startGame = function() {};
Game.prototype.buildDom = function() {};
// check pokemon name with the users input
Game.prototype.nameCheck = function() {
  apiCall();
  
  if (this.pokemon.name == pokeForm.pokeName.value) {
    this.printGameScreen(); 
  
    console.log("correct");
    
    
  } else {
    
    console.log("wrong as fuck");
  
  }
 
  
};

Game.prototype.printNewPokemon = function() {
  pokemonImage = document.querySelector("#pokemonImage");
  pokemonName = document.querySelector("#pokemonName");
  pokemonImage.innerHTML = ` <img src ="${this.pokemon.sprite}"> `
  pokemonName.innerHTML = `<h1>Guess the pokemon " "${this.pokemon.name}</h1>`


};

Game.prototype.printWinScreen = function() {};
Game.prototype.printGameOverScreen = function() {};

Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
};

Game.prototype.printGameScreen = function() {
  console.log(this.pokemon.name + " " + this.isStarted);
  main.innerHTML = `
  <section class="startScreenMain">
    <div id="pokemonName">
    <h1>Guess the pokemon " "${this.pokemon.name}</h1>
    </div>
    <div id="pokemonImage">
    <img src ="${this.pokemon.sprite}"> 
    </div> 
    <form name="myForm" id="pokeForm" onsubmit="return game.nameCheck()" >
    Name: <input type="text" name="pokeName">
    <input type="button" value="Submit">
    </form> 
   
  </section>

 `;
};
