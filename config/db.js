const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()
const MONGO_URL = process.env.MONGO_URL;
// console.log(process.env.MONGO_URL)

const connectDB = async (req,res)=>{
    try{
        await mongoose.connect(MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify:false
        });
        console.log('DB connected')
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
