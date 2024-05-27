const mongoose =require("mongoose")
mongoose.connect('mongodb://localhost:27017/userbase').then(()=>{
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