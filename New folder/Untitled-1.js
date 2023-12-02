const wrapper= document.querySelector(".wrapper");
const question= document.querySelector(".question");
const gif =document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noßtn =document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question.innerHTML = "I love you so much sweetheart";

gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noBtn.addEventListener("mouseover", () =>
{
const noßtnRect =noßtn.getBoundingClientRect();
const maxX =window.innerWidthnoBtnRect.width;
const maxy =window.innerHeightnoBtnRect.height;
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random()* maxY); 

noBtn.style.left =randomX+ "px";
noBtn.style.top = randomy + "px"; });