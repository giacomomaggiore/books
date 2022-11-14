
let body = document.querySelector("body")
let link_spazio = document.querySelector("#link_spazio")

let height = window.innerHeight
let width = window.innerWidth
let flag

function isMobile(){
    if (height > width){
        flag = "mobile" 
    }
    if (height < width){
        flag = "desktop"
    }
    return flag
}

var items = document.body.getElementsByTagName("*");
let k
for (k = 0; k < items.length; k++){
    items[k].classList.add(isMobile())

}


function cambio_path(){
    window.location.href = "/home"
    console.log("Redirecting...")
}

body.onkeyup = function(e){
    if(e.keyCode == 13 || e.key === " " ){
        cambio_path()
        }
    }

link_spazio.addEventListener("click", cambio_path)

