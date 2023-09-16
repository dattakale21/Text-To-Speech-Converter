let speech = new SpeechSynthesisUtterance();   // it is built in speech object 
let listen = document.querySelector("#listen");
let voice = [];    // empty array
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices();
    speech.voice = voice[0];

    voice.forEach((voice, i) => {
        voiceselect.options[i] = new Option(voice.name, i)
    });
}

voiceselect.addEventListener("change", () => {
    speech.voice = voice[voiceselect.value];
})

listen.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// Code By - Kale Datta 