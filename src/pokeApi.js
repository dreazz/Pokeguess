"use strict";

function apiCall() {
  // random number, if math = 0 randomNumber = 1;
  var randomPokemon =  Math.ceil(Math.random() * 151) !== 0 ? randomPokemon = Math.ceil(Math.random() * 151) : 1;
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`) //
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      game.setPokemon(data); //sets name and image of the pokemon

      if (game.isStarted) {
        game.printGameScreen(); //prints the new pokemon
      }
      console.log("api ", data.name);

      return data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
