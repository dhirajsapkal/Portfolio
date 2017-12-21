$(document).ready(function(){
	$(document).foundation();
	var video = document.getElementById('video'); 
	video.addEventListener('click',function(){ 
		video.play(); 
	},false);

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//header parallax scene
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.parallax-background',
		triggerHook: 1,
		duration: '160%'
	})

	.setTween(TweenMax.from('.discover-background', .4, {y: '-30%', ease:Power0.easeNone}))

	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 
	.addTo(controller);



	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//header parallax scene
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.define-parallax',
		triggerHook: 1,
		duration: '160%'
	})

	.setTween(TweenMax.from('.define-background', .4, {y: '-30%', ease:Power0.easeNone}))

	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 
	.addTo(controller);



	var bar1 = new ProgressBar.Circle(responses, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
	bar1.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar1.text.style.fontWeight = "700";
	bar1.text.style.fontSize = '24px';
	bar1.text.style.color= '#4BAEE0';

	






	var bar2 = new ProgressBar.Circle(friends, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + '%');
	    }

	  }
	});
	bar2.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar2.text.style.fontWeight = "700";
	bar2.text.style.fontSize = '24px';
	bar2.text.style.color= '#4BAEE0';

	







	var bar3 = new ProgressBar.Circle(purchase, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + '%');
	    }

	  }
	});
	bar3.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar3.text.style.fontWeight = "700";
	bar3.text.style.fontSize = '24px';
	bar3.text.style.color= '#4BAEE0';

	






	var bar4 = new ProgressBar.Circle(payback, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + '%');
	    }

	  }
	});
	bar4.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar4.text.style.fontWeight = "700";
	bar4.text.style.fontSize = '24px';
	bar4.text.style.color= '#4BAEE0';

	




	var bar5 = new ProgressBar.Circle(online, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + '%');
	    }

	  }
	});
	bar5.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar5.text.style.fontWeight = "700";
	bar5.text.style.fontSize = '24px';
	bar5.text.style.color= '#4BAEE0';

	



	var bar6 = new ProgressBar.Circle(cash, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + '%');
	    }

	  }
	});
	bar6.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar6.text.style.fontWeight = "700";
	bar6.text.style.fontSize = '24px';
	bar6.text.style.color= '#4BAEE0';

	bar6.animate(0.47);  // Number from 0.0 to 1.0



	var bar7 = new ProgressBar.Circle(ticketmaster, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + '%');
	    }

	  }
	});
	bar7.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar7.text.style.fontWeight = "700";
	bar7.text.style.fontSize = '24px';
	bar7.text.style.color= '#4BAEE0';

	



	var bar8 = new ProgressBar.Circle(buyer, {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 4,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#F6FBFD', width: 4 },
	  to: { color: '#4BAEE0', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + '%');
	    }

	  }
	});
	bar8.text.style.fontFamily = "'Source Sans Pro', sans-serif";
	bar8.text.style.fontWeight = "700";
	bar8.text.style.fontSize = '24px';
	bar8.text.style.color= '#4BAEE0';

	


	// Init ScrollMagic
	var controllerResults = new ScrollMagic.Controller();

	//header parallax scene
	var showresults = new ScrollMagic.Scene({
		triggerElement: '.results-card',
		triggerHook: 1,
		duration: '50%'
	})

	.on('start', function () {
    bar1.animate(0.6);  // Number from 0.0 to 1.0
    bar2.animate(0.7);  // Number from 0.0 to 1.0
    bar3.animate(0.78);  // Number from 0.0 to 1.0
    bar4.animate(0.47);  // Number from 0.0 to 1.0
    bar5.animate(0.53);  // Number from 0.0 to 1.0
    bar6.animate(0.47);  // Number from 0.0 to 1.0
    bar7.animate(0.83);  // Number from 0.0 to 1.0
    bar8.animate(0.54);  // Number from 0.0 to 1.0
  })

	// .setTween(TweenMax.from('.results-card', .4, {y: '-30%', ease:Power0.easeNone}))
	// .setTween(TweenMax.from( '.results-card', .5,{css:{scale:.05, opacity:0, rotation: 180}, ease:Quad.easeInOut}), 400,-400)

	// .setClassToggle('.results-card', 'fade-in') // add class to project01

	// .addIndicators({
	// 	name: 'move hero title',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) 
	.addTo(controllerResults);


	//Fade in hero phone
	var FadeCard = new ScrollMagic.Scene({
		triggerElement: '.user-survey',
		triggerHook: 0
	})
	.setClassToggle('.results-card', 'fade-in') // add class to project01

	.addIndicators({
		name: 'Show phone',
		colorTrigger: 'black',
		colorStart: '#75C695',
		colorEnd: 'pink'
	}) 

	.addTo(controller);




	/*
   * Replace all SVG images with inline SVG
  */
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });







})
