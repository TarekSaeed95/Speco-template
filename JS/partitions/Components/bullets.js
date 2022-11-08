
export function bullets(){
let bulletsList=document.querySelectorAll(".bullets li")

let aboutSecOffset=document.querySelector(".about-us").offsetTop
let aboutSec=document.querySelector(".about-us")

let skillsSecOffset=document.querySelector(".our-skills").offsetTop
let skillsSec=document.querySelector(".our-skills")

let gallerySecOffset=document.querySelector(".our-gallery").offsetTop
let gallerySec=document.querySelector(".our-gallery")

let timelineSecOffset=document.querySelector(".timeline").offsetTop
let timelineSec=document.querySelector(".timeline")

let featuresSecOffset=document.querySelector(".our-features").offsetTop
let featuresSec=document.querySelector(".our-features")

let testimonialsSecOffset=document.querySelector(".testimonials").offsetTop
let testimonialsSec=document.querySelector(".testimonials")

let secArr=
new Map([[aboutSec,aboutSecOffset]
    ,[skillsSec,skillsSecOffset]
    ,[gallerySec,gallerySecOffset]
    ,[timelineSec,timelineSecOffset]
    ,[featuresSec,featuresSecOffset]
    ,[testimonialsSec,testimonialsSecOffset]])

bulletsList.forEach(
    (li)=> li.addEventListener("click",
    ()=>{
        [...secArr.keys()].forEach((el)=> {if (el.id.toString()==li.dataset.link){
            scroll(0,secArr.get(el))
        }})
        if(li.dataset.link==skillsSec.id.toString()){
            scroll(0,skillsSecOffset)
        }

}))
}