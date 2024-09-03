import app from "./server.mjs"

// dog object
let chiens = [
    {
        id : 1,
        nom: "Maxou",
        age: 2,
        race : "cuanjang"
    },
    {    id : 2,
        nom: "Bob",
        age: 5,
        race: "berger alemand"
    },
    {   id : 3,
        nom: "Rex",
        age: 4,
        race: "berger alemand"
    },
]
// CRUD OPERATIONS
// GET METHOD : 1. to get the list of object
app.get("/chiens",(req,res)=>{
    return res.status(200).json({chiens})
})
//2. To get a particular item object
app.get("/chiens/:Id",(req,res)=>{
    const Id = parseInt(req.params.Id)
    let rechercher = (Id,tableau)=>{
        for(let i = 0; i<tableau.length; i++ ){
            console.log(Id,tableau[i].id)
            if(tableau[i].id === Id)
                return tableau[i]
    }
        return "Pas de chiens disponible"
    }
    const message = rechercher(Id,chiens)
    return res.status(200).json({msg:message})
})

// POST method
app.post("/chiens",(req,res)=>{
    const chien = {} //sample chien object to add in our array
    const {nom,age,race} = req.body
    chien.id = Math.floor(13367 * Math.random(1,90) * Math.random(1,90))
    chien.nom = nom
    chien.age = age
    chien.race = race
    chiens.push(chien)
    return res.status(201).json({msg:chiens})
})
//PUT method
app.put("/chiens/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const {nom,age,race} = req.body

    for(let i=0; i<chiens.length; i++){
        if(id === chiens[i].id){
        //the properties to modify
        chiens[i].nom = nom
        chiens[i].age = age
        chiens[i].race = race
        return res.status(201).json({msg:chiens})
        }
    }
    return res.status(201).json({msg:"identifiant non trouvee"})
})

//Delete method
app.delete("/chiens",(req,res)=>{
    chiens.splice(0,chiens.length)
    if(chiens.length !== 0)
        return res.status(500).json({msg:"error in deletion"})
    return res.status(200).json(chiens)
})