import mongoose from "mongoose";

const locationsSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    }

})
export default mongoose.model('Locations', locationsSchema)