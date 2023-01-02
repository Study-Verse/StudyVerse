$(function() {
    console.log("inside sitebar.js")
    // On logout click link, submits logout form to log user out
    $("#site-bar-logout-link").on("click", function() {
        $("#site-bar-logout-form").submit();
    });





//  Search bar

$("#site-bar-search-link").on("click", function (){
    let inputSearchText = $("#searchForCards").val();
    window.location.replace(`/search/${inputSearchText}`)
    console.log(inputSearchText)
})

    // // getting the ID from the window #no need for hidden div
    // let cardSetId = window.location.pathname.split("/")[2];
    // function getCardList(){
    //     fetch(`/card-api/${cardSetId}`)
    //         .then(response => response.json())
    //         .then(data =>{
    //             data.forEach((card) =>{
    //                 $(".study-card-container").append(`
    //                     <div class="flashcard">
    //                            <div class="card-inner"
    //                                 <div class="front-face">
    //                                     <p>${card.frontFace}</p>
    //                                 </div>
    //                                 <div class="back-face">
    //                                      <p>${card.backFace}</p>
    //                                 </div>
    //                             </div>
    //                     </div>
    //                     `)
    //             })// end of for each
    //         })
    // }// end of getCardList function
    // getCardList()


});