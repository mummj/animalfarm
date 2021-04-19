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
    
    console.log("I am a live render function")
    let catDiv = document.createElement('div');
    catDiv.className = 'catObject';
    catDiv.textContent =  'cat';


}

//Target the cat button
//attach a listener to listen to the 'click'
//respond to the click with my own list of things to do (create and render the cat)

let catButton = document.getElementById('makeCat');

catButton.addEventListener('click', catName);

function catName(){
    console.log('cat was clicked')
    //let cat = new createButton("makeCat");
}


