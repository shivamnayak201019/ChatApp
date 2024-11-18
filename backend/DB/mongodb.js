import mongoose from "mongoose";


const mongodb=async()=>{
    try{
        await mongoose.connect(process.env.Mongo_DB_URI).then(console.log("connected to mongodb"))
    }
    catch(err){
        console.log("error connecting mongo db ",err.message)

    }
}


export default mongodb