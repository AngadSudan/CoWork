import { createClient } from "redis";

const redisConnection=async ()=>{

    const redisClient= createClient({
        url:process.env.REDIS_URL
    })
    
    redisClient.on('connect',()=>{
        console.log('redis connected');
    });
    
    redisClient.on('error',(error)=>{
        console.log('error ', error);
    });
    
    await redisClient.connect();
    return redisClient;
}
const redisConnectedUser= await redisConnection();
export default redisConnectedUser;