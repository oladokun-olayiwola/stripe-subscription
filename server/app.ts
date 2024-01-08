import express from "express";
// import multer from "multer";
// import path from "path";
import { json } from "body-parser";
import dotenv from "dotenv";
import "express-async-errors";
import cors from "cors"

dotenv.config();


const app = express();


app.use(express.json({limit: "5mb"}));

app.use(
    cors({
        origin: [process.env.MONGO_URI as string]
    })
)

const PORT = process.env.PORT || 4000;

const start: () => Promise<void> = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening to your server on port ${PORT} 😎🥰 `);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
