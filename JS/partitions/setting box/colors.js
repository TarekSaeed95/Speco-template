 // choosing color
export function colorOption(){ 
 let listItems=document.querySelectorAll(".setting-box li")
 let mainColor=localStorage.getItem("color")
 // removing active from all colors & adding active to set color
 listItems.forEach((li)=>{li.classList.remove("active")
 if(li.dataset.color==mainColor){
     li.classList.add("active")
 }})
 document.documentElement.style.setProperty("--main-color",mainColor)
 listItems.forEach(
     (el)=>{
         el.addEventListener("click",
         function(){
             // removing active from all colors
             listItems.forEach((li)=>li.classList.remove("active"))
             // adding active to target colors
             el.classList.add("active")
             // make choosing color the main-color
             document.documentElement.style.setProperty("--main-color",el.dataset.color)
             // Saving color to Local storage
             localStorage.setItem("color",el.dataset.color)
         })})}