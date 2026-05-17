/* =========================================
   LOVEBIRDS PREMIUM SCRIPT
========================================= */



/* =========================================
   RANDOM PICKER
========================================= */

function random(arr){

return arr[
Math.floor(Math.random()*arr.length)
];

}



/* =========================================
   PASSWORDS
========================================= */

const secretPasswords = [

"mahi",
"forever",
"heartbeat",
"moon",
"love"

];



/* =========================================
   HIDDEN CLUES
========================================= */

const hiddenClues = [

"Hint: The password is emotional ❤️",

"Hint: Sometimes peace feels like love 🌙",

"Hint: One password means forever ✨",

"Hint: The answer is connected to feelings ❤️",

"Hint: Try simple emotional words 👀"

];



/* =========================================
   CURRENT LANGUAGE
========================================= */

let currentLanguage = "english";



/* =========================================
   LANGUAGE SELECTOR
========================================= */

function setLanguage(lang){

currentLanguage = lang;

document
.getElementById('languagePage')
.classList.remove('active');

showPage(1);

loadFreshQuotes();

}



/* =========================================
   LOAD FRESH QUOTES
========================================= */

function loadFreshQuotes(){

let shortQuotes = [];

let finalQuotes = [];



/* ENGLISH */

if(currentLanguage === "english"){

shortQuotes = englishQuotes;

finalQuotes = englishFinalQuotes;

}



/* HINDI */

if(currentLanguage === "hindi"){

shortQuotes = hindiQuotes;

finalQuotes = hindiFinalQuotes;

}



/* MARATHI */

if(currentLanguage === "marathi"){

shortQuotes = marathiQuotes;

finalQuotes = marathiFinalQuotes;

}



/* RANDOM CONTENT */

const q1 = random(shortQuotes);
const q2 = random(shortQuotes);
const q3 = random(shortQuotes);
const q4 = random(shortQuotes);
const q5 = random(shortQuotes);

const finalQ = random(finalQuotes);



/* TITLES */

document.getElementById("title1")
.innerHTML = randomTitle();

document.getElementById("title2")
.innerHTML = randomTitle();

document.getElementById("title3")
.innerHTML = randomTitle();

document.getElementById("title4")
.innerHTML = randomTitle();

document.getElementById("title5")
.innerHTML = randomTitle();

document.getElementById("finalTitle")
.innerHTML = finalTitle();



/* PAGE TEXTS */

document.getElementById("text1")
.innerHTML = q1;

document.getElementById("text2")
.innerHTML = q2;

document.getElementById("text3")
.innerHTML = q3;

document.getElementById("text4")
.innerHTML = q4;

document.getElementById("text5")
.innerHTML = q5;



/* SECRET HINTS */

document.getElementById("secret2")
.innerHTML = random(hiddenClues);

document.getElementById("secret5")
.innerHTML = random(hiddenClues);



/* FINAL MESSAGE */

typeFinalMessage(finalQ);

}



/* =========================================
   RANDOM TITLES
========================================= */

function randomTitle(){

const titles = [

"You Opened This ❤️",

"Something Feels Different 🌙",

"One Tiny Secret ✨",

"Maybe This Is Real ❤️",

"A Feeling I Never Expected 🌸",

"Some Things Stay ❤️",

"Late Night Thoughts 🌙",

"An Honest Feeling ✨"

];

return random(titles);

}



/* =========================================
   FINAL TITLES
========================================= */

function finalTitle(){

const titles = [

"The Truth I Never Said ❤️",

"Maybe This Is Love 🌙",

"What My Heart Noticed ✨",

"The Feeling I Hid ❤️",

"Something I Couldn’t Ignore 🌸"

];

return random(titles);

}



/* =========================================
   PAGE SWITCH
========================================= */

function showPage(page){

document.querySelectorAll('.page')
.forEach(p=>{

p.classList.remove('active');

});

document
.getElementById('page'+page)
.classList.add('active');

window.scrollTo(0,0);



/* HIDDEN CLUES */

if(page >= 2 && page <= 5){

const clue = random(hiddenClues);

showClue(clue);

}



/* FINAL PAGE FIREWORKS */

if(page === 6){

launchCelebration();

}

}



/* =========================================
   GO HOME
========================================= */

function goHome(){

document.querySelectorAll('.page')
.forEach(p=>{

p.classList.remove('active');

});

document
.getElementById('languagePage')
.classList.add('active');

window.scrollTo(0,0);

}



/* =========================================
   FLOATING CLUES
========================================= */

function showClue(text){

const clue =
document.createElement("div");

clue.classList.add("floating-clue");

clue.innerHTML = text;

document.body.appendChild(clue);

setTimeout(()=>{

clue.classList.add("show");

},100);

setTimeout(()=>{

clue.classList.remove("show");

setTimeout(()=>{

clue.remove();

},500);

},3500);

}



/* =========================================
   PASSWORD BOX
========================================= */

function openPasswordBox(){

document
.getElementById("passwordModal")
.classList.add("active");

}



/* =========================================
   CHECK PASSWORD
========================================= */

function checkPassword(){

const input =

document
.getElementById("secretPassword")
.value
.toLowerCase();



if(secretPasswords.includes(input)){

document
.getElementById("passwordModal")
.classList.remove("active");

document
.getElementById("secretPassword")
.value = "";

document
.getElementById("passwordError")
.innerHTML = "";

showPage(6);

}else{

document
.getElementById("passwordError")
.innerHTML =
"Wrong password ❤️";

}

}



/* =========================================
   TYPEWRITER FINAL EFFECT
   FIXED VERSION
========================================= */

function typeFinalMessage(text){

const element =
document.getElementById("finalText");

element.innerHTML = "";

let index = 0;

/* FIXED UNICODE SUPPORT */

const chars = [...text];

function typing(){

if(index < chars.length){

element.innerHTML += chars[index];

index++;

setTimeout(typing,15);

}

}

typing();

}



/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart(){

const heart =
document.createElement('div');

heart.classList.add('heart');

heart.innerHTML='❤️';

heart.style.left =
Math.random()*100+'vw';

heart.style.fontSize =
(Math.random()*20+10)+'px';

heart.style.animationDuration =
(Math.random()*5+5)+'s';

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,300);



/* =========================================
   FIREWORKS SYSTEM
========================================= */

const fireworksCanvas =
document.getElementById("fireworks");

const fwCtx =
fireworksCanvas.getContext("2d");

fireworksCanvas.width =
window.innerWidth;

fireworksCanvas.height =
window.innerHeight;

let fireworks = [];

const fireworkColors = [

"#ff4d6d",
"#ff758f",
"#ffd166",
"#06d6a0",
"#4cc9f0",
"#c77dff",
"#ffffff",
"#ff85a1"

];



/* CREATE FIREWORK */

function createFirework(x,y){

for(let i=0;i<100;i++){

fireworks.push({

x:x,
y:y,

radius:Math.random()*3+1,

color:
fireworkColors[
Math.floor(
Math.random()*fireworkColors.length
)],

speedX:(Math.random()-0.5)*8,

speedY:(Math.random()-0.5)*8,

alpha:1,

gravity:0.03

});

}

}



/* ANIMATE FIREWORKS */

function animateFireworks(){

fwCtx.clearRect(
0,
0,
fireworksCanvas.width,
fireworksCanvas.height
);

fireworks.forEach((p,index)=>{

p.x += p.speedX;

p.y += p.speedY;

p.speedY += p.gravity;

p.alpha -= 0.01;

fwCtx.beginPath();

fwCtx.arc(
p.x,
p.y,
p.radius,
0,
Math.PI*2
);

fwCtx.fillStyle =
hexToRgba(p.color,p.alpha);

fwCtx.fill();

if(p.alpha <= 0){

fireworks.splice(index,1);

}

});

requestAnimationFrame(
animateFireworks
);

}



/* =========================================
   COLOR CONVERTER
========================================= */

function hexToRgba(hex,alpha){

const r =
parseInt(hex.slice(1,3),16);

const g =
parseInt(hex.slice(3,5),16);

const b =
parseInt(hex.slice(5,7),16);

return `rgba(${r},${g},${b},${alpha})`;

}



/* =========================================
   START FIREWORK LOOP
========================================= */

animateFireworks();



/* =========================================
   DOUBLE TAP FIREWORKS
========================================= */

let lastTap = 0;

document.addEventListener(
"touchend",
function(event){

const currentTime =
new Date().getTime();

const tapLength =
currentTime - lastTap;

if(tapLength < 300 && tapLength > 0){

createFirework(

event.changedTouches[0].clientX,

event.changedTouches[0].clientY

);

}

lastTap = currentTime;

}
);



/* =========================================
   DESKTOP DOUBLE CLICK
========================================= */

document.addEventListener(
"dblclick",
function(event){

createFirework(
event.clientX,
event.clientY
);

}
);



/* =========================================
   FINAL PAGE CELEBRATION
========================================= */

function launchCelebration(){

const interval = setInterval(()=>{

createFirework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight/2

);

},400);

setTimeout(()=>{

clearInterval(interval);

},5000);

}



/* =========================================
   MOBILE FIX
========================================= */

window.addEventListener(
'resize',
()=>{

fireworksCanvas.width =
window.innerWidth;

fireworksCanvas.height =
window.innerHeight;

}
);
