//function for letting the SVGs show on mouseOver
if(window.innerWidth > 768){
    $(".card-sets").mouseenter(function (){
        $(this).children(".svg").removeClass("display-none");
    })

    $(".card-sets").mouseleave(function (){
        $(this).children(".svg").addClass("display-none");
    })
}

//Function to show the SVGs automatically if the screen size is smaller than 768, this doesn't work on resizing the
// screen only if you start off at that screen size
if(window.innerWidth < 768){
    $(".svg").removeClass("display-none");
}

//Modal Functions
$(document).ready(function(){

    $(".trash-svg").click(function(event){
        event.stopPropagation();
        window.location.replace(`${$(this).attr("data-id")}/delete`)
    });
    $(".edit-svg").on("click", function(event){
        event.stopPropagation();
        $(this).parent().siblings(".card-modal").removeClass("display-none");
    });
    //End of modal on click function
    $(".close").on("click", function(){
        $(".card-modal").addClass("display-none");
    });

    console.log($(this).attr("card-set-id"))
    // on dashboard view this function will redirect the url to the url with the card set id
    $(".card-info").click(function (){
        window.location.replace(`/study-cards/${$(this).attr("card-set-id")}`)
    });
    $(".card-modal").click(function(event){
        event.stopPropagation();
    })

    //Create Set Modal
    $("#create-set-button").on("click", function(){
        $(this).parent().siblings(".card-modal").removeClass("display-none");
    })//End of modal on click function
    $(".close").on("click", function(){
        $(".card-modal").addClass("display-none");
    })
    //End of Create Set Modal
})//End of document.ready