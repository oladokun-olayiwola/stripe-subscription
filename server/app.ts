import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { ConnectDB } from "./db_connection";
import AuthRouter from "./routes/auth"
import cookieParser from 'cookie-parser'

dotenv.config();


const app = express();

app.use(express.json({limit: "5mb"}));
app.use(cookieParser())


app.use(
    cors({
        origin: [process.env.CLIENT_URL as string],
        credentials: true
    })
)

// Routes
app.use(AuthRouter)


const PORT = process.env.PORT || 4000;

const start: () => Promise<void> = async () => {
  await ConnectDB(process.env.Mongo_URI as string)
  try {
    app.listen(PORT, () => {
      console.log(`Listening to your server on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
