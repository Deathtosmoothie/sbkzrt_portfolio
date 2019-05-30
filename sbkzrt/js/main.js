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
        }, 500 // скорость прокрутки
        );
    }
    return false;
});

//$('.nav-link').click(function(event) {
//    event.preventDefault();
//    var targetOffset = $('.item_h').offset().top;
//    $("html, body").animate({
//        scrollTop: targetOffset + "px"
//    },1000);
//});