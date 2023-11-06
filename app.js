import express from "express";
import bookRoute from "./routes/book.js";
import { connectDB } from "./db.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoute);

connectDB();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
