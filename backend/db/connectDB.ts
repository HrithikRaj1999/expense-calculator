import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL!);
    console.log("MongoDb Connected : ", conn.connection.name);
  } catch (error) {
    console.error("MongoDb Connection Error : ", error);
    process.exit(1);
  }
}
