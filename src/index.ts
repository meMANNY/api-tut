import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import router from "./router/index"

import mongoose from "mongoose";




const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000,()=>{
    console.log("server is listening")
});

const MONGO_URL = "mongodb+srv://amanlamo:aman1234@cluster0.ylxogzr.mongodb.net/?retryWrites=true&w=majority"
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error",(error: Error) => console.log(error));

app.use('/',router());

