const titles = [

    "Broken Yet Brave",
    "Silent Heart",
    "Future Queen",
    "Distance Love",
    "Forever Story"
];

const stories = [

`Some people leave quietly,
but their memories stay forever.`,

`Distance never destroys real love.
Silence does.`,

`The pain changed me,
but never destroyed me.`,

`You were the peace
inside all my chaos.`

];

const loveLetters = [

`Even silence feels beautiful with you.`,

`You are still my favorite notification.`,

`One day,
we will smile remembering this distance.`

];



/* ===========================
   FALLBACK BACKGROUNDS
=========================== */

const fallbackBackgrounds = [

"assets/bg-img/romantic1.jpg",

"assets/bg-img/romantic2.jpg",

"assets/bg-img/romantic3.jpg"
];



/* ===========================
   DYNAMIC BACKGROUND
=========================== */

function setDynamicBackground(){

    const random =
    Math.floor(Math.random()*1000);

    const aiImage =

`https://source.unsplash.com/1600x900/?love,couple,romantic&sig=${random}`;

    const img = new Image();

    img.src = aiImage;

    img.onload = () => {

        document.body.style.backgroundImage =
        `url(${aiImage})`;

        document.body.style.backgroundSize =
        "cover";

        document.body.style.backgroundPosition =
        "center";
    };

    img.onerror = () => {

        const fallback =

        fallbackBackgrounds[
        Math.floor(
        Math.random()*fallbackBackgrounds.length
        )];

        document.body.style.backgroundImage =
        `url(${fallback})`;

        document.body.style.backgroundSize =
        "cover";

        document.body.style.backgroundPosition =
        "center";
    };
}



/* ===========================
   RANDOM STORY
=========================== */

function generateStory(){

    const randomTitle =
    titles[Math.floor(Math.random()*titles.length)];

    const randomStory =
    stories[Math.floor(Math.random()*stories.length)];

    document.getElementById("title").innerText =
    randomTitle;

    typeWriter(randomStory);

    setDynamicBackground();

    generateQRCode();
}



/* ===========================
   TYPEWRITER
=========================== */

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



/* ===========================
   OPENAI STORY
=========================== */

async function generateAIStory(){

    try{

        const response =
        await fetch("/api/openai");

        const data =
        await response.json();

        const story =
        data.choices[0].message.content;

        document.getElementById("title").innerText =
        "OpenAI Love Story";

        typeWriter(story);

        setDynamicBackground();

    }catch(error){

        generateStory();
    }
}



/* ===========================
   GEMINI STORY
=========================== */

async function generateGeminiStory(){

    try{

        const response =
        await fetch("/api/gemini");

        const data =
        await response.json();

        const story =
        data.candidates[0]
        .content.parts[0].text;

        document.getElementById("title").innerText =
        "Gemini Love Story";

        typeWriter(story);

        setDynamicBackground();

    }catch(error){

        generateStory();
    }
}



/* ===========================
   SPEAK STORY
=========================== */

function speakStory(){

    const text =
    document.getElementById("story").innerText;

    const speech =
    new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);
}



/* ===========================
   SHARE STORY
=========================== */

function shareStory(){

    navigator.share({

        title:"LoveBirds AI",

        text:
        document.getElementById("story").innerText,

        url:window.location.href
    });
}



/* ===========================
   LOVE LETTER
=========================== */

function generateLoveLetter(){

    const letter =
    loveLetters[
    Math.floor(Math.random()*loveLetters.length)
    ];

    alert(letter);
}



/* ===========================
   QR CODE
=========================== */

function generateQRCode(){

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(
        document.getElementById("qrcode"),
        window.location.href
    );
}



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



/* ===========================
   AUTO LOAD
=========================== */

window.onload = () => {

    generateAIStory();
};
