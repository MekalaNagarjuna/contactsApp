const mongoose=require('mongoose');

const ContactsSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    phone:{type:String,required:true}
});

const contact=module.exports=mongoose.model('contact',ContactsSchema);