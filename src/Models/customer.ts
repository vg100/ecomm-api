import * as mongoose from 'mongoose';

const customerSchema=new mongoose.Schema({
    fullName:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},   
    cart:[{type: mongoose.Types.ObjectId,ref: 'Cart',default:null}],
    credit_card:{type:String},
    address_1:{type:String},
    address_2:{type:String},
    city:{type:String},
    region:{type:String},
    postal_code:{type:String},  
    country:{type:String},  
    shipping_region_id:{type:Number,default:'1'},
    mob_phone:{type:Number},         
    created_at:{type:Date,required:true,default:new Date()},
    updated_at:{type:Date,required:true,default:new Date()},

})

export default mongoose.model('Customer',customerSchema);