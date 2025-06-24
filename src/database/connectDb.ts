import mongoose from "mongoose"
import { MONGO_URI } from '../config/env'

const connectDb = async (callback: any) => {
    if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined");
    }
    const db = await mongoose.connect(MONGO_URI);
    console.log(`Mongodb is connected on ${db.connection.host}`);

    callback()
};

export default connectDb;