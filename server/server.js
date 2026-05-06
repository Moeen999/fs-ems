import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";

const app = express();
const PORT = process.env.PORT || 4000;

// ! Middlewares
app.use(cors());
app.use(express.json());
app.use(multer().none());

// ! Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
