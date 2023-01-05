$(document).ready(function(){
    //Edit Set Page - Remaining characters for front face and back face
    let backFaceAdd = $("#backFaceAdd");
    let frontFaceAdd =  $("#frontFaceAdd");
    $(window).on("click", function(){
        $("#backRemainingChars").css("display", "none");
        $("#frontRemainingChars").css("display", "none");
    })
    backFaceAdd.on("click" ,(e) =>  { e.stopPropagation(); $("#backRemainingChars").css("display", "")});
    backFaceAdd.on("input", function(){
        $("#backRemainingChars").css("display", "");
        $("#backRemainingChars").text($("#backFaceAdd").attr("maxlength") - $("#backFaceAdd").val().length);
    })
    frontFaceAdd.on("click" ,(e) =>  { e.stopPropagation(); $("#frontRemainingChars").css("display", "")});
    frontFaceAdd.on("input", function(){
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

    let pForFrontFace =  $('.pForFrontFace');
    let pForBackFace =  $('.pForBackFace');
    $(".card-buttons-edit").on("click", function(){
        let pTags = $(this).parent().siblings(".cardTextWrapper").children("form").children("p");
        let submitButton = $(this).parent().siblings(".cardTextWrapper").children("form").children("button");
        if(pTags.attr("contenteditable") === "true"){
            pTags.attr("contenteditable", "false");
            submitButton.css("display", "none");
            pTags.removeClass("p-tags-active");
        }
        else {
            pTags.attr("contenteditable", "true");
            pTags.addClass("p-tags-active");
            submitButton.css("display", "");
            $(this).parent().siblings(".cardTextWrapper").children("form").children(".pForFrontFace").focus()
        }
    })
    pForFrontFace.on("click", function(e) {
        if ($(this).hasClass("p-tags-active")) {
            e.stopPropagation();
        }
    });
    pForFrontFace.on('input', function() {
        $(this).siblings('.hiddenInputForFront').val($(this).text());
    });
    pForBackFace.on("click", function(e){
        if($(this).hasClass("p-tags-active")){
            e.stopPropagation();
        }
    })
    pForBackFace.on('input', function() {
        $(this).siblings('.hiddenInputForBack').val($(this).text());

    });

    //This lets you reset the values of the p tag when the user presses the cancel button
    let originalValueFront = "";
    let originalValueBack = "";
    $(".pForFrontFace").focus(function() {
        originalValueFront = $(this).html();
    });
    $(".pForBackFace").focus(function() {
        originalValueBack = $(this).html();
    });
    $(".cancelButtonForEdit").on("click", function(e){
        e.preventDefault();
        $(this).parent().children("button").css("display", "none");
        $(this).siblings("p").attr("contenteditable", "false");
        $(this).siblings("p").removeClass("p-tags-active");
        $(this).siblings(".pForFrontFace").html(originalValueFront);
        $(this).siblings(".pForBackFace").html(originalValueBack);
    })

    //Button to save the card
    document.getElementById("save_card").addEventListener("click", () => {
        addFlashcard();
    });

    //Shows the create card form
    $("#show_card_box").on("click", () => {
       $("#create_card").css("display", "block");
    });
    //Closes the create card form
    $("#close_card_box").on("click", () => {
        $("#create_card").css("display", "none");
    });


})//End of Document.ready