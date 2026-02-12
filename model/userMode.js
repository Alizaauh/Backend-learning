const mongoose=require("mongoose");

const userScheme=mongoose.Schema({

    firstName:{
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

    },
    isAdmin:{
        type:Boolean,
        default: false
    },
})
module.export=mongoose.model("User",userSchema);

