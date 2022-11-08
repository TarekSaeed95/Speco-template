export function bgShuflle(){
let landing=document.querySelector(".landing")
let holderbg=document.querySelector(".randomize .holder")
let ballbg=document.querySelector(".randomize .ball")
let imgOption=document.querySelectorAll(".images li")
let shuffle;
let oldImg=localStorage.getItem("img")
// lightning function

function lighting(){
    imgOption.forEach((li)=>{
        li.classList.remove("active")
        if(landing.style.backgroundImage == `url("${li.dataset.img}")`)
        {
        li.className="active"
        }
     })
}
// suffling function
function shuffling(){
    lighting()
    let i
    imgOption.forEach((li)=>{
        if(landing.style.backgroundImage == `url("${li.dataset.img}")`){
            i=li.dataset.num
        }})
    shuffle = setInterval(function(){
        if(i == 6){
            i=1
            landing.style=`background-image:url(/imgs/0${i}.jpg)`
            lighting()
            i++
        } else {
            landing.style=`background-image:url(/imgs/0${i}.jpg)`
            lighting()
            i++
        }
    }, 5000)    
}
// loading old setting if exist
if(oldImg){
landing.style=`background-image:url(${oldImg})`
}
else{
    landing.style=`background-image:url(/imgs/01.jpg)`
}
// removing active class from Elements
imgOption.forEach((el)=>{
el.classList.remove("active")
if(localStorage.getItem("img")==el.dataset.img){
    el.classList.add("active")
}
// adding active class to default bg

if(landing.style.backgroundImage==`url("${el.dataset.img}")`){
    el.classList.add("active")
}
}
)
// background-shuffle on load 
if(holderbg.classList.contains("off")||localStorage.getItem("bg")=="stop"){
    clearInterval(shuffle)
}
else{
    shuffling()
}
// background-shuffle after choosing option
holderbg.addEventListener("click",()=>{
    if(holderbg.classList.contains("off")){
        clearInterval(shuffle)
        console.log("stop")
    }
    else{
        shuffling()
        console.log("suffle")
     }
})
// choosing specific Image
imgOption.forEach((li)=>{
   li.addEventListener("click",(img)=>{
    // removing active class from Elements
    imgOption.forEach((el)=>el.classList.remove("active"))
    // stop shuffle
    clearInterval(shuffle)
    // adding active to target 
    img.target.className="active"
    // changing background image
    landing.style=`background-image:url(${li.dataset.img})`
    // change options in option-box
    holderbg.classList.add("off")
    ballbg.classList.add("off")
    // saving setting to localStorage
    localStorage.setItem("bg","stop")
    localStorage.setItem("img",li.dataset.img)
   }) 

})
}