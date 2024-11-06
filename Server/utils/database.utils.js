import mongoose from "mongoose"
const mongodb=(url)=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch(()=>{
        console.log("error in code");
        }
    )
}
export default mongodb;