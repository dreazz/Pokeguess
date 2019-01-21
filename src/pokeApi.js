"use strict";

function apiCall() {
  var randomPokemon = Math.ceil(Math.random() * 600);
  var pokemonName;
  var pokemonImage;

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`) //
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      game.setPokemon(data);
      console.log("api ", game.isStarted)
      if (game.isStarted) {
        game.printGameScreen();
      }
      return data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
