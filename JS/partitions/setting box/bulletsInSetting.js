// bullets setting 
export function bulletOption(){
let holderBullets=document.querySelector(".bullets-show .holder")
let ballBullets=document.querySelector(".bullets-show .ball")
let bulletCondition=localStorage.getItem("bullets")
let bullets=document.querySelector(".bullets")
if(bulletCondition=="show"){
    holderBullets.classList.remove("off")
    ballBullets.classList.remove("off")
    bullets.classList.remove("off")
}
else{
    holderBullets.classList.add("off")
    ballBullets.classList.add("off")
    bullets.classList.add("off")

}
holderBullets.onclick=function(){
    ballBullets.classList.toggle("off")
    bullets.classList.toggle("off")
    setTimeout(() => {
        holderBullets.classList.toggle("off")
    }, 300);
    if(ballBullets.classList.contains("off"))
    {
        localStorage.setItem("bullets","hide")
    }
    else localStorage.setItem("bullets","show")
}}