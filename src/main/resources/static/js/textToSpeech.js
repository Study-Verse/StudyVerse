$(function (){
// Creating instance for speech synthesis
let speech = new SpeechSynthesisUtterance();

// Selecting default language
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Adding event listener for play button
$("#soundSVG").on('click', () => {
    speech.text = $(".carousel-front-face").text();
    window.speechSynthesis.speak(speech);
});

$("#soundSVG").on('click', () => {
    speech.text = $(".carousel-back-face").text();
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
    speech.text = document.querySelector("textarea").value;
});


// Adding a volume property, min/max & default value has already been added in index.html
document.querySelector("#volume").addEventListener("input", () => {
    // Get volume Value from the input
    const volume = document.querySelector("#volume").value;

    // Set volume property of the SpeechSynthesisUtterance instance
    speech.volume = volume;

    // Update the volume label
    document.querySelector("#volume-label").innerHTML = volume;
});


// Adding a rate property that sts the rate of the utterance
document.querySelector("#rate").addEventListener("input", () => {
    // Get rate value from the input
    const rate = document.querySelector("#rate").value;

    // Set rate property of the SpeechSynthesisUtterance instance
    speech.rate = rate;

    // Update the rate label
    document.querySelector("#rate-label").innerHTML = rate;
});

// Adding a pitch property that sets the pitch of the utterance
document.querySelector("#pitch").addEventListener("input", () => {
    // Get pitch value from input
    const pitch = document.querySelector("#pitch").value;

    // Set pitch property of the SSU instance
    speech.pitch = pitch;

    // Update the pitch label
    document.querySelector("#pitch-label").innerHTML = pitch;
});

// Voices property
document.querySelector("#voices").addEventListener("change", () => {
    // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
    speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector("#start").addEventListener("click", () => {
    // Set the text property with the value of the textarea
    speech.text = document.querySelector("textarea").value;

    // Start Speaking
    window.speechSynthesis.speak(speech);
});


// Adding a Pause property
document.querySelector("#pause").addEventListener("click", () => {
    // Pause the speechSynthesis instance
    window.speechSynthesis.pause();
});


// Adding a Resume property
document.querySelector("#resume").addEventListener("click", () => {
    // Resume the paused speechSynthesis instance
    window.speechSynthesis.resume();
});


// Adding a Cancel property
document.querySelector("#cancel").addEventListener("click", () => {
    // Cancel the speechSynthesis instance
    window.speechSynthesis.cancel();
});

});// end of js file


