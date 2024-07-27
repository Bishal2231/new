import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
 const DBCONNECT=async()=>{
    try {
        const connectionInstance=mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
    } catch (error) {
        console.log(" mongo db connection failed",error)
    }
}
export {DBCONNECT}