import mongoose from "mongoose";

export const connectMongo = () => {
  try {
    const con = mongoose.connect(process.env.MONGODB_URL);
    con && console.log("db Connected");
  } catch (error) {
    console.log(error);
  }
};
