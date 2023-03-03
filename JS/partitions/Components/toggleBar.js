export function toggle(){
let toggleBar=document.querySelector(".toggle")
let links=document.querySelector(".links")
let svg=document.querySelector("i")
toggleBar.addEventListener("click",()=>
{
links.classList.toggle("show")
})

}
