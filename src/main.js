"use strict"
var startButton;
window.addEventListener("load",function(){
  Game.prototype.printStartScreen();
   
  startButton= document.querySelector(".startButton");
startButton.addEventListener("click",function(){
  
  Game.prototype.printGameScreen();
});



});

