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
	
	
	//additional paths
//	first_scene.unshift($ear_blur);
//	second_scene.unshift($white_blur);
	first_scene.unshift($fill_1);
	second_scene.unshift($fill_2);
	
	console.log(first_scene.length,second_scene.length)

	
	//RIGHT EAR - RIGHT FINGER
	for(i=1;i<8;i++) {
		first_scene.push($('#svg_1').contents().find('#ear_r' + [i])[0]);
	}
	
	white_arr = []
	to_white_arr = []
	to_white_arr.push($nose_black,$pre_white_blur);
	white_arr.push($nose_white,$white_blur);

	console.log($pre_white_blur);
	
	for(i=0; i < 10;i++) {
		
		var tween = new TimelineMax()
    	.to(first_scene[i], 1, {morphSVG:second_scene[i]})
		.to(to_white_arr[i],1,{morphSVG:white_arr[i],fill:"#fff"});
//		.to($pre_white_blur,3,{morphSVG:$white_blur,fill:"#fff"});
		
	
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