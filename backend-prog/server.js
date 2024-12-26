import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

//middleware
app.use(express.json()) //api
app.use(cors()) //access backend from any ip

//api end points
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})
//express server starting
app.listen(port, ()=>console.log('Server started on  PORT :'+port))