$(document).ready(function(){
    // Enable carousel autoplay
    $('.carousel').carousel({
        interval: 5000 
    });
    $('.carousel').hover(function() {
        $(this).carousel('pause');
    }, function() {
        $(this).carousel('cycle');
    });
});