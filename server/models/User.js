import { model,Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    phone:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    plateNumber: {
  type: String
  // remove unique: true
}

});

const User = model("User",userSchema);
export default User;