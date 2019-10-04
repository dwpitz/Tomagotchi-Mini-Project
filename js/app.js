//Tomagatchi Class
class Tomagatchi {
	constructor(name){
		this.age = 0;
		this.hunger =  Math.floor(Math.random()*7);
		this.boredom = Math.floor(Math.random()*7);
		this.sleepiness = Math.floor(Math.random()*7);
		this.name = name
	}
};

//The Gameplay Object
const lifeCycle = {
	time: 0,
	pet: null, 
	giveBirth: function(name){
		const jack = new Tomagatchi(name);
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
			if(this.time % 10 === 0){
				this.pet.age++
			} else if (this.time % 3 === 0){
				this.pet.hunger++
			} else if (this.time % 5 === 0){
				this.pet.sleepiness++
			} else if (this.time % 4 === 0){
				this.pet.boredom++
			};

			if(this.time <= 10){
				$("#happy").attr("src","images/baby_jack.jpg");
			} else if (this.time >= 10 && this.time <= 20){
				$("#happy").attr("src","images/Early_White_Stripes.jpg");
			} else if (this.time >= 20 && this.time <= 30){
				$("#happy").attr("src","images/jack_solo.jpg");
			}else if (this.time >= 30 && this.time <= 40){
				$("#happy").attr("src","images/happy_jack_golden_years.jpg");
			};

			if(this.pet.hunger >= 10 || this.pet.sleepiness >= 10 || this.pet.boredom >= 10){
				const $wobble = $('img');
				$wobble.css("animationIterationCount","0");
				clearInterval(tomagatchiTime);
				$("#happy").attr("src","images/dead_jack.jpg");	
			};
			this.printStats()
		}, 1000);
	},

	feedJack(){
		lifeCycle.pet.hunger--
		lifeCycle.printStats()
	},

	turnOutTheLights(){
		lifeCycle.pet.sleepiness--
		const $switch = $('body');
		console.log($switch);
		$switch.css("backgroundColor","black")
		lifeCycle.pet.sleepiness--;
		lifeCycle.printStats()
		this.printStats()
	},

	turnOnTheLights(){
		const $switch = $('body');
		$switch.css("backgroundColor","white");
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