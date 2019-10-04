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
		const $wobble = $('img');
		$wobble.css("animationIterationCount","infinite");
		this.printStats()
	},

	printStats: function(){ console.log("pprintstats")
		const $name = $('#title')
		$name.text(`${this.pet.name}'s Vitals:`)
		const $age = $('#age')
		$age.text(`Age: ${this.pet.age}`)
		const $hunger = $('#hunger')
		$hunger.text(`Hunger: ${this.pet.hunger}`)
		const $sleep = $('#sleep')
		$sleep.text(`Sleep: ${this.pet.sleepiness}`)
		const $boredom = $('#boredom')
		$boredom.text(`Boredom: ${this.pet.boredom}`)
		const $timer = $('#timer');
		$timer.text(`Timer: ${this.time}`)
	},

	startTimer() {
		const tomagatchiTime = setInterval(() => {
			this.time++ 
			if(this.time % 20 === 0){
				this.pet.age++
			} else if (this.time % 8 === 0){
				this.pet.hunger++
			} else if (this.time % 10 === 0){
				this.pet.sleepiness++
			} else if (this.time % 5 === 0){
				this.pet.boredom++
			};

			if(this.pet.hunger >= 7 || this.pet.sleepiness >= 7 || this.pet.boredom >= 7){
				$("#happy").attr("src","images/sad_jack.jpg");
			} else {
				$("#happy").attr("src","images/happy_jack.jpg");
			};

			if(this.pet.hunger >= 10 || this.pet.sleepiness >= 10 || this.pet.boredom >= 10){
				const $wobble = $('img');
				$wobble.css("animationIterationCount","0");
				clearInterval(tomagatchiTime);
				$("#happy").attr("src","images/dead.jpg");	
			}
			this.printStats()
		}, 1000);
	},

	feedJack(){
		lifeCycle.pet.hunger--
		lifeCycle.printStats()
		// $("#happy").attr("src","images/jack_drinks.jpg");
	},

	turnOutTheLights(){
		lifeCycle.pet.sleepiness--
		// $("#happy").attr("src","images/sleepy_jack.jpg");
		const $switch = $('body');
		console.log($switch);
		$switch.css("backgroundColor","dimGray ")
		lifeCycle.pet.sleepiness--;
		lifeCycle.printStats()
		this.printStats()
	},

	turnOnTheLights(){
		const $switch = $('body');
		$switch.css("backgroundColor","white");
		// $("#happy").attr("src","images/happy_jack.jpg");
		this.printStats()
	},

	playWithJack(){
		lifeCycle.pet.boredom--;
		lifeCycle.printStats()
	}
}

//Listeners
$('form').on('submit', (event) => {
  	event.preventDefault()
    const name = $('#input-box').val();
    lifeCycle.giveBirth(name) 
}); 

$('#food').on('click', (event) => {
	lifeCycle.feedJack()
}); 

$('#lightOff').on('click', (event) => {
	lifeCycle.turnOutTheLights()
});

$('#lightOn').on('click', (event) => {
	lifeCycle.turnOnTheLights()
});

$('#play').on('click', (event) => {
	lifeCycle.playWithJack()
});