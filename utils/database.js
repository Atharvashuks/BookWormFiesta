import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Connected");
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "BookWormFiesta",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      isConnected = true;

      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  }
};
