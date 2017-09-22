$(document).ready(function(){
	$(document).foundation();


	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();


	// ------------------------------- Shop101 Begins ----------------------------------------------------------------


	//header parallax scene
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.background-parallax',
		triggerHook: 0,
		duration: '99%'
	})

	.setTween(TweenMax.from('.header-background', .4, {y: '-20%', ease:Power0.easeNone}))


	

	.addTo(controller);


	//browse parallax scene
	var browseBack = new ScrollMagic.Scene({
		triggerElement: '.shop101-1',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.browse-back', .4, {y: '-10%', ease:Power0.easeNone}))


	.addTo(controller);

	var browseMiddle = new ScrollMagic.Scene({
		triggerElement: '.shop101-1',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.browse-middle', .4, {y: '-20%', ease:Power0.easeNone}))


	.addTo(controller);


	var browseFront = new ScrollMagic.Scene({
		triggerElement: '.shop101-1',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.browse-front', .4, {y: '-30%', ease:Power0.easeNone}))


	.addTo(controller);




	//fav parallax scene
	var favBack = new ScrollMagic.Scene({
		triggerElement: '.shop101-2',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.fav-back', .4, {y: '-10%', ease:Power0.easeNone}))




	.addTo(controller);

	var favMiddle = new ScrollMagic.Scene({
		triggerElement: '.shop101-2',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.fav-middle', .4, {y: '-20%', ease:Power0.easeNone}))


	.addTo(controller);


	var favFront = new ScrollMagic.Scene({
		triggerElement: '.shop101-2',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.fav-front', .4, {y: '-30%', ease:Power0.easeNone}))


	.addTo(controller);


	//fav parallax scene
	var starBack = new ScrollMagic.Scene({
		triggerElement: '.shop101-3',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.store-back', .4, {y: '-10%', ease:Power0.easeNone}))




	.addTo(controller);

	var storeMiddle = new ScrollMagic.Scene({
		triggerElement: '.shop101-3',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.store-middle', .4, {y: '-20%', ease:Power0.easeNone}))


	.addTo(controller);


	var storeFront = new ScrollMagic.Scene({
		triggerElement: '.shop101-3',
		triggerHook: 5,
		duration: '100%'
	})

	.setTween(TweenMax.from('.store-front', .4, {y: '-30%', ease:Power0.easeNone}))


	.addTo(controller);


	// ------------------------------- Shop101 Ends ----------------------------------------------------------------



	// ------------------------------- Splitwise Begins ----------------------------------------------------------------

	//Move hero title
	var  heroText = new ScrollMagic.Scene({
		triggerElement: '.hero-splitwise',
		triggerHook: 0.7,
		duration: '140%'
	})



	.setTween(TweenMax.from('.moveHero', .6, {y: '-300px', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//Fade in hero phone
	var FadePhoneScene = new ScrollMagic.Scene({
		triggerElement: '.hero-splitwise',
		triggerHook: 0
	})
	.setClassToggle('.hero-phone', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Show phone',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);



	//Move About title
	var  aboutText = new ScrollMagic.Scene({
		triggerElement: '.about-splitwise',
		triggerHook: 0.7,
		duration: '140%'
	})



	.setTween(TweenMax.from('.move-about', .6, {y: '-300px', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);


	//Move User flow title
	var  UserFlowText = new ScrollMagic.Scene({
		triggerElement: '.existing-flow',
		triggerHook: 0.7,
		duration: '140%'
	})



	.setTween(TweenMax.from('.move-user-flow', .6, {y: '-300px', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);




	//Show flow1-1i
	var flow1a = new ScrollMagic.Scene({
		triggerElement: '.flow-card-trigger-slow',
		triggerHook: 0.4
	})
	.setClassToggle('.flow1-1i', 'show') // add class to project01

	// .addIndicators({
	// 	name: 'Show flow1-1i',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//Show flow1-1i-card
	var flow1b = new ScrollMagic.Scene({
		triggerElement: '.flow-card-trigger-slow',
		triggerHook: 0.2
	})
	.setClassToggle('.flow1-1i-card', 'show') // add class to project01

	// .addIndicators({
	// 	name: 'Show flow1-1i-card',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//Show flow1-2i
	var flow1c = new ScrollMagic.Scene({
		triggerElement: '.flow-card-trigger',
		triggerHook: 0.2
	})
	.setClassToggle('.flow1-2i', 'show') // add class to project01

	// .addIndicators({
	// 	name: 'Show phone',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//Show flow1-2i-card
	var flow1d = new ScrollMagic.Scene({
		triggerElement: '.flow-card-trigger',
		triggerHook: 0.4
	})
	.setClassToggle('.flow1-2i-card', 'show') // add class to project01

	// .addIndicators({
	// 	name: 'Show phone',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);



	//Show flow3-1i
	var flow1c = new ScrollMagic.Scene({
		triggerElement: '.flow-card-trigger-2',
		triggerHook: 0.2
	})
	.setClassToggle('.flow3-1i', 'show') // add class to project01

	// .addIndicators({
	// 	name: 'Show phone',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//Show flow3-1i-card
	var flow1d = new ScrollMagic.Scene({
		triggerElement: '.flow-card-trigger-2',
		triggerHook: 0
	})
	.setClassToggle('.flow3-1i-card', 'show') // add class to project01

	// .addIndicators({
	// 	name: 'Show phone',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);




	//Move persona title
	var  UserFlowText = new ScrollMagic.Scene({
		triggerElement: '.splitwise-user',
		triggerHook: 0.7,
		duration: '140%'
	})



	.setTween(TweenMax.from('.move-persona', .6, {y: '-300px', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);




	//Fade in grocery hand
	var FadePhoneScene = new ScrollMagic.Scene({
		triggerElement: '.grocery-trigger',
		triggerHook: 0.5
	})
	.setClassToggle('.grocery', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Show phone',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);


	//Move wireframe title
	var  UserFlowText = new ScrollMagic.Scene({
		triggerElement: '.splitwise-wireframes',
		triggerHook: 0.7,
		duration: '140%'
	})



	.setTween(TweenMax.from('.move-wireframes', .6, {y: '-300px', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);


	//Move visual design
	var  UserFlowText = new ScrollMagic.Scene({
		triggerElement: '.splitwise-visual',
		triggerHook: 0.7,
		duration: '140%'
	})



	.setTween(TweenMax.from('.move-visual', .6, {y: '-300px', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

})
