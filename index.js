// Importation des differents module
const http = require('http') //module http
const fs = require('fs') //module fs

// message headers
const content_type = {
    'Content-Type': 'text/plain; charset=utf-8'
}

// objet de test
let Person = {
    nomç  : "Kouam",
    prenom: "Brice",
    age : 19,
    niveau : "L3" 
}

// creation du serveur
const port = 4000
const server = http.createServer((req,res)=>{
    fs.writeFile('demofile3.txt',"Hello world", (err)=>{ //reading from a file
        if (err) throw err
        console.log('saved')
    // res.setHeader('Content-type','text/html; charset=utf-8')
    res.writeHead(200,content_type)
    // res.write(data)
    res.end()
    })
})

server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})

// 
// Note
// response body : is the actual content that is sent from the server to the client as a response to an HTTP request(containing the data that the client requested or that the server wants to send back).
// response headers : are additional pieces of information included in an HTTP response to provide metadata about the response itself or the content it carries.They are represented as key-value pairs: content-type-content-length,cookies,...
// JSON.parse: use to convert a JSON to to an object
// JSON.stringify : use to convert an object to JSON
// content-type : aplication/format permits me to download a file of any format i want
//res.end() //can still be done with just one single line by using the res.end("...") which provides at the same time response and terminate comm