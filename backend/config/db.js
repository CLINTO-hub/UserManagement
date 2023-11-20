import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/mernauth")
         console.log(`MongoDB  connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB