import mongoose from "mongoose";

const transShcema = new mongoose.Schema({
    type:{
        type:"String",
        required:true
    },
    title:{
        type:"String",
        required:true

    },
    amount:{
        type:"String",
        required:true
    },
    date:{
        type: Date,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    // ,


    // {
    //     timestamps:true
    // }

})

export default mongoose.model("Transaction", transShcema )