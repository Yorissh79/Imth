import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    it: { type: String, required: true },
    count: { type: String, required: true },
}, {timestamp: true})

const basket = mongoose.model('basket', basketSchema);

export default basket;