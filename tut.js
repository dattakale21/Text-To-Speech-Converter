
let button=document.querySelector("#listen");
let re=new SpeechSynthesisUtterance();

button.addEventListener("click",()=>{
    re.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(re);
});