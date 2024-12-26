import mongoose from "mongoose";

const connectDB = async () =>{   //used async because data base operation are asynchronous(line by line)

    mongoose.connection.on('connected',()=>{   //once database is connected
        console.log("DB connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)  //Ensures the connection operation completes before moving to the next line
}

export default connectDB;