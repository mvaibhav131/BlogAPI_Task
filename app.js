import express from "express";
import mongoose from "mongoose";
import blogrouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>res.send('Hello BlogAPI_Task'));

app.use("/user",router);
app.use("/blogs",blogrouter);

mongoose.connect("mongodb://localhost:27017/Blog")
.then(()=> app.listen(5000))
.then(()=>console.log("Server is connected to port 5000"))
.catch((err)=>console.log(err));
