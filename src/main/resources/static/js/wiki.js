$(function() {

    // enter
    $("#searchTerm").keypress(function(e){
        if(e.keyCode===13){
            let searchTerm = $("#searchTerm").val();
            let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function(data) {
                    console.log(data);

                    $("#output").html();
                    for(let i=0;i<data[1].length;i++){
                        $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                    }

                }
            })
        }
    });
// click ajax call
    $("#search").on("click", function() {
        let searchTerm = $("#searchTerm").val();
            alert("try actually entering something in the searchbar!")
            let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                // plop data
                success: function (data) {
                    console.log(data);
                    $("#output").html();
                    for (var i = 0; i < data[1].length; i++) {
                        $("#output").prepend("<div><div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                    }

                }
            })
                .done(function () {
                    console.log("success");
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });


    });

                                 ///////////////////This is for the search bar//////////////////


// click ajax call
//     console.log("hello")
//     console.log(window.location.href.split("/")[4])

        let searchTerm = window.location.href.split("/")[4]
        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",

            success: function(data) {
                console.log(data);
                $(".outputWikiSearch").html();
                for(let i=0;i< 9;i++){
                    $(".outputWikiSearch").prepend(`
                    <div class='link-container'>
                        <div class='well'>
                            <a target="_blank"  href="${data[3][i]}">
                                <h2> ${data[1][i]}</h2>
                                <p>${data[2][i]}</p>
                            </a>
                        </div>
                    </div>`);
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