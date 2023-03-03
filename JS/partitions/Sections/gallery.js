export function gallery(){
// gallery overlay
let cardsImg=document.querySelectorAll("#card img")
let overlayGallery=document.querySelector(".our-gallery .overlay")
cardsImg.forEach((el)=>
el.addEventListener("click",()=>{
    overlayGallery.style.display="block"
    let fullScreenDiv=document.createElement("div")
    let closeSpan=document.createElement("span")
    let fullScreenImg=document.createElement("img")
    overlayGallery.appendChild(fullScreenDiv);
    fullScreenDiv.appendChild(fullScreenImg);
    fullScreenDiv.appendChild(closeSpan);
    fullScreenDiv.className="start"
    setTimeout(()=>fullScreenDiv.classList.add("finished")
    ,100)
    setTimeout(()=>{
    closeSpan.classList.add("span-fade-in")
    closeSpan.textContent="X"
    },300)
    fullScreenImg.src=el.src
    fullScreenImg.style=
    "position:fixed;max-width:100%;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100%;border-radius:20px"
    closeSpan.onclick=()=>{
        closeSpan.classList.remove("span-fade-in")
        setTimeout(()=>{
            
        overlayGallery.style="display:none"
        fullScreenDiv.remove()
    },300)
        fullScreenDiv.classList.add("deleted")
    }
    overlayGallery.addEventListener("click",(e)=>{
        const isClosest = e.target.closest(".start");
        if(!isClosest){
            closeSpan.classList.remove("span-fade-in")
            setTimeout(()=>{
            overlayGallery.style="display:none"
            fullScreenDiv.remove()
        },300)
            fullScreenDiv.classList.add("deleted")
    
        }
    })
}
));

}