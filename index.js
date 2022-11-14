const express = require("express")
const path = require("path") 

const app = express()


app.use(express.static("public"))

let percorso_main = path.join(__dirname, "main.html")
let percorso_about = path.join(__dirname, "about.html")

app.get("/", (req,res)=>{
    res.sendFile(percorso_main)
})

app.get('/about', (req,res)=>{
    res.sendFile(percorso_about)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {});

//RICORDARSI DI FARE IL DOPPIO PUSH OGNI VOLTA CHE SI FANNO DELLE MODIFICHE
// git push origin main
// git push heroku main