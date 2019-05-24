// When the DOM is ready
$(function() {
  
   
//   TweenMax.staggerFrom("#third2", 1, {drawSVG: 0, repeat:-1, ease:Linear.easeNone}, 3);
//	TweenMax.staggerFrom("#third2", 2, {drawSVG:0}, 0.1)
//	TweenLite.to("#third2",1,{drawSVG:0,delay:0.5});
	
  var tlHover = new TimelineLite({paused: true});
	tlHover.staggerFrom("#third2", 2, {drawSVG:0,ease:Linear.easeNone}, 0.1);
	
  $('#circle').hover(
	  function(){
		  tlHover.play()
		  
		  console.log('on hover');

  },
	  function(){
		  tlHover.reverse();
//		  tlHover.staggerTo("#third2", 2, {drawSVG:0}, 0.1);
		  
		  console.log('off hover');
		  
	  });
	
	
	
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller(),
  circle = document.getElementById("circle");
  // Create Animation for 0.5s
  var tween = new TimelineMax()
    .to(circle, 1, {morphSVG:"#hippo"})
    
    .to(circle, 1, {morphSVG:"#third"});
//  var tween = TweenLite.to(circle, 1, {morphSVG:"#hippo"})


  
  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#scene',
    offset: 350, /* offset the trigger offset below #scene's top */
    duration: 2200
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  
  // Add debug indicators fixed on right side
//   scene.addIndicators();
  
});
