
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
    $("#backFaceAdd").on("input", function(){
        $("#backRemainingChars").css("display", "");
        $("#backRemainingChars").text($("#backFaceAdd").attr("maxlength") - $("#backFaceAdd").val().length);
    })
    $("#frontFaceAdd").on("click" ,(e) =>  { e.stopPropagation(); $("#frontRemainingChars").css("display", "")});
    $("#frontFaceAdd").on("input", function(){
        $("#frontRemainingChars").css("display", "");
        $("#frontRemainingChars").text($("#frontFaceAdd").attr("maxlength") - $("#frontFaceAdd").val().length);
    })

    let editSetFlashCard = $(".edit-set-flashcard");
    editSetFlashCard.on("click", function(){
        if($(this).children(".cardButtonsWrapper").css("display") === "none"){
            $(this).children(".cardButtonsWrapper").css("display", "flex");
        } else {
            $(this).children(".cardButtonsWrapper").css("display", "none");
        }
    })

    editSetFlashCard.on("mouseleave", function(){
        $(this).children(".cardButtonsWrapper").css("display", "none");
        $(this).children(".cardButtonsWrapper").css("width", "");
        $(this).children(".cardTextWrapper").css("width", "100%");
    })

// Edit card button functionality
    $(".card-buttons-edit").on("click", function(){
        let pTags = $(this).parent().siblings(".cardTextWrapper").children("form").children("p");
        let submitButton = $(this).parent().siblings(".cardTextWrapper").children("form").children("button");
        if(pTags.attr("contenteditable") === "true"){
            pTags.attr("contenteditable", "false");
            submitButton.css("display", "none");
            pTags.removeClass("p-tags-active");

        } else {
            pTags.attr("contenteditable", "true");
            pTags.addClass("p-tags-active");
            submitButton.css("display", "");
            $(this).parent().siblings(".cardTextWrapper").children("form").children(".pForFrontFace").focus()
        }
    })
    $('.pForFrontFace').on("click", function(e) {
        if ($(this).hasClass("p-tags-active")) {
            e.stopPropagation();
        }
    });
    $('.pForBackFace').on("click", function(e){
        if($(this).hasClass("p-tags-active")){
            e.stopPropagation();
        }
        })
    $('.pForFrontFace').on('input', function() {
        $(this).siblings('.hiddenInputForFront').val($(this).text());
    });
    $('.pForBackFace').on('input', function() {
        $(this).siblings('.hiddenInputForBack').val($(this).text());
    });

//    This is to close the add a card and close it
    document.getElementById("save_card").addEventListener("click", () => {
        addFlashcard();
    });


//  This show the create flashcard box
    document.getElementById("show_card_box").addEventListener("click", () => {
        document.getElementById("create_card").style.display = "block";
    });


//  This closes the create flashcard box
    document.getElementById("close_card_box").addEventListener("click", () => {
        document.getElementById("create_card").style.display = "none";
    });

//^^^^

    $('#recipeCarousel').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });





})//End of document.ready