function goToAddCards(CardSetId){
    window.location.replace("/card-create/" + CardSetId);
}

$(function (){

//Voice
    // Creating instance for speech synthesis
    let speech = new SpeechSynthesisUtterance();
    // Selecting default language
    speech.lang = "en";

    let voices = [];
    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        let voiceSelect = $("#voices");
        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    };

    // Adding event listener for play button
    $(".soundSVG").on('click', function(e)  {
        e.stopPropagation();
        speech.text = $(this).parent().parent().children(".cardText").text();
        window.speechSynthesis.speak(speech);
    });

    // Adding event listener to button for TTS
    $("#talk").on('click', () => {
        speech.text = $("textarea").value;
    });
    // Adding a volume property, min/max & default value has already been added in index.html
    $("#volume").on("input", () => {
        // Get volume Value from the input
        const volume = $("#volume").value;

        // Set volume property of the SpeechSynthesisUtterance instance
        speech.volume = volume;

        // Update the volume label
        $("#volume-label").innerHTML = volume;
    });
    // Adding a rate property that sts the rate of the utterance
    $("#rate").on("input", () => {
        // Get rate value from the input
        const rate = $("#rate").value;

        // Set rate property of the SpeechSynthesisUtterance instance
        speech.rate = rate;

        // Update the rate label
        $("#rate-label").innerHTML = rate;
    });
    // Adding a pitch property that sets the pitch of the utterance
    $("#pitch").on("input", () => {
        // Get pitch value from input
        const pitch = $("#pitch").value;

        // Set pitch property of the SSU instance
        speech.pitch = pitch;

        // Update the pitch label
        $("#pitch-label").innerHTML = pitch;
    });
    // Voices property
    $("#voices").on("change", () => {
        // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
        speech.voice = voices[$("#voices").value];
    });
    $("#start").on("click", () => {
        // Set the text property with the value of the textarea
        speech.text = $("textarea").value;

        // Start Speaking
        window.speechSynthesis.speak(speech);
    });
    // Adding a Pause property
    $("#pause").on("click", () => {
        // Pause the speechSynthesis instance
        window.speechSynthesis.pause();
    });
    // Adding a Resume property
    $("#resume").on("click", () => {
        // Resume the paused speechSynthesis instance
        window.speechSynthesis.resume();
    });
    // Adding a Cancel property
    $("#cancel").on("click", () => {
        // Cancel the speechSynthesis instance
        window.speechSynthesis.cancel();
    });
//End of Voice


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

    let timeOutForPlayAll;
    $("#stop-play-all").on("click", function(){
        window.speechSynthesis.cancel();
        clearTimeout(timeOutForPlayAll);
        $(this).css("display", "none");
        $("#play-all").css("display", "unset");
    })
    //Function that plays all the cards
    let userTimer = $("#timer-select").val();
    $("#timer-select").on("change", function(){
        userTimer = $(this).val();
    })
    $("#play-all").on("click", function(){
        console.log(userTimer);
        $("#stop-play-all").css("display", "unset");
        $(this).css("display", "none");
        currentIndex = 0;
        cardCounter = 1;
        $("#cardCounter").text(cardCounter + "/" + cards.length);
        updateCards();
        let index = 0;
        speakCard();

        function speakCard(){
            if(index < $('.carousel-flashcard').length){
                let cardIndex = "Card number " + (index + 1);
                let frontFace = $('.carousel-flashcard').eq(index).children(".carousel-front-face").children(".cardText").text();
                let backFace = $('.carousel-flashcard').eq(index).children(".carousel-back-face").children(".cardText").text();
                let speakIndex = new SpeechSynthesisUtterance(cardIndex);
                let speak = new SpeechSynthesisUtterance(frontFace);
                speechSynthesis.speak(speakIndex);
                speechSynthesis.speak(speak);
                speak.onend = function(){
                    $(".carousel-flashcard").toggleClass('flipped');
                }
                timeOutForPlayAll = setTimeout(()=>{
                    let speakBackFace = new SpeechSynthesisUtterance(backFace);
                    speechSynthesis.speak(speakBackFace);
                    speakBackFace.onend = function (){
                        $(".carousel-flashcard").toggleClass('flipped');
                        index++;
                        cardCounter = index + 1;
                        currentIndex = currentIndex + 1;
                        if(cardCounter >= cards.length + 1){
                            cardCounter = 1;
                            currentIndex = 0;
                        }

                        $("#cardCounter").text(cardCounter + "/" + cards.length);
                        updateCards();
                        speakCard();

                    }
                }, userTimer);

            }
            if(index === $('.carousel-flashcard').length){
                $("#play-all").css("display", "unset");
                $("#stop-play-all").css("display", "none");
            }
        }
    })//End of play all on click function

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



});//End of Document Ready

//Shuts off speech when tab closes
window.onbeforeunload = function () {
    // your function call here
    window.speechSynthesis.cancel();
};