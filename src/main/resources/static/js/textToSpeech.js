$(document).ready(function (){
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

//copy
//     document.querySelector("#start").addEventListener("click", () => {
//         // Set the text property with the value of the textarea
//         speech.text = document.querySelector("textarea").value;
//
//         // Start Speaking
//         window.speechSynthesis.speak(speech);
//     });

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



});// end of js file


window.onbeforeunload = function () {
    // your function call here
    window.speechSynthesis.cancel();
};