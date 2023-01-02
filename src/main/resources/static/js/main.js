function goToCardSet(cardSetId){
    window.location.replace(`/study-cards/${cardSetId}`)
}
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

$(document).ready(function(){

    // this deletes card sets
    $(".trash-svg").click(function(event){
        event.stopPropagation();
        window.location.replace(`${$(this).attr("data-id")}/delete`)
    });

    // model pop-up functionality for each set
    $(".edit-svg").on("click", function(event){
        event.stopPropagation();
        $(this).parent().siblings(".card-modal").removeClass("display-none");
    });

    // this redirects to the view where you can add cards to your set
    $(".add-cards").on("click", function(event){
        event.stopPropagation();
        window.location.replace(`/card-create/${$(this).attr("data-name")}`)
    });


    //End of modal on click function
    $(".close").on("click", function(){
        $(".card-modal").addClass("display-none");
    });


    $(".card-modal").click(function(event){
        event.stopPropagation();
    })

    //Create Set Modal
    $("#create-set-button").on("click", function(){
        $(this).parent().siblings(".card-modal").removeClass("display-none");
    })
    $(".close").on("click", function(){
        $(".card-modal").addClass("display-none");
    })

    //Edit Set Page - Remaining characters for front face and back face
    $(window).on("click", function(){
        $("#backRemainingChars").css("display", "none");
        $("#frontRemainingChars").css("display", "none");
    })
    $("#backFaceAdd").on("click" ,(e) =>  { e.stopPropagation(); $("#backRemainingChars").css("display", "")});
    $("#backFaceAdd").on("input", function(e){
        $("#backRemainingChars").css("display", "");
        $("#backRemainingChars").text($("#backFaceAdd").attr("maxlength") - $("#backFaceAdd").val().length);
    })
    $("#frontFaceAdd").on("click" ,(e) =>  { e.stopPropagation(); $("#frontRemainingChars").css("display", "")});
    $("#frontFaceAdd").on("input", function(e){
        $("#frontRemainingChars").css("display", "");
        $("#frontRemainingChars").text($("#frontFaceAdd").attr("maxlength") - $("#frontFaceAdd").val().length);
    })

    let editSetFlashCard = $(".edit-set-flashcard");
    editSetFlashCard.on("click", function(){
        if($(this).children(".cardButtonsWrapper").css("display") === "none"){
            $(this).children(".cardButtonsWrapper").css("display", "flex");
            $(this).children(".cardButtonsWrapper").css("width", "15%");
            $(this).children(".cardTextWrapper").css("width", "85%");
        } else {
            $(this).children(".cardButtonsWrapper").css("display", "none");
            $(this).children(".cardButtonsWrapper").css("width", "");
            $(this).children(".cardTextWrapper").css("width", "100%");
        }
    })

    editSetFlashCard.on("mouseleave", function(){
        $(this).children(".cardButtonsWrapper").css("display", "none");
        $(this).children(".cardButtonsWrapper").css("width", "");
        $(this).children(".cardTextWrapper").css("width", "100%");
    })


})//End of document.ready