import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Customers from './models/customers.js';
import Locations from './models/locations.js';
import Reviews from './models/reviews.js';

const app = express();
const PORT = process.env.PORT;

await mongoose.connect(process.env.MONGO_URL)
app.use(express.json())

app.get('/', async (req, res)=>{
    await res.send('Welcome to Store API! /customers || /locations || /reviews')
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

app.patch('/locations/:id', async (req, res)=>{
    const updates = req.body;
    const updateLocation = await Locations.updateOne({_id: req.params.id},{$set: updates});
    res.json(updateLocation)
})

app.get('/customers/:id', async (req, res)=>{
    try{
        const customer = await Customers.findById({_id: req.params.id});
        if(!customer){
            return res.status(404).json({error: 'Customer id is not found'})
        }
        res.status(200).json(customer)
    }catch{
        res.send("Invalid id").status(400);
    }
})

app.delete('/customers/:id', async (req, res)=>{
    try{
        const result = await Customers.deleteOne({_id: req.params.id});
        if(result.deletedCount===0){
            res.status(404).json({error:'No customer found'})
        }
        res.json(result)
    }catch{
        res.send("Invalid id")
    }
})

app.get('/locations/:id', async(req, res)=>{
    try{
        const loction = await Locations.findById({_id: req.params.id});
        if(!loction){
            res.status(404).json({error: 'Location id is not found'})
        }
        res.status(200).json(loction)
    }catch{
        res.send('Invalid id').status(400);
    }
})

app.get('/reviews', async(req, res)=>{
    const reviews = await Reviews.find();
    res.json(reviews)
})

app.post('/reviews', async(req, res)=>{
        const newReview = new Reviews({
        title: req.body.title,
        comment: req.body.comment,
        rating: req.body.rating
    })
    const result = await newReview.save()
    res.json(result)
})




app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})