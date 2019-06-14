$(window).on('load', function(){ 


// Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();
	
	first_scene = []
	second_scene = []
	
	//LEFT EAR - LEFT FINGER
	for(i=0;i<11;i++) {
		first_scene.push($('#svg_1').contents().find('#ear_l' + [i])[0]);
	}
	
	
	for(i=0;i<9;i++) {
		second_scene.push($('#svg_2').contents().find('#finger_l' + [i])[0]);
	}
	
	
	//NOSE BLACK - NOSE WHITE
	var $nose_black = $('#svg_1').contents().find('#nose_black')[0];
	var $nose_white = $('#svg_2').contents().find('#nose_white')[0];
	
	var $fill_1 = $('#svg_1').contents().find('#fill_1')[0];
	var $fill_2 = $('#svg_2').contents().find('#fill_2')[0];
	
	var $ear_blur = $('#svg_1').contents().find('#ear_blur')[0];
	var $white_blur = $('#svg_2').contents().find('#white_blur')[0];
	var $pre_white_blur = $('#svg_1').contents().find('#pre_white_blur')[0];
	
	
	//ADDITIONAL PATHS
	first_scene.unshift($nose_black,$pre_white_blur,$fill_1);
	second_scene.unshift($nose_white,$white_blur,$fill_2);
	
	console.log(first_scene.length,second_scene.length)


	
	//RIGHT EAR - RIGHT FINGER
	for(i=1;i<8;i++) {
		first_scene.push($('#svg_1').contents().find('#ear_r' + [i])[0]);
	}
	

	
	for(i=0; i < 12;i++) {
		
		var morph_obj = {morphSVG:second_scene[i]};
		
		if(i<2) {
			morph_obj = {morphSVG:second_scene[i],fill:"#FFF"};
		}
		
		var tween = new TimelineMax()
    	.to(first_scene[i], 1, morph_obj);
		console.log(i);
	
  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: 'main',
    offset: 550, /* offset the trigger offset below #scene's top */
    duration: 2200,
	  reverse:true
  })
  .setTween(tween)
  .addTo(scrollMagicController);

	}
	});