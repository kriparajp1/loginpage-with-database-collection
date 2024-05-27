const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://kriparaj456:Cw3yMPqkrin266Fd@cluster0.9jdtsjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('mongodb had connected');
}).catch(()=>{
    console.log('mongodb has not connected');
})

const schema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collectionModel = mongoose.model("userbasecollection",schema);
module.exports =collectionModel;
