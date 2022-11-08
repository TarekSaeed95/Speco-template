// reset button
export function reset(){
    let resetButton=document.querySelector(".reset")
    let holder=document.querySelector(".randomize .holder")
    let ball=document.querySelector(".randomize .ball")
    let holderBullets=document.querySelector(".bullets-show .holder")
    let ballBullets=document.querySelector(".bullets-show .ball")
    let bullets=document.querySelector(".bullets")
    let listItems=document.querySelectorAll(".setting-box li")


    resetButton.addEventListener("click",()=>{
    localStorage.removeItem("bg")
    localStorage.removeItem("bullets")
    localStorage.removeItem("color")
    // removing active from all colors and adding active class to default color 
    listItems.forEach((li)=>{li.classList.remove("active")
    listItems[0].classList.add("active")
    document.documentElement.style.setProperty("--main-color",listItems[0].dataset.color)
    localStorage.setItem("color",listItems[0].dataset.color)
    // removing off class from bg and bullets 
    holder.classList.remove("off")
    ball.classList.remove("off")
    holderBullets.classList.remove("off")
    ballBullets.classList.remove("off")
    localStorage.setItem("bg","shuffle")
    localStorage.setItem("bullets","show")
    bullets.classList.remove("off")
})})}