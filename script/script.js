'use strict'

//console.log("hello world")

//TODO: I want to create a template - constructor function for an animal
//create a single constructor - template
//the constructo takes a parameter - animalName
// property called - animalName
//method to render itself on the screen - render()




function Animal(animalName){
    this.animalName = animalName;
 }

Animal.prototype.render = function() {
    
    //console.log("I am a live render function")
    let animalDiv = document.createElement('div');
    animalDiv.className = `${this.animalName}Object`;
    animalDiv.textContent =  this.animalName;

    let makeCatButton = document.querySelector('#farm');
    makeCatButton.appendChild(animalDiv);

}

//Make Cat
let catButton = document.getElementById('makeCat');

catButton.addEventListener('click', catName);

function catName(){
    let cat = new Animal('cat');
    cat.render();
}

//Make dog
let dogButton = document.getElementById('makeDog');

dogButton.addEventListener('click', dogName);

function dogName(){
    let dog = new Animal('dog');
    dog.render()
}

//Make Sheep
let sheepButton = document.getElementById('makeSheep');

sheepButton.addEventListener('click', sheepName);

function sheepName(){
    let sheep = new Animal('sheep');
    sheep.render()
}

//Make Horse
let horseButton = document.getElementById('makeHorse');

horseButton.addEventListener('click', horseName);

function horseName(){
    let horse = new Animal('horse');
    horse.render()
}