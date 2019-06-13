$(window).on('load', function(){ 


// Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();
	
	//LEFT EAR - LEFT FINGER
	left_ear = []
	for(i=0;i<8;i++) {
		left_ear.push($('#svg_1').contents().find('#ear_l' + [i])[0]);
	}
	
	
	left_finger = []
	for(i=0;i<8;i++) {
		left_finger.push($('#svg_2').contents().find('#finger_l' + [i])[0]);
	}
	
	
	//NOSE BLACK - NOSE WHITE
	var $nose_black = $('#svg_1').contents().find('#nose_black')[0];
	var $nose_white = $('#svg_2').contents().find('#nose_white')[0];
	
	//additional paths
	left_ear.push($('#svg_1').contents().find('#nose_black')[0]);
	left_finger.push($('#svg_1').contents().find('#nose_white')[0]);
	
	console.log(left_ear[8]);
	
	//RIGHT EAR - RIGHT FINGER
	right_ear = []
	for(i=1;i<8;i++) {
		right_ear.push($('#svg_1').contents().find('#ear_r' + [i])[0]);
	}
	
	
//	right_ear = [$ear_r1,$ear_r2,$ear_r3,$ear_r4,$ear_r5,$ear_r6];
	
	for(i=0; i < 7 ;i++) {
		var tween = new TimelineMax()
    	.to(left_ear[i], 1, {morphSVG:left_finger[i]})
		.to($nose_black,1,{morphSVG:$nose_white,fill:"#fff"});
	
	 


 
  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: 'main',
    offset: 550, /* offset the trigger offset below #scene's top */
    duration: 2200
  })
  .setTween(tween)
  .addTo(scrollMagicController);

	}
	});