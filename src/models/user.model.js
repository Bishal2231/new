import mongoose,{Schema} from "mongoose"

const userSchema=new Schema({
  
    phone:{
        type:String
      
      },
    password:{
        type:String

    }


},{timestamps:true})
export const User=mongoose.model("User",userSchema)


