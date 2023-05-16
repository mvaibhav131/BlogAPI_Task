import express from "express"
import { getAllUser, login, signup }  from "../controllers/user-controller";

const router=express.Router();

router.get("/",getAllUser ); // Get all user list 
router.post("/signup",signup); // Sign up user
router.post("/login",login); // Login User

export default router;  