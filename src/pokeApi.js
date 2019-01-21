"use strict";

function apiCall() {
  var randomPokemon = Math.floor(Math.random() * 800);
  var pokemonName;
  var pokemonImage;

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      game.setPokemon(data);
    })
    .catch(function(error){
      console.log(error);
    });
}
