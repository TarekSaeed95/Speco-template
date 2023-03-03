// random backgrounds setting 
export function randBg(){
let holder=document.querySelector(".randomize .holder")
let ball=document.querySelector(".randomize .ball")
let bgCondition=localStorage.getItem("bg")

if(bgCondition=="shuffle"){
    holder.classList.remove("off")
    ball.classList.remove("off")
}
else{
    holder.classList.add("off")
    ball.classList.add("off")
}

holder.onclick=function(){
    ball.classList.toggle("off")
    holder.classList.toggle("off")
    if(ball.classList.contains("off"))
    {
        localStorage.setItem("bg","stop")
    }
    else localStorage.setItem("bg","shuffle")
    localStorage.removeItem("img")

}}