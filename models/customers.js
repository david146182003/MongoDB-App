import mongoose from "mongoose";

const customersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: false,
    }
})

export default mongoose.model('Customers', customersSchema)