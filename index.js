import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
const app = express();
const PORT = process.env.PORT;

await mongoose.connect(process.env.MONGO_URL)
app.use(express.json())

app.get('/', async (req, res)=>{
    await res.json('SBA-MONOGOOSE')
})
app.post('/post', async(req, res)=>{
    
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})