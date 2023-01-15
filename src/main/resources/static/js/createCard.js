$(document).ready(function(){
    //Edit Set Page - Remaining characters for front face and back face

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

    //This lets you reset the values of the p tag when the user presses the cancel button for editing a card
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


    //Add Card Box
    $("#show_card_box").on("click", () => {
        let addCardFormHolder =  $("#addCardFormHolder");
       $("#addCardSVG").css("display", "none");
        addCardFormHolder.css("display", "flex");
        $("html, body").scrollTop(addCardFormHolder.offset().top);
        addCardFormHolder.children("form").children("#addFrontFace").focus();
    });
    $("#addCardSVG").on("click", function(){
        let addCardFormHolder =  $("#addCardFormHolder");
        $(this).css("display", "none");
        addCardFormHolder.css("display", "flex");
        addCardFormHolder.children("form").children("#addFrontFace").focus();
    });
    let addFrontFace = $("#addFrontFace");
    let addBackFace = $("#addBackFace");
    addFrontFace.on("keydown", function(e){
        if($(this).text().length === 500 && e.keyCode !== 8){
            e.preventDefault();
        }

    });
    addFrontFace.on("input", function(){
        $('#frontFaceInput').val($(this).text());
        $("#frontFaceSpan").text(500 - $(this).text().length + " characters left");
    })
    addFrontFace.on("paste", function(e) {
        let pastedText;
        if (window.clipboardData && window.clipboardData.getData) { // IE
            pastedText = window.clipboardData.getData('Text');
        } else if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) { // other browsers
            pastedText = e.originalEvent.clipboardData.getData('text/plain');
        }
        let currentText = $(this).text();
        if ((currentText + pastedText).length > 500) {
            pastedText = pastedText.substring(0, 500 - currentText.length);
        }
        let sel = window.getSelection();
        let range = sel.getRangeAt(0);
        range.deleteContents();
        let textNode = document.createTextNode(pastedText);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        sel.removeAllRanges();
        sel.addRange(range);
        e.preventDefault();
        $("#frontFaceSpan").text(500 - $(this).text().length + " characters left");
    });
    addBackFace.on("keydown", function(e){
        if($(this).text().length === 500 && e.keyCode !== 8){
            e.preventDefault();
        }

    });
    addBackFace.on("input", function(){
        $('#backFaceInput').val($(this).text())
        $("#backFaceSpan").text(500 - $(this).text().length + " characters left");
    })
    addBackFace.on("paste", function(e) {
        let pastedText;
        if (window.clipboardData && window.clipboardData.getData) { // IE
            pastedText = window.clipboardData.getData('Text');
        } else if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) { // other browsers
            pastedText = e.originalEvent.clipboardData.getData('text/plain');
        }
        let currentText = $(this).text();
        if ((currentText + pastedText).length > 500) {
            pastedText = pastedText.substring(0, 500 - currentText.length);
        }
        let sel = window.getSelection();
        let range = sel.getRangeAt(0);
        range.deleteContents();
        let textNode = document.createTextNode(pastedText);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        sel.removeAllRanges();
        sel.addRange(range);
        e.preventDefault();
        $("#backFaceSpan").text(500 - $(this).text().length + " characters left");
    });
    $("#cancelAdd").on("click", function(e){
        e.preventDefault();
        $("#addCardSVG").css("display", "flex");
        $("#addCardFormHolder").css("display", "none");
        $("#addFrontFace").text("");
        $("#addBackFace").text("");
        $("#backFaceSpan").text("");
        $("#frontFaceSpan").text("");
    });


    if($(".cardItem").length === 0){
        $("#jumboContainer").css("display", "flex");
    } else {
        $("#jumboContainer").css("display", "none");
    }

})//End of Document.ready