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

    $(".edit-svg").on("click", function(){
        $(this).parent().siblings(".card-modal").removeClass("display-none");
    })//End of modal on click function
    $(".close").on("click", function(){
        $(".card-modal").addClass("display-none");
    })

    $(".trash-svg").click(function(event){
        window.location.replace(`${$(this).attr("data-id")}/delete`)
    });

    $(".cardButton").click(function (){
        // alert("yo")
        console.log(`/study/${$(this).attr("card-set-id")}`)
        window.location.replace(`/study-cards/${$(this).attr("card-set-id")}`)
    });

})//End of document.ready


