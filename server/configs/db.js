import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("DB connected succesfully!"),
    );
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Error connecting DB: ", error);
  }
};

export default connectDB;
