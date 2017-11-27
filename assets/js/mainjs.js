$( document ).ready(function() {


// jQuery Function Number 1

$('.menu-button').click(function() {
	// jQuery Function Number 2
	if($('#sidebar').css('left') == '-240px'){
		$('#sidebar').css('left','0px');
		$('#main-page-container').css('left','240px');
	}
	else if($('#sidebar').css('left') == '0px'){
		$('#sidebar').css('left','-240px');
		$('#main-page-container').css('left','0px');
	}
})

// jQuery Function Number 3

$('#logo').click(function(){
	$('html, body').animate({scrollTop: '0px'}, 800);
})

// jQuery Function Number 4

$('#title-container').delay(500).fadeIn(1000);


// jQuery Function Number 5

$(".menu-button").hover(function(){
    $(this).css("box-shadow", "0 0 5px white");
    }, function(){
    $(this).css("box-shadow", "");
});

// jQuery Function Number 6

$(window).scroll(function (event) {
    if ($(window).scrollTop() > 200){
    	$('#downarrow').fadeOut(200);
    } else {
    	$('#downarrow').fadeIn(200);
    };
});


});