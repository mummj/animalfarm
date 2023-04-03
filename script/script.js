'use strict'

//constructor function
function Animal(animalName){
    this.animalName = animalName;
 }
//renter tells the specific animal to put into html
Animal.prototype.render = function() {
    // let animalImg = document.createElement('img');
    // animalImg.className = `${this.animalName}Object`;
    // let animalSection = document.getElementById(`#${this.animalName}Section`);
    // animalSection.appendChild(animalImg);
    let animalDiv = document.createElement('div');
    animalDiv.className = `${this.animalName}Object`;
    animalDiv.textContent =  this.animalName;
    let animalSection = document.querySelector(`#${this.animalName}Section`);
    animalSection.appendChild(animalDiv);

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
