# PoKeGuess

## Description
PokeGuess is a game that will bring you back to you childhood (if you are a millenial).
 
The main goal of the game is to guess which pokemon is being showed in the screen, this will be blurred


## MVP (DOM - CANVAS)
This game is made with DOM manipulation.The game will show a blurry image with 4 different pokemon names where if the player chooses right he will sum points but if not he will lose lives to a max of 3.

Files it contains:

- index.html
- style.css
- main.js
- game.js
- player.js
- pokemon.js
- pokeApi.js
- fonts




## Backlog
- Make the same navbar fixed for every screen, with title and rules, highscore icons

- Put my twitter fixed in the bottom as a maker

- Put my face in ascci in the html

- Put a failed button to show all the pokemons names you failed

- Put a hints part in the game screen

- Add properties to pokemon class

- Add an easter egg where players can download a file with a pokemon card

## Data structure
Classes and methods definition.

### Classes
- Pokemon
- Player
- Game


### Methods
#### Game Methods
```
"use strict"
function Game() {
this.pokemon = new Pokemon; 
this.player  = new Player; 

}

Game.prototype.startGame = function() {};
Game.prototype.buildDom = function() {};
Game.prototype.printStartScreen = function() {};
Game.prototype.printGameScreen = function() {};
Game.prototype.printWinScreen = function() {};
Game.prototype.printGameOverScreen = function() {};
Game.prototype.deleteScreen = function() {};

```


#### Player Methods

```
"use strict"
function Player(name) {
  this.name = name;
  this.points = 0;
  this.lives = 3;
  this.highScore = this.points;
}

Player.prototype.printName = function() {
  return this.name;
};
Player.prototype.loseLives = function() {
  return (this.lives -= 1);
};
Player.prototype.earnPoints = function() {
  return (this.points += 1);
};
Player.prototype.printHighscore = function() {
  return this.highScore;
};

```

#### Pokemon Methods

```
"use strict"
function Pokemon() {
  this.name; //json call
}

Pokemon.prototype.printName = function() {
  return this.name;
};
```



## States y States Transitions
Definition of the different states and their transition (transition functions)

- Start Screen: Screen with the start button, first screen the player will encounter.
- gameScreen: In this screen the player is in the game, where depending on his answers he will lose lives or win points.
- gameoverScreen: Screen that appears if the player loses all his lives 
- winScreen: Screen that appears if the player reaches 10 points.


## Task
Tasks are more defined in the trello board 

Resume of the tasks:

- Create git repo
- Create the HTML for each of the game screens
- Create classes for each of the 3  objects

- Create properties and methods of each of the classes
- Refactor code
- Expand game with the backlog ideas
- Refactor added functions from the backlog
- Deploy on github websites
- Commit and push always :)
- Prepare presentation and slides


## Links


### Trello
[Link url](https://trello.com/b/jmC5scGw/pokeguess)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)