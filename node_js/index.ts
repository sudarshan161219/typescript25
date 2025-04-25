import "reflect-metadata";
import express, { Request, Response, Express } from "express";
import { addRoutes } from "./src/config/routes.config";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { responseFormatter } from "./src/middleware/responseFormatter.middleware";
import cors, { CorsOptions } from "cors";

export const app: Express = express();
dotenv.config();
app.use(express.json());

const port = process.env.PORT;
const db_name = process.env.DATABASE_NAME;

// let corsOptions: CorsOptions = {
//   origin:"http://example.com"
// }

app.use(cors());
app.use(responseFormatter);

addRoutes(app);

const database_url = process.env.DATABASE_URL;

async function bootstrap() {
  if (!database_url) {
    throw new Error("Connot read env variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(database_url, {
      dbName: db_name,
    });
    console.log("Connected to mongoDb");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

bootstrap();
