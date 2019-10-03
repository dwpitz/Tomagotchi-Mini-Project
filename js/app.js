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

// for(let i = 0; i < 3; i++){
//       const random = Math.floor(Math.random()*theDeck.length);
//       const drawnCard = theDeck.splice(random, 1)[0];


//Game Play Object
//This should be the insantiation.  It should take the name and create the object.
const lifeCycle = {
	time: 0,
	// hunger: function(){
	// 	const $hunger = $('#hunger')
	// 	const $level = 	
	// }
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

	//Maybe show jack here?
	startTimer() {
		const tomagatchiTime = setInterval(() => {
			this.time++ 
			if(this.time % 10 === 0){
				this.pet.age++
				// console.log(this.pet.age)
			} else if (this.time % 5 === 0){
				this.pet.hunger++
				// console.log(this.pet.hunger)
			} else if (this.time % 3 === 0){
				this.pet.sleepiness++
				// console.log(this.pet.sleepiness)
			} else if (this.time % 2 === 0){
				this.pet.boredom++
				// console.log(this.pet.boredome)
			};
			if(this.pet.hunger >= 10 || this.pet.sleepiness >= 10 || this.pet.boredom >= 10){
				alert(this.pet.name + " has died!")
				clearInterval();
			}
			this.printStats()
		}, 1000);



	}
}


//Create an Input to name the pet.
$('form').on('submit', (event) => {
  	event.preventDefault()
    console.log('clicked');  
    // console.log( $('#input-box').val() );
    const name = $('#input-box').val();
    lifeCycle.giveBirth(name) 
}); 
		// //Jack Is Seen On The Screen
		// // const $img = $('<img id="https://ewscripps.brightspotcdn.com/dims4/default/bb87e62/2147483647/strip/true/crop/1024x576+0+54/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F5b%2F65%2F389afca34a1dbc62ff618428e05d%2Fgettyimages-452924784.jpg"/>')
		// // $('main').prepend$('img')
		// //Buttons to take care of Jack are displayed
		// const $div = $('<div></div>').attr('id', 'the-ring')
  // // 2. add the ring as a child of Frodo
  // const $frodo = $(".hobbit").get(0)
  // $($frodo).append($div)
		
		
		//Rules Are Displayed.
		
	

	// age(){

	// },

	// hunger(){

	// },

	// sleepiness(){

	// },

	// boredom(){

	// },

	// death(){

	// }


//Listeners Object
  // $('form').on('submit', () => {
  //   console.log('clicked');  
  //   console.log( $('#input-box').val() );
  //   const name = $('#input-box').val()
  // });




// 	start(){
// 		const jack = new Tomagatchi() 
// 	},
	//setInterval() <== How does this timer work.  Is it counting down?  Counting up?  
//}

// $().on('click', () => {
// 	//listeners can be in the global scope
// }
// )

//timer method - only one interval in the game.  DO NOT have more than one timer.
// const game = {

//Rules:
//When hunger hits 5, you have to feed it.  
//When sleepiness hits 5, you have to turn out the lights
//When Boredom hits 5, you have to play with it.  
//If Hunger hits 10 || Sleepiness hits 10 || Boredom hits 10 <===Tomagatchi dies
//When age hits

//The Timer:
//Age = 1 year every 30 secs.
//hunger = Hungry every 5 secs.
//sleepiness = sleepy every 15 secs.
//Boredom = every 10 secs



