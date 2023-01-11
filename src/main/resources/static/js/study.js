$(function (){

//For carousel
    const cards = $('.carousel-flashcard');
    const prevButton = $('.prev');
    const nextButton = $('.next');
    let currentIndex = 0;
    let cardCounter = 1;
    $("#cardCounter").text(cardCounter + "/" + cards.length);
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
        cardCounter = cardCounter - 1;
        if(cardCounter <= 0){
            cardCounter = cards.length;
        }
        $("#cardCounter").text(cardCounter + "/" + cards.length);
        updateCards();
    });
    nextButton.click(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        cardCounter = cardCounter + 1;
        if(cardCounter >= cards.length + 1){
            cardCounter = 1;
        }
        $("#cardCounter").text(cardCounter + "/" + cards.length);
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