$(function (){

    $(".signup").click(function(){
        $(".slider").addClass("moveslider");
        $(".form-section").addClass("form-section-move");
    });

    $(".login").click(function() {
        $(".slider").removeClass("moveslider");
        $(".form-section").removeClass("form-section-move");
    });

// alert("yo");
//
//     $(".edit-button").on("click",function (){
//         console.log($(this).attr("data-id"));
//         window.location.replace(`/post/${$(this).attr("data-id")}/edit`);
//     });
    $(".edit-card-set").on("click",function (){
        // alert("yo");
        console.log($(this).attr("set-id"));
    })

});

