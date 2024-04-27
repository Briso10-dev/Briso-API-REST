const connection = (age) => {
    if(age < 18)
        return false
    else
        return true
}
const deconnection = (age) =>{
    if(age >=18)
        return false
    else
        return true
}
// partie exportation
export {deconnection} //Procedure de structuration
export default connection //Exportation par defaut

// Synchronous VS Asynchronous
const x  = ()=>{
    setInterval(()=>{
        console.log("asynchronous function")
        return
    },2)
}
function test(){
    return console.log("Synchronous function")
}
//x()
//test()
// Note : The synchronous function will always execute first even if it has been called after the asynchronous fxn

// Concept of await
async function GetData(){
    let fetchresult = await fetch ('http://localhost:4000')
    let result = await fetchresult.json()
    if (!result) 
        console.log("not found")
    else
        console.log(result)
}
//GetData()