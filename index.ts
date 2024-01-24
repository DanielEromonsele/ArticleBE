import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number = 2222;

app.use(cors());
app.use(express.json());


mainApp(app)
app.listen(port, ()=>{
  console.clear();
  console.log("Server listening on port " + port);
  dbConfig();
  
})