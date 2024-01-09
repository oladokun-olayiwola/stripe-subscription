import mongoose from "mongoose"

export const ConnectDB = (url:string) =>  mongoose.connect(url).then(() => {
    console.log("Database connected successfully");
}).catch(
    (err) => {
        console.log({"Database connection failed error": err});
        
    }
)