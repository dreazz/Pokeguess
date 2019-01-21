"use strict";
var main = document.querySelector(".main");
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
  
  console.log("API: "+this.pokemon.name)
  var pokeForm = document.querySelector("#pokeForm")
  console.log("form: "+pokeForm.pokeName.value)
  
  
  if(this.pokemon.name == pokeForm.pokeName.value){
    console.log("correct");
    console.log("pokemon Name: "+this.pokemon.name, " player input: "+pokeForm.pokeName.value);
    
  } 
  else{
    console.log("wrong as fuck");
    console.log("pokemon Name: "+this.pokemon.name, " player input: "+pokeForm.pokeName.value);
    
  }
  
  apiCall();
 

};

Game.prototype.printWinScreen = function() {};
Game.prototype.printGameOverScreen = function() {};

Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
  

 
};

Game.prototype.printGameScreen = function() {
  console.log(this.pokemon.name +" "+ this.isStarted)
  main.innerHTML = `
  <section class="startScreenMain">
    <h1>Guess the pokemon${this.pokemon.name}</h1>
    <img src ="${this.pokemon.sprite}">  
    <form name="myForm" id="pokeForm" onsubmit="return game.nameCheck()" >
    Name: <input type="text" name="pokeName">
    <input type="submit" value="Submit">
    </form> 
   
  </section>

 `;
 
 
};
