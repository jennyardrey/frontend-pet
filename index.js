const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGRY = 'I am hungry';
const UNFIT = 'I need a walk';
const HUNGRY_UNFIT = 'I am hungry AND I need a walk';
const ALL_FINE = 'I feel great!';
const DEAD_PETS = 'Your pet is DEAD!';

function Pet (name) {
	this.name = name
	this.age = 0;
	this.hunger = 0;
	this.fitness = MAXIMUM_FITNESS;
	this.children = [];
	
	Pet.prototype.growUp = function() {
		this.age += 1;
		this.hunger += 5;
		this.fitness -= 3;
	};
	Pet.prototype.walk = function() {
		if (this.fitness + 4 <= MAXIMUM_FITNESS) {
			this.fitness += 4;
		} else { this.fitness = MAXIMUM_FITNESS; }
	};
	Pet.prototype.feed = function() {
		if (this.hunger - 3 > MINIMUM_HUNGER) {
			this.hunger -= 3;
		} else { this.hunger = MINIMUM_HUNGER; }
	};
	Pet.prototype = {
		get isAlive() {
			return this.age < 30 && this.hunger < 10 && this.fitness > 0;
		}
		
	}
}

let name
const newPet = new Pet(name = prompt("What shall we name your pet?", "name"));
let status = `${newPet.name} is ${newPet.age} years old and has a hunger level of ${newPet.hunger} and a fitness level of ${newPet.fitness}!`;

function namePet(){ 
	if (newPet.name === null){
		prompt("Your pet needs a name, i'm afraid", "NAME IT")
	} else {
	document.getElementById('petName').innerHTML = `Your pet is named ${newPet.name} and is ${newPet.age} years old!`;
} 
}
function checkName() {
	if (newPet.name === null){
		confirm("Your pet needs a name, i'm afraid", "NAME IT");
		window.location.reload();
}
}
function buttonAppear() {
	
	document.getElementById('feedbutton').style.visibility = "visible";
	document.getElementById('walkbutton').style.visibility = "visible";
	document.getElementById('growbutton').style.visibility = "visible";
	document.getElementById('birthbutton').style.visibility = "hidden";
	document.getElementById('instructions').innerHTML = `Click a button to grow, feed or walk ${newPet.name}, but be careful you don't murder them!`
	
}
function petWalkies() {
	newPet.walk();
	
	const update = `${newPet.name} is ${newPet.age} years old and has a hunger level of ${newPet.hunger} and a fitness level of ${newPet.fitness}!`;
	document.getElementById('petName').innerHTML = update; 
}
function petFeed() {
	newPet.feed();
	document.getElementById('petName').innerHTML = `${newPet.name} is ${newPet.age} years old and has a hunger level of ${newPet.hunger} and a fitness level of ${newPet.fitness}!`;
}

function petGrow() {
	newPet.growUp();
	document.getElementById('petName').innerHTML = `${newPet.name} is ${newPet.age} years old and has a hunger level of ${newPet.hunger} and a fitness level of ${newPet.fitness}!`;
	
}

function checkPet() {
	if (newPet.age > 30 || newPet.hunger > 10 || newPet.fitness < 0) {
		confirm(`You have killed ${newPet.name}! How could you! After all you've been through!`);
		window.location.reload();
	}
}

// document.getElementById('dead').innerHTML = `You have killed ${newPet.name}! How could you! After all you've been through!`;