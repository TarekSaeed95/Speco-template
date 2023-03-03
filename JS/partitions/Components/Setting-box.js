// choosing color
import {colorOption} from "../setting box/colors.js"
// random backgrounds setting 
import { randBg } from "../setting box/randbg.js" 
// bullets setting 
import { bulletOption } from "../setting box/bulletsInSetting.js"
// reset button
import {reset} from "../setting box/reset-but.js"
export function settingBox(){
// display and hide settingBox
let gear= document.querySelector(".gear")
let gearBut= document.querySelector(".icon-holder")
let settingBox=document.querySelector(".setting-box")
gear.onclick=()=>{
        gearBut.classList.toggle("fa-spin")
        settingBox.classList.toggle("show")
    }
    colorOption()
    randBg()
    bulletOption()
    reset()
}