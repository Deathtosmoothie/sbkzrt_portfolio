// When the DOM is ready
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller(),
  circle = document.getElementById("circle");
  // Create Animation for 0.5s
  var tween = TweenLite.to(circle, 1, {morphSVG:"#hippo"})
  

  
  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#scene',
    offset: 350 /* offset the trigger offset below #scene's top */
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
});

// When the DOM is ready
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController2 = new ScrollMagic.Controller(),
  hippo = document.getElementById("hippo");
  // Create Animation for 0.5s
  var tween2 = TweenLite.to(hippo, 1, {morphSVG:"#third"})
  

  
  // Create the Scene and trigger when visible
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#scene2',
    offset: 2000 /* offset the trigger offset below #scene's top */
  })
  .setTween(tween2)
  .addTo(scrollMagicController2);
  
  // Add debug indicators fixed on right side
   scene2.addIndicators();
  
});