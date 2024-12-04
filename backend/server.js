import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import mongodb from "./DB/mongodb.js";
import { app, server } from "./socket/socket.js";


// const app=express();
const PORT=process.env.PORT || 5000;

const __dirname=path.resolve();

dotenv.config();

app.use(express.json()); //to parse incoming request with JSON Payloads
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/frontend","dist","index.html"))
})



server.listen(PORT,()=>{
    mongodb()
    console.log(`server conected to port http://localhost:${PORT}/`);
})