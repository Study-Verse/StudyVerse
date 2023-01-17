$(document).ready(function() {

    console.log("inside sitebar.js")
    // On logout click link, submits logout form to log user out
    $("#site-bar-logout-link").on("click", function() {
        $("#site-bar-logout-form").submit();
    });


//  Search bar
$("#site-bar-search-link").on("click", function (){
    let inputSearchText = $("#searchForCards").val();
    if (inputSearchText === ""){
        alert("Try searching for a topic")
    } else{
        window.location.replace(`/search/${inputSearchText}`);
    }
    });

});