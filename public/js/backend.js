import {libri} from "./database.js"


//LIBRO PRECEDENTE
let libro_precedente

//DICHIARAZIONE ELEMENTI CON IL QUERY SELECTOR
let content = document.querySelector("#content")
let body = document.querySelector("body")
let div_citazione = document.querySelector("#div_citazione")
let citazione = document.querySelector("#citazione")
let copertina = document.querySelector("#copertina")
let titolo_header = document.querySelector("#titolo_header")
let header = document.querySelector("#header")
let instagram_logo = document.querySelector(".instagram_logo")
let link_amazon = document.querySelector("#link_amazon")

let footer = document.querySelector("#footer")
let made_by_love = document.querySelector("#footer")

let div_copertina = document.querySelector("#div_copertina")

let index

let height = window.innerHeight
let width = window.innerWidth
let flag

//let altezza_header_mobile = "8vh"
//let altezza_titolo_header_mobile = "2.8vh"
//let altezza_header_desktop = "12vh"
//let altezza_titolo_header_desktop = "4vh"

let altezza_footer_mobile = "5vh"
let altezza_titolo_footer_mobile = "1vh"
let altezza_footer_desktop = "8vh"
let altezza_titolo_footer_desktop = "1.5vh"

let altezza_div_copertina_mobile = "50vh"

//let altezza_citazione_mobile = "3.2vh"
//let altezza_citazione_desktop = "5vh"

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


//CAMBIO DI DIMENSIONE TITOLO PER SMARTPHONE
function cambio_mobile(){
    if (isMobile() == "mobile"){
        //titolo_header.style.fontSize = altezza_titolo_header_mobile
        //header.style.height = altezza_header_mobile

        //footer.style.height = altezza_footer_mobile
        //made_by_love.style.fontSize = altezza_titolo_footer_mobile

        //div_copertina.style.height = altezza_div_copertina_mobile
        //citazione.style.fontSize = altezza_citazione_mobile

        //div_copertina.style.flexDirection = "row"
        //div_copertina.style.justifyContent = "center"
    }

    else if(isMobile() == "desktop"){
        console.log("desktop")
        //titolo_header.style.fontSize = altezza_titolo_header_desktop
        //header.style.height = altezza_header_desktop

        //citazione.style.fontSize = altezza_citazione_desktop

        
        //footer.style.height = altezza_footer_desktop
        //made_by_love.style.fontSize = altezza_titolo_footer_desktop

        //div_copertina.style.height = "65%"

        //content.style.display = "flex"


        //div_copertina.style.width = "50vh"
        //div_citazione.style.width = "50vh"
        //div_citazione.style.marginTop = "-40vh"
        //div_citazione.style.textAlign = "left"
        
        //content.style.justifyContent = "space-evenly"
        //content.style.flexDirection = "row-reverse"
    }
}

function scelta_libro(){
    let index = Math.floor(Math.random()*libri.length)
    
    return index
}

function funzione_lancio(){
    index = scelta_libro()
    let pre_link = "./database/"
    

    citazione.innerHTML = "“"+libri[index].citazione+"”"
    copertina.src = "./database/"+index+".jpg"


    //link_amazon.href = libri[index].link
    
}


//FUNZIONE LANCIO
body.addEventListener("click", funzione_lancio )

document.body.onkeyup = function(e){
    if(e.keyCode == 13 || e.key === " " ){
        funzione_lancio()
        }
    }

    window.onload = function() {
        cambio_mobile()
        funzione_lancio()
      };

