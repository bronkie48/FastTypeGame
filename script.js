const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");

const resetButton = document.querySelector("#reset");
const generateButton = document.querySelector("#generate");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false; // de tijd die loopt wordt hier false gezet.

var sentence = [
  "Had ik maar een vak geleerd",
  "Is dan niets meer heilig?",
  "Ik zag nog een leuke vacature voor boswachter.",
  "Als ik naar je toe moet komen is het te laat.",
  "Ik heb ze voor minder koud gemaakt.",
  "Wat kun je wel?",
  "Fenomenaaldhakken!",
  "Schand, schand voor de hele buurt.",
  "Heb je weer er weer zelf aan lopen hannesen?",
  "Het heerst een beetje.",
  "Amateur.",
  "Dat bood helaas geen soelaas.",
  "Dat zei de vrouw vannacht ook.",
  "Er is thuis toch niemand die op me wacht.",
  "Misschien weet Anton dat?",
  "Nog nooit zo lekker gegeten.",
  "Aannames zijn de bron van het kwaad.",
  "Denk je alles te hebben meegemaakt...",
  "Ik heb veel meegemaakt bij de commando's.",
  "Moet je even aan de systeembeheerder vragen.",
  "Stuur maar een mailtje naar support.",
  "Maandag ben je de eerste.",
  "Stoertje.",
  "Tussen welke ribben wil je deze pen hebben?",
  "Nog plannen van het weekend?",
  "Is er al documentatie van?",
  "Ga nou niet zeggen dat dat niet zo is.",
  "Drek ist janken.",
  "Laten we in vredesnaam kalm blijven.",
  "Bedankt, we zullen het nooit, nooit vergeten.",
  "Dag, lieve kijkbuiskindertjes",
  "Lekker bakje sap van Satan.",
  "We kunnen niet zonder je maar we gaan het toch proberen.",
  "Kerst 2020 hebben we weer tijd.",
  "En zo rommelen we een bietje door.",
  "Maak het niet te laat he.",
  "De tandjes.",
];
function getRandomSentence() {
  return sentence[Math.floor(Math.random() * sentence.length)];
}
var originText = document.querySelector("#origin-text p").innerHTML = getRandomSentence();
// er word een 0 voor de tel gezet wanneer de tijd onder of gelijk aan de 9 is.
function leadingZero(time){
  if (time <= 9){
    time = "0" + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;

//Berekening tijd timer.
  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match de text die ingevuld wordt met de text die nagetypet moet worden op de pagina:
function spellCheck(){
  let textEntered = testArea.value;
  let originTextMatch = originText.substring(0,textEntered.length);

  if(textEntered == originText) {
    clearInterval(interval);
    testWrapper.style.borderColor = "#04f000"; //green color when you typed the right text.
  } else{
    if (textEntered == originTextMatch) {
      testWrapper.style.borderColor = "#65CCf3"; //blue color when you are typing the right text.
    }else{
      testWrapper.style.borderColor = "#E95D0F"; //red color when you enter the wrong text.
    }
  }
}

// Start the timer:
function startTimer(){
  let textEnterLength = testArea.value.length;
  if(textEnterLength === 0 && !timerRunning) {
    timerRunning = true;// Zorgt ervoor dat de tijd loopt wanneer de statement waar is
    interval = setInterval(runTimer, 10);// Start de timer met een interval setter.
    timer = [0,0,0,0];
    timerRunning = false;
  }
}

// Reset everything:
function reset(){
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];
  timerRunning = false;

  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
  // originText = document.querySelector("#origin-text p").innerHTML = getRandomSentence();
}

function generate(){
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];
  timerRunning = false;

  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
  originText = document.querySelector("#origin-text p").innerHTML = getRandomSentence();
}
// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
generateButton.addEventListener("click", generate, false);
