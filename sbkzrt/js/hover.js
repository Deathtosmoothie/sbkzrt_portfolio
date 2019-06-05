$(function() {

var tlHover = new TimelineLite({paused: true});
	tlHover.staggerFrom(".st0", 0.03, {drawSVG:0,ease:Linear.easeNone}, 0.1)
	.staggerFrom(".st1", 0.03, {drawSVG:0,ease:Linear.easeNone}, 0.1)
	.staggerFrom(".st2", 0.03, {drawSVG:0,ease:Linear.easeNone}, 0.1)
	.staggerFrom(".st3", 0.03, {drawSVG:0,ease:Linear.easeNone}, 0.1);
	
  $('#paintings').hover(
	  function(){
		  tlHover.play()
		  
		  console.log('on hover');

  },
	  function(){
		  tlHover.reverse();
//		  tlHover.staggerTo("#third2", 2, {drawSVG:0}, 0.1);
		  
		  console.log('off hover');
		  
	  });
	
	});
