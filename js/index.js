$(function(){
    $('#submit').click(sendForm);
});
function sendForm(e){
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/oksanavengrun@gmail.com", 
        method: "POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
            message:$('#msg').val()
            
        },
        dataType: "json",
        success:function(){
            $('form')[0].reset();
            $('#thanks').html('thank you for contacting us!');
        }
    });
};
$(window).scroll(function(){
		/*Counter*/
		$('.skills-row').not('.counted').each(function(){
			if($(window).scrollTop()+$(window).height()>= $(this).offset().top){
				$(this).addClass('counted').find('.timer').countTo();
				
				$(this).find('.skills-wrapper').not('.counted').each(function(){
					var $progress = $(this).find('.progress')
					var speed = parseInt($progress.attr("data-speed"),10);
					var to = parseInt($progress.attr("data-to"),10);				
					
					to = 99 - to;
					$(this).find('.progress').animate({top: to+"%"}, speed );					
				});

			} 
		});		

	});


$(document).ready(function(){
 
	// hide #back-top first
	$("#back-top").hide();
 
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
 
		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
 
 
  
});

$(document).on('click','.topmenu a', function(){
	var el = $($(this).attr('href')),
 	elTop = el.offset().top;
 	 	$('body,html').animate({
				scrollTop: elTop
			}, 800);
 });