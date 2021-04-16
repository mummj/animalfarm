'use strict'

//console.log("hello world")

//TODO: I want to create a template - constructor function for an animal
//create a single constructor - template
//the constructo takes a parameter - animalName
// property called - animalName
//method to render itself on the screen - render()




function animal(animalName){
    this.animalName = animalName
}

animal.protype.render = function() {
    
    console.log("I am a live render function")
    //do the render thing .... put yourself on the html screen
}
//Target the cat button
//attach a listener to listen to the 'click'
//respond to the click with my own list of things to do (create and render the cat)

let createButton = document.getElementById('makeCat');

createButton.addEventListener('click', );
