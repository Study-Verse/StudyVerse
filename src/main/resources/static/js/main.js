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

    $('#recipeCarousel').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item').each(function() {
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
            next.children(':first-child').clone().appendTo($(this));
        };

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
            }


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

//Edit user details functionality
        $(".edit-user-info-btn").on('click', function(e){
            alert("hey");
            // let form = $(this).attr('form');
            // $.get(form, function(user, status){
            //     $('.changed-username').val(user.username);
            //     $('.changed-email').val(user, email);
            // });
            // $('.profile-edit-modal').modal();
        })

// Stephen's code for edit post
    // $(document).ready(function(){
    //     // Event listener to redirect when .editButton clicked
    //     $(".editButton").on('click', function(e){
    //         window.location.replace(`/posts/${$(this).attr("data-id")}/edit`);
    //     });
    // });


    // $(".card-buttons-edit").on("click", function(){
    //     let pTags = $(this).parent().siblings(".cardTextWrapper").children("form").children("p");
    //     let submitButton = $(this).parent().siblings(".cardTextWrapper").children("form").children("button");
    //     if(pTags.attr("contenteditable") === "true"){
    //         pTags.attr("contenteditable", "false");
    //         submitButton.css("display", "none");
    //         pTags.removeClass("p-tags-active");
    //
    //     } else {
    //         pTags.attr("contenteditable", "true");
    //         pTags.addClass("p-tags-active");
    //         submitButton.css("display", "");
    //         $(this).parent().siblings(".cardTextWrapper").children("form").children(".pForFrontFace").focus()
    //     }
    // })

})//End of document.ready