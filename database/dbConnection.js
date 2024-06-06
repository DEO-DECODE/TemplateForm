import mongoose from "mongoose";
export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1/Templateform");
    console.log(`Connected to mongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in connecting database`);
    console.log(error.message);
  }
};
