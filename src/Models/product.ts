import * as mongoose from 'mongoose';

const ProductSchema=new mongoose.Schema({
    product_name:{type:String},
    description:{type:String},
    price:{type:Number},
    discounted_price:{type:Number},
    category:{type:String},
    image_1:{type:String},
    image_2:{type:String},
    thumbnail:{type:String},
    display:{type:Boolean,default:false},
    created_at:{type:Date,required:true,default:new Date()},
    updated_at:{type:Date,required:true,default:new Date()},

})

export default mongoose.model('Product',ProductSchema);