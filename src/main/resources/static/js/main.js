$(".signup").click(function(){
    $(".slider").addClass("moveslider");
    $(".form-section").addClass("form-section-move");
});

$(".login").click(function() {
    $(".slider").removeClass("moveslider");
    $(".form-section").removeClass("form-section-move");
});