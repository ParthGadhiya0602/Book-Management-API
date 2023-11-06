import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const password = encodeURIComponent("MonkeyDLuffy1999");
    const connection = await mongoose.connect(
      `mongodb+srv://Parth:${password}@parthmongo.yam0puc.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
  }
};
