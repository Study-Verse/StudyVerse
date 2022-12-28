$(document).ready(function() {

    // let item, title, author, publisher, bookLink, bookImg;
    let outputList = document.getElementById("list-output");
    let bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    let placeHldr = '<img src="https://via.placeholder.com/150">';
    let searchData;

    //handling error for empty search box
    function displayError() {
        alert("search term can not be empty!")
    }

    //listener for search button
    $("#search").click(function() {
        outputList.innerHTML = ""; //empty html output
        document.body.style.backgroundImage = "url()";
        searchData = $("#search-box").val();
        //handling empty search input field
        if(searchData === "" || searchData === null) {
            displayError();
        }
        else {
            // console.log(searchData);
            // $.get("https://www.googleapis.com/books/v1/volumes?q="+searchData, getBookData()});
            $.ajax({
                url: bookUrl + searchData,
                dataType: "json",
                success: function(response) {
                    console.log(response)
                    if (response.totalItems === 0) {
                        alert("no result!.. try again")
                    }
                    else {
                        $("#title").animate({'margin-top': '5px'}, 1000); //search box animation
                        $(".book-list").css("visibility", "visible");
                        displayResults(response);
                    }
                },
                error: function () {
                    alert("Something went wrong.. <br>"+"Try again!");
                }
            });
        }
        $("#search-box").val(""); //clean search box
    });

    /*
    * function to display result in index.html
    * @param response
    */

    // This displays the results and we are doing += 2 since we are displaying 2 books
    function displayResults(response) {
        for (let i = 0; i < response.items.length; i+=2) {
            item = response.items[i];
            title1 = item.volumeInfo.title;
            author1 = item.volumeInfo.authors;
            publisher1 = item.volumeInfo.publisher;
            bookLink1 = item.volumeInfo.previewLink;
            bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier
            bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHldr ;

            item2 = response.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookLink2 = item2.volumeInfo.previewLink;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHldr ;

            // in production code, item.text should have the HTML entities escaped.
                outputList.innerHTML += '<div class="row mt-4">' +
                formatOutput(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn) +
                formatOutput(bookImg2, title2, author2, publisher2, bookLink2, bookIsbn2) +
                '</div>';

            console.log(outputList);
        }
    }

    /*
    * card element formatter using es6 backticks and templates (individual card)
    * @param bookImg title author publisher bookLink
    * @return htmlCard
    */
    // This is creating the cards
    function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn) {
        // console.log(title + ""+ author +" "+ publisher +" "+ bookLink+" "+ bookImg)

        // (BAD) http://localhost:63342/Practice-Code/bookView.html?isbn=9780131872486
        // (GOOD) http://localhost:63342/Practice-Code/bookView.html?_ijt=9780991229048=RELOAD_ON_SAVE
        let viewUrl = 'bookView/'+bookIsbn; //constructing link for book viewer
        //This creates the cards
        let htmlCard = `<div class="col-lg-6">
       <div class="card" style="">
         <div class="row no-gutters">
           <div class="col-md-4">
             <img src="${bookImg}" class="card-img" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">Author: ${author}</p>
               <p class="card-text">Publisher: ${publisher}</p>
               <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Read Book</a>
             </div>
           </div>
         </div>
       </div>
     </div>`
        return htmlCard;
    }











    // Output for books so we can get three random books

    let containerBook = document.getElementById("containerBook")

    let randomBook = $(".card-tag")[Math.floor(Math.random()* $(".card-tag").length)].innerHTML;
    console.log(randomBook);




    function displayResults2(response) {
        for (let i = 0; i < 3; i+=3) {
            console.log(response)
            item = response.items[i];
            title1 = item.volumeInfo.title;
            author1 = item.volumeInfo.authors;
            publisher1 = item.volumeInfo.publisher;
            bookLink1 = item.volumeInfo.previewLink;
            bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier
            bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHldr ;

            item2 = response.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookLink2 = item2.volumeInfo.previewLink;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHldr ;

            item3 = response.items[i+2];
            title3 = item3.volumeInfo.title;
            author3 = item3.volumeInfo.authors;
            publisher3 = item3.volumeInfo.publisher;
            bookLink3 = item3.volumeInfo.previewLink;
            bookIsbn3 = item3.volumeInfo.industryIdentifiers[1].identifier
            bookImg3 = (item3.volumeInfo.imageLinks) ? item3.volumeInfo.imageLinks.thumbnail : placeHldr ;

            // in production code, item.text should have the HTML entities escaped.
            containerBook.innerHTML +=
                formatOutput2(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn) +
                formatOutput2(bookImg2, title2, author2, publisher2, bookLink2, bookIsbn2) +
                formatOutput2(bookImg3, title3, author3, publisher3, bookLink3, bookIsbn3)
               ;

        }
    }


    function formatOutput2(bookImg, title, author, publisher, bookLink, bookIsbn) {

        let viewUrl = 'bookView/'+bookIsbn; //constructing link for book viewer
        //This creates the cards
        let htmlCard = `
           <div>
             <img src="${bookImg}" alt="Book Image">
           </div>
           <div id="bookinfo">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">Author: ${author}</p>
               <p class="card-text">Publisher: ${publisher}</p>
               <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Read Book</a>
           </div>`
        return htmlCard;
    }

    function getRandomBooks(){
        $.ajax({
            url: bookUrl + randomBook,
            dataType: "json",
            success: function (randomResponse) {
                console.log(randomResponse)
                displayResults2(randomResponse);
            }
        })
    }
    getRandomBooks();


});