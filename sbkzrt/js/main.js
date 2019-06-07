$(function() {
/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$('.nav-link').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top - 80 // прокручиваем страницу к требуемому элементу
        }, 1200 // скорость прокрутки
        );
    }
    return false;
});


/*MORPH START*/	
	
$(window).on('load', function(){ 

//var $test = $('#svg_1').contents().find('path').attr('d');
//console.log($test);
//	



	

	
// Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();
	var $target = $('#svg_1').contents().find('#ear')[0];
	var $morph = $('#svg_2').contents().find('#finger_1')[0];
//	console.log($target);
//	console.log($morph);
	
	 var tween = new TimelineMax()
    .to($target, 1, {morphSVG:$morph});
  // Create Animation for 0.5s
//	var $st0 = $('#svg1 .st0')
//	var $st1 = $('#svg1 .st1')
//	var $st2 = $('#svg1 .st2')
//	var $st3 = $('#svg1 .st3')
//	var $st4 = $('#svg1 .st4')
//	var $st5 = $('#svg1 .st5')
//	var $st6 = $('#svg1 .st6')
//	var $st7 = $('#svg1 .st7')
//	var $st8 = $('#svg1 .st8')
//	var $st9 = $('#svg1 .st9')
//	var $st10 = $('#svg1 .st10')
//	var $st11 = $('#svg1 .st11')
//	var $st12 = $('#svg1 .st12')
//	var $st13 = $('#svg1 .st13')
//	
//	var $st0_2 = $('#svg2 .st0')
//	var $st1_2 = $('#svg2 .st1')
//	var $st2_2 = $('#svg2 .st2')
//	var $st3_2 = $('#svg2 .st3')
//	var $st4_2 = $('#svg2 .st4')
//	var $st5_2 = $('#svg2 .st5')
//	var $st6_2 = $('#svg2 .st6')
//	var $st7_2 = $('#svg2 .st7')
//	var $st8_2 = $('#svg2 .st8')
//	var $st9_2 = $('#svg2 .st9')
//	var $st10_2 = $('#svg2 .st10')
//	var $st11_2 = $('#svg2 .st11')
//	var $st12_2 = $('#svg2 .st12')
//	var $st13_2 = $('#svg2 .st13')
//  var tween = new TimelineMax()
//    .to([$st0,$st1,$st2,$st3,$st4,$st5,$st6,$st7,$st8,$st9,$st10,$st11,$st12,$st13], 1, {morphSVG:[$st0_2,$st1_2,$st2_2,$st3_2,$st4_2,$st5_2,$st6_2,$st7_2,$st8_2,$st9_2,$st10_2,$st11_2,$st12_2,$st13_2]})
	
	
  
//    .to(circle, 1, {morphSVG:".svg_2"});
  
//  var tween = TweenLite.to(circle, 1, {morphSVG:"#hippo"})


  
  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: 'main',
    offset: 350, /* offset the trigger offset below #scene's top */
    duration: 2200
  })
  .setTween(tween)
  .addTo(scrollMagicController);

	console.log(scene)
	
	});
});
