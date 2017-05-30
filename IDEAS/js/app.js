
$(document).ready(function(){
	$(document).foundation();

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//Move About
	var  aboutText = new ScrollMagic.Scene({
		triggerElement: '.about',
		triggerHook: 0.7,
		duration: '130%'
	})



	.setTween(TweenMax.from('.moveAbout', .6, {y: '100px', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'fade',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//Move Programs
	var movePrograms = new ScrollMagic.Scene({
		triggerElement: '.programs',
		triggerHook: 0.7,
		duration: '130%'
	})

	.setTween(TweenMax.from('.movePrograms', .6, {y: '100px', ease:Power0.easeNone}))

	// .addIndicators({
	// 	name: 'fade',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//Move Work
	var movePrograms = new ScrollMagic.Scene({
		triggerElement: '.work',
		triggerHook: 0.7,
		duration: '130%'
	})

	.setTween(TweenMax.from('.moveWork', .6, {y: '100px', ease:Power0.easeNone}))

	// .addIndicators({
	// 	name: 'fade',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);








	//about image scene
	var about_image_parallax = new ScrollMagic.Scene({
		triggerElement: '.section',
		triggerHook: 1,
		duration: '200%'
	})

	.setTween(TweenMax.from('.about-background', .4, {y: '-40%', ease:Power0.easeNone}))

	.addTo(controller);


	//project image scene
	var about_image_parallax = new ScrollMagic.Scene({
		triggerElement: '.section',
		triggerHook: 1,
		duration: '200%'
	})

	.setTween(TweenMax.from('.project-background', .4, {y: '-28%', ease:Power0.easeNone}))

	.addTo(controller);





	//header parallax scene
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.background-parallax',
		triggerHook: 0,
		duration: '99%'
	})

	.setTween(TweenMax.from('.header-background', .4, {y: '-20%', ease:Power0.easeNone}))


	// .addIndicators({
	// 	name: 'Background-parallax',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);





	//Move spring program cards

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.spring',
		triggerHook: 0.99
	})
	.setClassToggle('.spring', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Background-parallax',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

		//Move fall program cards

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.fall',
		triggerHook: 0.99
	})
	.setClassToggle('.fall', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Background-parallax',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);


	//Move work projects

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.projects',
		triggerHook: 0.8
	})
	.setClassToggle('.projects', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Background-parallax',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//move full image 1
		//Move footer
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.full-image-1',
		triggerHook: 0.99
	})
	.setClassToggle('.full-image-1', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Background-parallax',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

	//move full image 2
		//Move footer
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.full-image-2',
		triggerHook: 0.99
	})
	.setClassToggle('.full-image-2', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Background-parallax',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);


	//Move footer
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.footer',
		triggerHook: 0.99
	})
	.setClassToggle('.footer', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'Background-parallax',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 

	.addTo(controller);

})



