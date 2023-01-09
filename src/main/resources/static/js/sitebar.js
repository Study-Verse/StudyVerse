$(document).ready(function() {

    console.log("inside sitebar.js")
    // On logout click link, submits logout form to log user out
    $("#site-bar-logout-link").on("click", function() {
        $("#site-bar-logout-form").submit();
    });







//  Search bar
$("#site-bar-search-link").on("click", function (){
    let inputSearchText = $("#searchForCards").val();
    window.location.replace(`/search/${inputSearchText}`);
    console.log(inputSearchText);

        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ inputSearchText +"&format=json&callback=?";
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",

            success: function(data) {
                console.log(data);
                $(".outputWikiSearch").html();
                for(let i=0;i<data[1].length;i++){
                    $(".outputWikiSearch").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }
            }
        })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });


    });

});