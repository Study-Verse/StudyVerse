$(function (){
    // getting the ID from the window #no need for hidden div
    let cardSetId = window.location.pathname.split("/")[2];
    function getCardList(){
                fetch(`/card-api/${cardSetId}`)
                .then(response => response.json())
                .then(data =>{
                    data.forEach((card) =>{
                        $(".study-card-container").append(`
                        <div class="flashcard">
                               <div class="card-inner"
                                    <div class="front-face">
                                        <p>${card.frontFace}</p>
                                    </div>
                                    <div class="back-face">
                                         <p>${card.backFace}</p>
                                    </div>
                                </div> 
                        </div>
                        `)
                    })// end of for each
                })
}// end of getCardList function
    getCardList()


//For carousel
    const carousel = $('.carousel');
    const cards = $('.carousel-flashcard');
    const prevButton = $('.prev');
    const nextButton = $('.next');
    let currentIndex = 0;
    $("#cardCounter").text(currentIndex + 1 + "/" + cards.length);
    cards.each((index, card) => {
        $(card).click(() => {
            $(card).toggleClass('flipped');
        });

        if (index === currentIndex) {
            $(card).addClass('active');
        } else {
            $(card).removeClass('active');
        }

    });
    prevButton.click(() => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        $("#cardCounter").text(currentIndex - 1 + "/" + cards.length);
        updateCards();
    });
    nextButton.click(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        $("#cardCounter").text(currentIndex + 1 + "/" + cards.length);
        updateCards();
    });
    function updateCards() {
        cards.each((index, card) => {
            if (index === currentIndex) {
                $(card).addClass('active');
            } else {
                $(card).removeClass('flipped');
                $(card).removeClass('active');
            }
        });
    }
//For carousel


});