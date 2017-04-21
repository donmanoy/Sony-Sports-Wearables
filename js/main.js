$(window).load(function() {	
	$('html, body').animate({"opacity": 1}, 1000);
});

var product_slider;
var athlete_review;
/*Animated content*/

/*
$(function(){
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  
  $(window).scroll(function(){
    animate_elems();
  });
  
  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window
 
    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);
      
      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
      
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
      if(wintop > (topcoords - (winheight*.75))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animated');
      }
    });
  } // end animate_elems()
});
*/


/* Animation on scroll Scrollreveal */
var fooReveal = {
  easing   : 'ease'
};

window.sr = ScrollReveal();
sr.reveal('.animateblock', fooReveal);
sr.reveal('.animateblock', 150);

/* end animation */


$(document).ready(function(){ 

// Close popup content
$(".close_popup").click(function(){	
	$(".content").fadeOut();
});
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
 

//$(".internal_link a, footer a[href='#top']").on('click', function(event) {
$(".internal_link a, footer a[href='#top']").on('click', function(event) {
    event.preventDefault();
    // Store hash
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top -80
    }, 900, function(){

		window.location.hash = hash;
    });
  }); 

	$(".btn_goto_top").click(function(){
		$('html, body').animate({scrollTop: 0}, 800);
	});
  
  	$('.test').click(function(){        
        var id = this.id.slice(-1);
        $('.content').fadeOut(200);
      //  $('#content-'+id).fadeIn(800);
	    $('#content-'+id).toggle( "slide" );
        
        $(".start_running_menu").removeClass("selected");
        $(this).find(".start_running_menu").addClass("selected");
    });
	
	$('.close_expand').click(function(){
		$('.content').fadeOut(200);
	});

/* Start Swimming expand*/
$(".start_running_menu").click(function(){
	$(".start_running_menu").removeClass("selected");
	$(this).addClass("selected");
});

$(".mobile_menu_header_burger").click(function(){
	$(".menu_mobile_expand").toggle();
	
})

  var product_slider = $('#products').bxSlider({
    slideWidth: 250,
    minSlides: 1,
    maxSlides: 18,
    slideMargin: 2,
	pager: false
  });
  
  var athlete_review = $('#athlete_review').bxSlider({
	mode: 'fade',
    pager: true,
	controls: true
  });
  
  /* athlete review slider */
	jQuery(function($) {
		$( '#jj_review_slide, #elvia_review_slide, #waimun_review_slide, #danny_review_slide, #thanthit_review_slide, #thanthit_review_slide' ).sliderPro({
			width: ('100%'),
			height: 500,
			arrows: false,
			buttons: false,
			fade: true,
			touchSwipe: false,
			autoplay: true,
			autoplayOnHover: 'pause',
			autoplayDelay: 3000
		});
	});
	
	/* Accordion athlete review */
	$('.accordion-section').each(function () {
		var $accordian = $(this);
			$accordian.find('.accordion-head').on('click', function () {
				$(this).parent().find(".accordion-head").removeClass('open close readmore');
				$(".accordion-head").removeClass("actived");
				$(this).addClass("actived");
				
				$accordian.find('.accordion-body').slideUp();
				$accordian.find('.accordion-head').addClass('open');
				if (!$(this).next().is(':visible')) {
					$(this).addClass('close').removeClass('open');
					$(this).next().slideDown();
					$('.review_content').css("position","relative");
				}
		});
	});
	
	$('.accordion-section2').each(function () {
		var $accordian = $(this);
			$accordian.find('.accordion-head').on('click', function () {
				$(this).parent().find(".accordion-head").removeClass('open close readmore');
				$(".accordion-head").removeClass("actived");
				$(this).addClass("actived");
				
				$accordian.find('.accordion-body').slideUp();
				$accordian.find('.accordion-head').addClass('open');
				if (!$(this).next().is(':visible')) {
					$(this).addClass('close').removeClass('open');
					$(this).next().slideDown();
					$('.review_content').css("position","relative");
				}
		});
	});
  
});



jQuery(function($) {
      $('#background-video').YTPlayer({
        fitToBackground: false,
       videoId: 'r9qNgGs0MkQ',
        pauseOnScroll: false,
		repeat: true,
         playerVars: {
		modestbranding: 0,
		autoplay: 1,
		controls: 0,
		showinfo: 0,
		wmode: 'transparent',
		branding: 0,
		rel: 0,
		autohide: 0,
		origin: window.location.origin
	  }
      });
         
      var videoCallbackEvents = function() {
        var player = $('#background-video').data('ytPlayer').player;
      
        player.addEventListener('onStateChange', function(event){
            console.log("Player State Change", event);

            // OnStateChange Data
            if (event.data === 0) {          
                console.log('video ended');
            }
            else if (event.data === 2) {          
              console.log('paused');
            }
        });
      }
    }); 
	
	