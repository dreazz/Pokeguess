"use strict";

function apiCall() {
  var randomPokemon = Math.ceil(Math.random() * 151);
  var pokemonName;
  var pokemonImage;

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`) //
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //sets name and image of the pokemon
      game.setPokemon(data);
      //prints the new pokemon
      game.printNewPokemon();
      console.log("api ", data.name)
      
      return data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
