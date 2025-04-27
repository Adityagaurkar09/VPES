import express from 'express';
import cors from 'cors';
import nodemon from 'nodemon';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { postPlate, getPlate } from './controllers/Name.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    if (conn) {
        console.log("MongoDB Connected");
    }
    else {
        console.log("MongoDB Connection Failed");
    }

};

app.get('/health',(req,res)=>{
    res.json({
        status: "true",
        Message:"server is running"
    })
})

app.post('/name',postPlate)

app.get('/name',getPlate)



const Port = process.env.Port || 5002;

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
    connectDB();
    console.log("MongoDB Connected");
})




