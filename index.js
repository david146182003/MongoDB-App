import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Customers from './models/customers.js';
const app = express();
const PORT = process.env.PORT;

await mongoose.connect(process.env.MONGO_URL)
app.use(express.json())

app.get('/', async (req, res)=>{
    await res.send('SBA-MONOGOOSE')
})

app.get('/customers', async (req, res)=>{
    const customers = await Customers.find({});
    res.json(customers)
})
app.post('/customers', async(req, res)=>{
    const newCustomer = new Customers({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    })
    const result = await newCustomer.save()
    res.json(result)
})

app.delete('/customers', async (req, res)=>{
    
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})