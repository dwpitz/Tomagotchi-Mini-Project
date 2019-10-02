//	if somethign is not a property of the tomagatchi it does not go in the tomagatchi class
//Tomagatchi Class
class Tomagatchi {
	constructor(name){
		this.age = 0;
		this.hunger =  1;
		this.boredom = 1;
		this.sleepiness = 1;
		this.name = name
	}
};

//Game Play Object
//This should be the insantiation.  It should take the name and create the object.
const lifeCycle = {

	pet: null, 

	giveBirth: function(name){
		const jack = new Tomagatchi(name);
		console.log(jack);
		this.pet = jack;

		this.startTimer()

	}, 

	startTimer() {

	}



} 
		// //Jack Is Seen On The Screen
		// // const $img = $('<img id="https://ewscripps.brightspotcdn.com/dims4/default/bb87e62/2147483647/strip/true/crop/1024x576+0+54/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F5b%2F65%2F389afca34a1dbc62ff618428e05d%2Fgettyimages-452924784.jpg"/>')
		// // $('main').prepend$('img')
		// //Buttons to take care of Jack are displayed
		// const $div = $('<div></div>').attr('id', 'the-ring')
  // // 2. add the ring as a child of Frodo
  // const $frodo = $(".hobbit").get(0)
  // $($frodo).append($div)
		
		
		//Rules Are Displayed.
		//name your pet.
	

	// setTimer(){
	// 	//This is should count up.
	// 	//1 year = 2 mins
	// },

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

  $('form').on('submit', (event) => {
  	event.preventDefault()
    console.log('clicked');  
    console.log( $('#input-box').val() );
    const name = $('#input-box').val();
    lifeCycle.giveBirth(name)

  });


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



