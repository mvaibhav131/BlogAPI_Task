import express from "express";
import { getAllBlogs,addBlogs, updateblog, getById, deleteBlog, getByUserId, getByKeyword } from "../controllers/blog-controller";
const blogrouter=express.Router();


blogrouter.get("/",getAllBlogs); // Get all blogs
blogrouter.post("/add",addBlogs); // Create new blogs
blogrouter.put("/update/:id",updateblog); // Update blogs according to id
blogrouter.get("/:id",getById); //Get blog by id 
blogrouter.delete("/:id",deleteBlog); //Delete blog by id
blogrouter.get("/user/:id",getByUserId); //Get blog by userID
blogrouter.post("/search",getByKeyword); // Search blog according to keywords

export default blogrouter;