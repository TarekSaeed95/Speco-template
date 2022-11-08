export function skills(){
// skills section
let skillSection=document.querySelector(".our-skills")
let sectionOffset=skillSection.offsetTop
let sectionHeight=skillSection.offsetHeight
let windowHeight=window.innerHeight
let progressSPan=document.querySelectorAll(".progress")
window.onscroll=()=>{
    if(window.scrollY + windowHeight >=sectionOffset + sectionHeight ){
        progressSPan.forEach((el)=>el.style.width=el.parentElement.dataset.progress)
    }
}
}