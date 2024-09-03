import express from 'express'
import chalk from 'chalk' //public module
import cors from 'cors'
import dotenv from 'dotenv'

//configure built in middleware
const app = express()
app.use(express.json()) 
app.use(cors())

dotenv.config()
const port = process.env.PORT

// Server listening
app.listen(port,()=>{
    console.log(chalk.blueBright(`server running at http://localhost:${port}`))
})

export default app