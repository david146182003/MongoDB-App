import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Customers from './models/customers.js';
import Locations from './models/locations.js';

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

app.get('/locations', async (req, res)=>{
    const locations = await Locations.find({});
    res.json(locations)
})

app.post('/locations', async(req, res)=>{
    const newLocation = await new Locations({
        storeName: req.body.storeName,
        city: req.body.city,
        address: req.body.address,
        phone: req.body.phone
    })
    let result = await newLocation.save();
    res.json(result)
})

app.get('/customers/:id', async (req, res)=>{
    try{
        const customer = await Customers.findById({_id: req.params.id});
        if(!customer){
            return res.status(404).json({error: 'Customer id is not found'})
        }
        res.status(200).json(customer)
    }catch(error){
        console.error(error);
    }
})


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})