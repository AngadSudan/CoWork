import mongoose from "mongoose"
const mongodb=(url)=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch(()=>{
        console.log("DB connection failed");
        }
    )
}
export default mongodb;