const englishData = {

title1:[
"You Opened This... ❤️",
"Hey You... ❤️",
"Wait... You Came Here? ✨",
"I Was Hoping You’d Read This ❤️"
],

text1:[
"I honestly didn’t expect you to follow every page this carefully... but now I’m smiling because you are ✨",

"Some people accidentally become important... and maybe you’re becoming one of them ❤️",

"I didn’t plan any of this... but somehow your presence started feeling special 🌙",

"You’re reading this right now... and honestly? That already means more than you think ❤️"
],

title2:[
"Something Feels Different 🌸",
"This Feeling Is Strange ✨",
"Soft Little Truth 🌙",
"Comfort Looks Like You ❤️"
],

text2:[
"You know that rare comfort you unexpectedly feel with someone? Yeah... that kind.",

"Some conversations just feel lighter when they’re with one specific person ❤️",

"I don’t know why... but talking to you slowly became part of my peace 🌸",

"There’s something strangely calming about your presence ✨"
],

secret2:[
"Tiny Hint ❤️<br><br>The next page contains a truth hidden between random conversations.",

"Mini Secret 🌙<br><br>Some feelings don’t arrive loudly... they quietly stay.",

"Soft Reminder ✨<br><br>Not every important feeling starts with love at first sight ❤️"
],

title3:[
"Mini Confession 🌙",
"One Tiny Secret ❤️",
"I Shouldn’t Admit This 👀",
"Random Thought ✨"
],

text3:[
"Sometimes I re-read our chats for no reason... and somehow they still make me smile.",

"Your messages randomly become the best part of my day ❤️",

"I never noticed when your presence started feeling comforting 🌸",

"Somehow... talking to you became something I look forward to ✨"
],

title4:[
"Dangerous Part 💖",
"This Is The Risk ❤️",
"The Problem Is... 🌙",
"What You Did To Me ✨"
],

text4:[
"The dangerous thing about you is... you slowly became part of my peace without even trying.",

"You quietly became someone my mind searches for naturally ❤️",

"I didn’t notice when missing your messages became normal 🌙",

"Your presence slowly turned into comfort I never expected ✨"
],

title5:[
"Last Warning ✨",
"Before The Final Truth ❤️",
"One Last Page 🌙",
"Almost There 💖"
],

text5:[
"After this page... there’s no going back 🌙",

"You’re about to read something my heart noticed before my mind did ❤️",

"Some truths become impossible to hide forever ✨",

"This page changes the meaning of everything before it ❤️"
],

secret5:[
"You’re about to read something my heart noticed before my mind did ❤️",

"Some feelings quietly grow before we even realize them 🌙",

"The next page contains the truth hidden inside ordinary moments ✨"
],

finalTitle:[
"The Truth I Never Said ❤️",
"What I Never Admitted 🌙",
"Maybe This Is Love ✨",
"The Feeling I Hid ❤️"
],

finalText:[
"Maybe you still don’t realize it yet... but somewhere between the random conversations, the unexpected smiles, the late replies, and those tiny moments that looked ordinary... you quietly became something important to me.<br><br>I don’t even know when it started happening.<br><br>Maybe it was the way your messages suddenly became the best part of my day.<br><br>Maybe it was how your presence started feeling comforting in a way I never expected.<br><br>Nothing about this was planned.<br><br>Yet somehow... you slowly became someone my mind looks for naturally ❤️",

"Sometimes people slowly become home without even realizing it ❤️<br><br>And maybe that’s exactly what happened with you.<br><br>I didn’t expect your presence to matter this much... but now it quietly does 🌙",

"I don’t know when this feeling started.<br><br>Maybe during random late night conversations.<br><br>Maybe during the moments you unintentionally made me smile.<br><br>But somewhere along the way... you became special ❤️"
]

};



/* RANDOM PICKER */

function random(arr){

return arr[
Math.floor(Math.random()*arr.length)
];

}



/* GENERATE FRESH QUOTES */

function generateFreshContent(){

return {

title1:random(englishData.title1),
text1:random(englishData.text1),

title2:random(englishData.title2),
text2:random(englishData.text2),
secret2:random(englishData.secret2),

title3:random(englishData.title3),
text3:random(englishData.text3),

title4:random(englishData.title4),
text4:random(englishData.text4),

title5:random(englishData.title5),
text5:random(englishData.text5),
secret5:random(englishData.secret5),

finalTitle:random(englishData.finalTitle),
finalText:random(englishData.finalText)

};

}



/* SET LANGUAGE */

function setLanguage(lang){

document.getElementById('languagePage')
.classList.remove('active');

showPage(1);

const d = generateFreshContent();

document.getElementById('title1').innerHTML=d.title1;
document.getElementById('text1').innerHTML=d.text1;

document.getElementById('title2').innerHTML=d.title2;
document.getElementById('text2').innerHTML=d.text2;
document.getElementById('secret2').innerHTML=d.secret2;

document.getElementById('title3').innerHTML=d.title3;
document.getElementById('text3').innerHTML=d.text3;

document.getElementById('title4').innerHTML=d.title4;
document.getElementById('text4').innerHTML=d.text4;

document.getElementById('title5').innerHTML=d.title5;
document.getElementById('text5').innerHTML=d.text5;

document.getElementById('secret5').innerHTML=d.secret5;

document.getElementById('finalTitle').innerHTML=d.finalTitle;
document.getElementById('finalText').innerHTML=d.finalText;

}



/* PAGE SWITCH */

function showPage(page){

document.querySelectorAll('.page')
.forEach(p=>{
p.classList.remove('active');
});

document
.getElementById('page'+page)
.classList.add('active');

window.scrollTo(0,0);

}



/* GO HOME */

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



/* FLOATING HEARTS */

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
