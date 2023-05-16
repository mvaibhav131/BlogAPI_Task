import mongoose from "mongoose";
const Schema=mongoose.Schema;


const userSchema= new Schema({
    name:{type:String, require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true,minlength:6},
    //set password min length is 6
    blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true}], 
 });

export default mongoose.model("User",userSchema);