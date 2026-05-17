const titles = [

    "Broken Yet Brave",
    "Future Queen",
    "Distance Love",
    "Silent Heart",
    "Forever Story"
];

const stories = [

`Some people leave quietly,
but memories never leave.`,

`Love survives distance
when hearts stay loyal.`,

`The pain changed me,
but never destroyed me.`,

`You were my peace
inside all chaos.`

];

const loveLetters = [

`You are still my favorite notification.`,

`Even silence feels beautiful with you.`,

`One day,
we will smile remembering this distance.`

];

const gradients = [

"linear-gradient(135deg,#0f0c29,#302b63,#24243e)",

"linear-gradient(135deg,#42275a,#734b6d)",

"linear-gradient(135deg,#000428,#004e92)",

"linear-gradient(135deg,#232526,#414345)"
];

function generateStory(){

    const randomTitle =
    titles[Math.floor(Math.random()*titles.length)];

    const randomStory =
    stories[Math.floor(Math.random()*stories.length)];

    const randomBg =
    gradients[Math.floor(Math.random()*gradients.length)];

    document.body.style.background = randomBg;

    document.getElementById("title").innerText =
    randomTitle;

    typeWriter(randomStory);

    generateQRCode();
}

function typeWriter(text){

    let i = 0;

    const story =
    document.getElementById("story");

    story.innerHTML = "";

    function typing(){

        if(i < text.length){

            story.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,40);
        }
    }

    typing();
}

function speakStory(){

    const text =
    document.getElementById("story").innerText;

    const speech =
    new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);
}

function shareStory(){

    navigator.share({

        title:"Relationship Story",

        text:
        document.getElementById("story").innerText,

        url:window.location.href
    });
}

function generateLoveLetter(){

    const letter =
    loveLetters[
        Math.floor(Math.random()*loveLetters.length)
    ];

    alert(letter);
}

function generateQRCode(){

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(
        document.getElementById("qrcode"),
        window.location.href
    );
}

generateStory();





/* ===========================
   RAIN EFFECT
=========================== */

const canvas =
document.getElementById("rain");

const ctx =
canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let rainDrops = [];

for(let i=0;i<200;i++){

    rainDrops.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        length:Math.random()*20,

        speed:Math.random()*5+2
    });
}

function drawRain(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.strokeStyle =
    "rgba(255,255,255,0.2)";

    rainDrops.forEach(drop=>{

        ctx.beginPath();

        ctx.moveTo(drop.x,drop.y);

        ctx.lineTo(
            drop.x,
            drop.y + drop.length
        );

        ctx.stroke();

        drop.y += drop.speed;

        if(drop.y > canvas.height){

            drop.y = -20;
        }
    });

    requestAnimationFrame(drawRain);
}

drawRain();
