import express from 'express';
import { AppDataSource } from "./data-source"

const addWatermark = require('./route/PdfAnnotation.route')
const app = express() 
const PORT = 3000;

AppDataSource.initialize().then(async () => {
    console.log("Database connected")
}).catch(error => console.log(error))

app.use(express.json())
app.use('/api', addWatermark)

app.listen(3000, ()=>{
    console.log(`Server is listening at port ${PORT}`)
})