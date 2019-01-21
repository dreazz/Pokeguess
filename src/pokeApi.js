"use strict"

var pokemon;
var h1 = document.querySelector("#pokemonH1");

var randomPokemon = Math.floor(Math.random() * 800);

//function pokemon(){
fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    pokemon = data.name;
    /*print image and name of pokemon */
    h1Name.innerText = "you are an ugly " + data.name;
    var pokemonObject = {
      PokemonName: data.name,
      pokemonSprite: data.sprites.front_default
    };
    window.localStorage.setItem("PokemonObject", JSON.stringify(pokemonObject));
    document.innerHTML = `<img src = "${data.sprites.front_default}">`;
  });
