import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// second method (this method is good isme yha se export kr denge index.js me import fir wha code jyada nhi hoga)

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1) 
    }
}

export default connectDB