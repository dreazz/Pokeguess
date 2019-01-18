"use strict"

var pokemon;
var h1 = document.querySelector("#pokemonH1");
var h1Name = document.querySelector("#pokemonName");
var randomPokemon = Math.floor(Math.random() * 800);

//function pokemon(){
fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    pokemon = data.name;
    h1Name.innerText = "you are an ugly " + data.name;
    var pokemonObject = {
      PokemonName: data.name,
      pokemonSprite: data.sprites.front_default
    };
    window.localStorage.setItem("PokemonObject", JSON.stringify(pokemonObject));
    h1.innerHTML = `<img src = "${data.sprites.front_default}">`;
  });
