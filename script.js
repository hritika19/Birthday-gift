/* ============================
   Happy Birthday Aduuu ❤️
   Made with love by Gudduu
============================ */

// Correct Password
const correctPassword = "aduuu19";

// Unlock Website
function checkPassword() {

    const input = document.getElementById("password").value;

    if (input === correctPassword) {

        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("website").style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        showWelcomeMessage();

    } else {

        alert("Wrong Password 😝\nOnly Birthday Boy can enter ❤️");

    }

}

// Scroll to Letter
function scrollToLetter() {

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

}

// Welcome Popup
function showWelcomeMessage() {

    setTimeout(() => {

        alert(
`Happy Birthday Aduuu ❤️

Welcome to your little surprise.

Made with lots and lots of love by...

Yourrr Girl Gudduu ❤️`
        );

    }, 600);

}

// Secret Button
const secretBtn = document.getElementById("secretBtn");

if(secretBtn){

secretBtn.addEventListener("click",()=>{

alert(`😂😂😂

I literally told you NOT to click.

But you still clicked.

Typical Aduuu 🤦❤️`);

});

}

// Cake Click
const cake = document.querySelector(".cake");

if(cake){

cake.addEventListener("click",()=>{

confettiEffect();

alert("🎂 Make a Wish Birthday Boy ❤️");

});

}

// Simple Confetti
function confettiEffect(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize=(Math.random()*18+18)+"px";

confetti.style.transition="4s linear";

confetti.style.zIndex="9999";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.top="110vh";

confetti.style.transform=
"rotate("+Math.random()*720+"deg)";

},100);

setTimeout(()=>{

confetti.remove();

},4200);

}

}

// Floating Love Messages
const loveMessages=[

"❤️ You're my favourite person.",

"🥺 Thank you for existing.",

"🌍 My world is better with you.",

"😂 Stop stealing my food.",

"😘 I Love Uhh Soo Muchh.",

"❤️ Forever Yours,\nYourrr Girl Gudduu"

];

let current=0;

setInterval(()=>{

const message=document.createElement("div");

message.innerText=loveMessages[current];

message.style.position="fixed";

message.style.bottom="20px";

message.style.left="50%";

message.style.transform="translateX(-50%)";

message.style.background="#ffffff";

message.style.padding="14px 22px";

message.style.borderRadius="30px";

message.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";

message.style.zIndex="9999";

message.style.fontSize="15px";

document.body.appendChild(message);

setTimeout(()=>{

message.remove();

},3500);

current++;

if(current>=loveMessages.length){

current=0;

}

},25000);

// Smooth Fade Sections
const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

// Birthday Console Message 😁
console.log(`
Happy Birthday Aduuu ❤️

If you're reading this...

Gudduu loves you sooo muchh ❤️
`);
