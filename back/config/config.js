import mongoose from 'mongoose';
import {configDotenv} from "dotenv";
configDotenv()

export const connectDb = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(connection.connection.host);
}

//mongodb+srv://nenibal656:y66E7rzNLOncnPIK@cluster0.ug0zjbl.mongodb.net/