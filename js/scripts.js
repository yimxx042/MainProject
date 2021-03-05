$(function() {
    $("#testBtn").click(function(){
        $("#testModal").modal("show");
    });
});



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
        $("span.viewer3").text(98 + view3);
    });
});