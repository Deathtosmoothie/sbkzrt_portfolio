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
    offset: 350 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
});