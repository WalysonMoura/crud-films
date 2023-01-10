import "reflect-metadata"
import "./database"

import express, { json }  from "express"
import { routes } from "./routes"

const app = express()
app.use(express.json())

app.use(routes)

app.listen(3030,() => {
    console.log("Server in running!");
    
})