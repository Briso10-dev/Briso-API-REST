// Importation of the different modules in ES6
import http from 'http'   //core module
import fs from 'fs'       //core module
import chalk from 'chalk' //public module
import cors from 'cors'
import dotenv from 'dotenv'
import parse from 'querystring';
import connection, { deconnection } from './index2.mjs' //importing another module
// message headers
const content_type = {
    'Content-Type': 'aplication/json',
    'Content-Type2': 'text/plain; charset=utf-8',
    'Access-Control-Allow-Origin': '*', // HTTP response header used in Cross-Origin Resource Sharing (CORS) to control which origins are allowed to access a resource from a different domain.
}
// port
const env = dotenv.config()
const port = process.env.PORT
// objet de test
let Person = {
    nom: "Kouam",
    prenom: "Brice",
    age: 19,
    niveau: "L3"
}
 {
    "num1" ; "10";
    "num2" ; "5"
}
// Basic creation of server
// const server = http.createServer((req,res)=>{
//     fs.writeFile('demofile3.txt',"Hello world", (err)=>{ //reading from a file
//         if (err) throw err
//         console.log('saved')
//     // res.setHeader('Content-type','text/html; charset=utf-8')
//     res.writeHead(200,content_type)
//     // res.write(data)
//     res.end()
//     })
// })

//Appel d'un autre module :
let bool = deconnection(2)
if(bool)
    console.log("oh yes, I am welly manipulating modules in ES6 nodejs")
else
    console.log("oh no,ashh")
Paths

let sum = 0
const server = http.createServer((req, res) => {
    // GET method
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, content_type['Content-Type'])
            res.write(JSON.stringify(Person))
            res.end()
        }
        if (req.url === '/briso') {
            res.writeHead(200, content_type['Content-Type2'])
            res.write(JSON.stringify(Person))
            res.end()
        }
        if (req.url === '/sum') {
            res.writeHead(200, content_type['Content-Type'])
            res.write(JSON.stringify({sum}))
            res.end()
        }
    }
    // POST METHOD
    if (req.method === 'POST') {
        if (req.url === '/add') {
            let body = ' ';
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', () => {
                const { num1, num2 } = parseInt(body);
                sum = num1 + num2;
                res.writeHead(201, content_type['Content-Type2'])
                res.write("Feedback submitted successfully")
                res.end()
            })
        }
    }
})
// server listening
server.listen(port, () => {
    console.log(chalk.blueBright(`Server running at http://localhost:${port}`))
})


// Note
// response body : is the actual content that is sent from the server to the client as a response to an HTTP request(containing the data that the client requested or that the server wants to send back).
// response headers : are additional pieces of information included in an HTTP response to provide metadata about the response itself or the content it carries.They are represented as key-value pairs: content-type-content-length,cookies,...
// JSON.parse: use to convert a JSON to to an object
// JSON.stringify : use to convert an object to JSON
// content-type : aplication/format permits me to download a file of any format i want
//res.end() //can still be done with just one single line by using the res.end("...") which provides at the same time response and terminate comm