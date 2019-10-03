//	if somethign is not a property of the tomagatchi it does not go in the tomagatchi class
//Tomagatchi Class
class Tomagatchi {
	constructor(name){
		this.age = 0;
		this.hunger =  Math.floor(Math.random()*9);
		this.boredom = Math.floor(Math.random()*9);
		this.sleepiness = Math.floor(Math.random()*9);
		this.name = name
	}
};

//Game Play Object
//This should be the insantiation.  It should take the name and create the object.
const lifeCycle = {
	time: 0,
	pet: null, 
	giveBirth: function(name){
		const jack = new Tomagatchi(name);
		console.log(jack);
		this.pet = jack;
		this.startTimer()
		this.printStats()
	},

	printStats: function(){
		const $name = $('#title')
		$name.text(`${this.pet.name}'s Vitals`)
		const $age = $('#age')
		$age.text(`AGE: ${this.pet.age}`)
		const $hunger = $('#hunger')
		$hunger.text(`HUNGER: ${this.pet.hunger}`)
		const $sleep = $('#sleep')
		$sleep.text(`SLEEP: ${this.pet.sleepiness}`)
		const $boredom = $('#boredom')
		$boredom.text(`BOREDOM: ${this.pet.boredom}`)
		const $timer = $('#timer');
		$timer.text(`TIMER: ${this.time}`)
	},

	startTimer() {
		const tomagatchiTime = setInterval(() => {
			this.time++ 
			if(this.time % 20 === 0){
				this.pet.age++
			} else if (this.time % 10 === 0){
				this.pet.hunger++
			} else if (this.time % 6 === 0){
				this.pet.sleepiness++
			} else if (this.time % 5 === 0){
				this.pet.boredom++
			};
			if(this.pet.hunger >= 10 || this.pet.sleepiness >= 10 || this.pet.boredom >= 10){
				alert(this.pet.name + " has died!")
				clearInterval(tomagatchiTime);
			}
			
			if(this.pet.hunger >= 7 || this.pet.sleepiness >= 7 || this.pet.boredom >= 7){
				$("#happy").attr("src","https://static.stereogum.com/uploads/2014/07/sad-jack-white-608x406.jpg");
			} else {
				$("#happy").attr("src","https://ewscripps.brightspotcdn.com/dims4/default/bb87e62/2147483647/strip/true/crop/1024x576+0+54/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F5b%2F65%2F389afca34a1dbc62ff618428e05d%2Fgettyimages-452924784.jpg");
			}
			this.printStats()
		}, 1000);
	}
}

//Listeners
$('form').on('submit', (event) => {
  	event.preventDefault()
    const name = $('#input-box').val();
    lifeCycle.giveBirth(name) 
}); 

$('#food').on('click', (event) => {
	lifeCycle.pet.hunger--
}); 

$('#light').on('click', (event) => {
	lifeCycle.pet.sleepiness = lifeCycle.pet.sleepiness - 2
});

$('#play').on('click', (event) => {
	lifeCycle.pet.boredom--
});