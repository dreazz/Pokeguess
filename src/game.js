"use strict";
var main = document.querySelector(".main");
var blurred = document.querySelector(".blurred");
var pokemonSection = document.querySelector(".screen-main");
var scoreList = document.getElementsByClassName("dropdown-score");

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
Game.prototype.getHighScore = function(){
  
  for(var i in localStorage){
    scoreList.innerHTML = `<li class="score"> <h3>${localStorage.key(i)}</h3><h3>${localStorage[localStorage.key(i)]}</h3></li> `;
  }
}
//Sets pokemon data from the api
Game.prototype.setPokemon = function(data) {
  this.pokemon.setName(data.name);
  this.pokemon.setSprite(data.sprites.front_default);
};

Game.prototype.printGameScreen = function() {
  console.log(this.pokemon.name + " " + this.isStarted);
  pokemonSection.innerHTML = `  
  <h3> ${this.player.points}</h3>
  <h3> ${this.player.lives}</h3>
    <div id="pokemonName">
    <h1>Guess the pokemon ${this.pokemon.name}</h1>
    </div>
    <div id="pokemonImage">
    <img class="blurred" src ="${this.pokemon.sprite}"> 
    </div> 
    <form name="myForm" id="pokeForm" class="form" onsubmit="return game.nameCheck()">
     <input type="text" class="user-input" name="pokeName" placeholder="pikcachu" >
    </form> 
    </div>
 `;
};

Game.prototype.printGameOverScreen = function() {
  game.isStarted = false;
  if (this.player.points === this.maxPoints && this.player.lives > 0) {
    setTimeout(confetti,800);
    

    pokemonSection.innerHTML = `

    <h1 class="header-game-over"> hall of fame</h1>
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
    <button class="startButton btn">Play Again</button>
    <button class="startButton btn">Menu</button>
  `;
   localStorage.setItem(this.player.name, this.player.points);
  } else {
    pokemonSection.innerHTML = `
  
  <h1 class="header-game-over"> you suck so bad that you hurted yourself</h1>
    <img class="img-game-over" src="https://pbs.twimg.com/profile_images/498674423357251585/cD4IfiPQ_400x400.jpeg">
    <button class="startButton btn">Play Again</button>
    <button class="startButton btn">Menu</button>
  `;
  localStorage.setItem(this.player.name, this.player.points);
  }
};
