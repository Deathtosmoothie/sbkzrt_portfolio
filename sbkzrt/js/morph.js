$(window).on('load', function(){ 


// Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();
	
	//LEFT EAR - LEAFT FINGER
	var $ear = $('#svg_1').contents().find('#ear')[0];
	var $ear_l1 = $('#svg_1').contents().find('#ear_l1')[0];
	var $ear_l2 = $('#svg_1').contents().find('#ear_l2')[0];
	var $ear_l3 = $('#svg_1').contents().find('#ear_l3')[0];
	var $ear_l4 = $('#svg_1').contents().find('#ear_l4')[0];
	var $ear_l5 = $('#svg_1').contents().find('#ear_l5')[0];
	var $ear_l6 = $('#svg_1').contents().find('#ear_l6')[0];
	var $ear_l7 = $('#svg_1').contents().find('#ear_l7')[0];
//	var $target2 = $('#svg_1').contents().find('.fill_1')[0];
	
	var $morph0 = $('#svg_2').contents().find('#finger_1')[0];
	var $morph1 = $('#svg_2').contents().find('#finger_l1')[0];
	var $morph2 = $('#svg_2').contents().find('#finger_l2')[0];
	var $morph3 = $('#svg_2').contents().find('#finger_l3')[0];
	var $morph4 = $('#svg_2').contents().find('#finger_l4')[0];
	var $morph5 = $('#svg_2').contents().find('#finger_l5')[0];
	var $morph6 = $('#svg_2').contents().find('#finger_l6')[0];
	var $morph7 = $('#svg_2').contents().find('#finger_l7')[0];
	var $morph8 = $('#svg_2').contents().find('#finger_l8')[0];

	
	//RIGHT EAR - RIGHT FINGER
	var $ear_r1 = $('#svg_1').contents().find('#ear_r1')[0];
	var $ear_r2 = $('#svg_1').contents().find('#ear_r2')[0];
	var $ear_r3 = $('#svg_1').contents().find('#ear_r3')[0];
	var $ear_r4 = $('#svg_1').contents().find('#ear_r4')[0];
	var $ear_r5 = $('#svg_1').contents().find('#ear_r5')[0];
	var $ear_r6 = $('#svg_1').contents().find('#ear_r6')[0];
	
	
	
	left_ear = [$ear,$ear_l1,$ear_l2,$ear_l3,$ear_l4,$ear_l5,$ear_l6,$ear_l7];
	right_ear = [$ear_r1,$ear_r2,$ear_r3,$ear_r4,$ear_r5,$ear_r6];
	
	
	 var tween = new TimelineMax()
    .to(left_ear, 1, {morphSVG:$morph0});


  
  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: 'main',
    offset: 550, /* offset the trigger offset below #scene's top */
    duration: 2200
  })
  .setTween(tween)
  .addTo(scrollMagicController);

	console.log(scene)
	
	});