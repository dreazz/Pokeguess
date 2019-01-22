"use strict";

function Pokemon() {
  this.name;
  this.sprite;
}

//Gets pokemon name from the api
Pokemon.prototype.setName = function(name) {
  this.name = name;
};

Pokemon.prototype.setSprite = function(sprite) {
  this.sprite = sprite;
};
