$(function() {
    $("#testBtn").click(function(){
        $("#testModal").modal("show");
    });
});

$(window).on('scroll', function(){
    $('.top').css('opacity', 1 - $(window).scrollTop() / $('.top').height());
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 300){
        $('.to-top-btn').fadeIn();
    } else {
        $('.to-top-btn').fadeOut();
    }
});

$('.to-top-btn').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });


/*About*/



 function scrollHandler() {
     if($(window).scrollTop() >= $('.projects').position().top) {
       $('.skill').each(function(){
     var skill = $(this);
     var percentage = skill.find('.percentage').text();
     skill.find('.inner-bar').animate({'width': percentage}, 1200);
   });
     } 
     $('section').each(function(){
       if($(window).scrollTop() >= $(this).position().top){
         $(this).find('.vertical-center').animate({top:'0', opacity: '1'}, 800);
       }
     });
   }
  
   $(window).on('scroll', scrollHandler);
  
   scrollHandler();
   
    

  
  
  $('.menu-right button').on('click', function(){
    var id = $(this).attr('id');
    if (id == "about-btn"){
      $('html, body').animate({scrollTop: $('.about').position().top}, 1000)
      
    } else if (id == "contact-btn"){
      $('html, body').animate({scrollTop: $('.contact').position().top}, 1000)
    }
  })
  
  


var counter = 0;
$(document).ready(function(){
    $("#heart-button").click(function(){
        counter++;
        $("span.number").text( 24 + counter);
    });
});

var view = 0;
$(document).ready(function(){
    $("#viewer-button").click(function(){
        view++;
        $("span.viewer").text(93 + view);
    });
});

var counter2 = 0;
$(document).ready(function(){
    $("#heart-button2").click(function(){
        counter2 ++;
        $("span.number2").text(32 + counter2);
    });
});

var view2 = 0;
$(document).ready(function(){
    $("#viewer-button2").click(function(){
        view2++;
        $("span.viewer2").text(82 + view2);
    });
});

var counter3 = 0;
$(document).ready(function(){
    $("#heart-button3").click(function(){
        counter3++;
        $("span.number3").text(42 + counter3);
    });
});

var view3 = 0;
$(document).ready(function(){
    $("#viewer-button3").click(function(){
        view3++;
        $("span.viewer3").text(82 + view3);
    });
});

var counter4 = 0;
$(document).ready(function(){
    $("#heart-button4").click(function(){
        counter4++;
        $("span.number4").text(32 + counter4);
    });
});

var view4 = 0;
$(document).ready(function(){
    $("#viewer-button4").click(function(){
        view4++;
        $("span.viewer4").text(82 + view4);
    });
});

var counter5 = 0;
$(document).ready(function(){
    $("#heart-button5").click(function(){
        counter5++;
        $("span.number5").text(52 + counter5);
    });
});

var view5 = 0;
$(document).ready(function(){
    $("#viewer-button5").click(function(){
        view5++;
        $("span.viewer5").text(72 + view5);
    });
});

var counter6 = 0;
$(document).ready(function(){
    $("#heart-button6").click(function(){
        counter6++;
        $("span.number6").text(89 + counter6);
    });
});

var view6 = 0;
$(document).ready(function(){
    $("#viewer-button6").click(function(){
        view6++;
        $("span.viewer6").text(93 + view6);
    });
});

var counter7 = 0;
$(document).ready(function(){
    $("#heart-button7").click(function(){
        counter7++;
        $("span.number7").text(105 + counter7);
    });
});

var view7 = 0;
$(document).ready(function(){
    $("#viewer-button7").click(function(){
        view7++;
        $("span.viewer7").text(119 + view7);
    });
});

var counter8 = 0;
$(document).ready(function(){
    $("#heart-button8").click(function(){
        counter8++;
        $("span.number8").text(32 + counter8);
    });
});

var view8 = 0;
$(document).ready(function(){
    $("#viewer-button8").click(function(){
        view8++;
        $("span.viewer8").text(57 + view8);
    });
});

var counter9 = 0;
$(document).ready(function(){
    $("#heart-button9").click(function(){
        counter9++;
        $("span.number9").text(78 + counter9);
    });
});

var view9 = 0;
$(document).ready(function(){
    $("#viewer-button9").click(function(){
        view9++;
        $("span.viewer9").text(99 + view9);
    });
});

var counter10 = 0;
$(document).ready(function(){
    $("#heart-button10").click(function(){
        counter10++;
        $("span.number10").text(108 + counter10);
    });
});

var view10 = 0;
$(document).ready(function(){
    $("#viewer-button10").click(function(){
        view10++;
        $("span.viewer10").text(120 + view10);
    });
});

var counter11 = 0;
$(document).ready(function(){
    $("#heart-button11").click(function(){
        counter11++;
        $("span.number11").text(92 + counter11);
    });
});

var view11 = 0;
$(document).ready(function(){
    $("#viewer-button11").click(function(){
        view11++;
        $("span.viewer11").text(130 + view11);
    });
});

