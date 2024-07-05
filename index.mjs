// Importation of the different modules in ES6
import express from 'express'
import fs from 'fs'       //core module
import chalk from 'chalk' //public module
import cors from 'cors'
import dotenv from 'dotenv'
import { table } from 'console'

const app = express()
app.use(express.json()) //configure middleware
app.use(cors())
dotenv.config()
const port = process.env.PORT
// objet chiens de test
let chiens = [
    {
        "id" : "2",
        "nom": "maxou",
        "age": "2",
        "race" : "cuanjang"
    },
    {    "id" : "3",
        "nom": "bob",
        "age": "5",
        "race": "berger alemand"
    },
]
// GET METHOD
app.get("/",(req,res)=>{
    res.status(200).json({welcome:" Succe\
        sful get request" })
})
app.get("/chiens",(req,res)=>{
    res.status(200).json({chiens})
    console.log("get succesfull")
})
app.get("/chiens/:id",(req,res)=>{
    let Reqid = JSON.stringify(req.params.id)
    let rechercher = (Id,tableau)=>{
        for(let i = 0; i<tableau.length; i++ ){
            console.log(Reqid)
            console.log(tableau[i].id)
            if(tableau[i].id ===Id){
                return tableau[i]
            }else
                console.log(chalk.red("Non identifiable"))
            
        }
    }
    res.status(200).send(rechercher(Reqid,chiens))    
})

// POST method
app.post("/add",(req,res)=>{
    let chien = req.body
    chien.id = Math.floor(13367 * Math.random(1,90) * Math.random(1,90))
    chien.nom = "Rex"
    chien.age = 3
    chien.race = "berger"
    res.status(201).send(`new dog added at with identifiant ${chien.id}`)
    chiens.push(chien)
    console.log(chiens)
})

// Server listening
app.listen(port,()=>{
    console.log(chalk.blueBright(`server running at http://localhost:${port}`))
})