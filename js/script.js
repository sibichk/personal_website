$(document).ready(function(){
	tick();
	function tick() {
    $.when(
        $('li').animate({ top: '-=70px' }, 'slow')
    ).done(function () {
        $('li:first').appendTo('ul');
        $('li').css('top', 'auto');
        var nxt = $('.active').next();
        $('li').removeClass('active');
        nxt.addClass('active');
        setTimeout(tick, 1000);
    });
    /*var first_element = $(".slide p").eq(first_num);
			first_element.fadeOut('slow');
			blink(first_num,first_element,null)
		function blink(first_num,first_element,temp){
			do{
			var second_num = Math.floor(Math.random()*10);
			}while((first_num == second_num) || (temp == second_num ));
			var temp = first_num;

			second_element = $(".slide p").eq(second_num)
			second_element.delay('1000').fadeOut('slow');
			var b = second_element.offset().top;
			setInterval(function(){first_element.offset({top:b}).fadeIn()}, 2000);
			setTimeout(function(){blink(second_num,second_element,temp)},1000);
			
		}; */
};
    
        //var nxt = $('li.active').next();
        //$('li.active').removeClass('active');
        //nxt.addClass('active');
        

	$('.education').hover(
         function () {
           $('.education-title').append("<div class='ed-details' style='margin-left:1%; font-size:16px;'>I moved from India to New York when I got admission at NYIT in 2012. I graduated from NYIT a few weeks ago with a Master's degree in Computer Science. While studying there, I built a mobile app using PhoneGap and a network sniffer that works on an undetectable interface. Besides this I've also worked on other class projects.</div>");
         }, 
         function () {
           $('.ed-details').remove();
         }
    );

    $('.employment').hover(
         function () {
           $('.employment-title').append("<div class='emp-details' style='margin-left:1%; font-size:16px;'>I've been in the tech industry for about three years.I worked for a year in India before moving to the US. Later I did two internships in New York. I've also done a ton of freelancing. Some companies include Foodtoeat, Aquagold Fine Touch, Neatpost, Totspot etc. The projects involve front-end and back-end programming.</div>");
         }, 
         function () {
           $('.emp-details').remove();
         }
    );
    $('.interests').hover(
         function () {
           $('.interests-title').append("<div class='int-details' style='margin-left:1%; font-size:16px;'>I love learning new stuff everyday. Books and travelling have been a huge influence on my life, love doing both. Been doing a little bit of designing recently, I find it very interesting.</div>");
         }, 
         function () {
           $('.int-details').remove();
         }
    );

    $('.mission').hover(
         function () {
           $('.mission-title').append("<div class='mission-details' style='margin-left:1%; font-size:16px;'>I moved from New York to San Francisco a few weeks back. I think the San Francisco Bay Area is where the most talented people in the tech industry live. And I'm currently looking for a full-time position as a web developer in the Bay Area.</div>");
         }, 
         function () {
           $('.mission-details').remove();
         }
    );

    $('.btn2').click(function(){
        $.when(
    	$('.project2').animate({
    		marginLeft:"0px"
    	})
        ).done(function () {
    	$('.project1').css("margin-left","800px");
    	});
    });
    $('.btn3').click(function(){
        $.when(
    	$('.project3').animate({
    		marginLeft:"0px"
    	})
        ).done(function () {
    		$('.project2').css("margin-left","800px");
    	});
    })
    $('.btn1, .btn2, .btn3').hover(function(){
        $(this).css({"background-color":"white","color":"#8989D4"});
    },
    function(){
        $(this).css({"background-color":"transparent","color":"white"});
    })
    $('.btn1').click(function(){
    		$('.project3').removeAttr('style');
    		$('.project2').removeAttr('style');
    		$('.project1').css("margin-left","0px")

    })

    $('.linkedin').hover(
         function () {
            $('.linkedin .word').css("visibility","hidden")
           $(this).append("<img id='link-logo' src='img/linkedin_logo.jpg' height='100' width='100'>");
         }, 
         function () {
            $('.linkedin .word').css("visibility","visible")
           $('#link-logo').remove();
         }
    );
    
    $('.twitter').hover(
         function () {
            $('.twitter .word').css("visibility","hidden")
           $(this).append("<img id='twit-logo' src='img/twitter-512.jpg' height='100' width='100'>");
         }, 
         function () {
            $('.twitter .word').css("visibility","visible")
           $('#twit-logo').remove();
         }
    );

    $('.github').hover(
         function () {
            $('.github .word').css("visibility","hidden")
           $(this).append("<img id='git-logo' src='img/github.jpg' height='100' width='100'>");
         }, 
         function () {
            $('.github .word').css("visibility","visible")
           $('#git-logo').remove();
         }
    );
    $('.facebook').hover(
         function () {
            $('.facebook .word').css("visibility","hidden")
           $(this).append("<img id='fb-logo' src='img/fb.jpg' height='100' width='100'>");
         }, 
         function () {
            $('.facebook .word').css("visibility","visible")
           $('#fb-logo').remove();
         }
    );



});