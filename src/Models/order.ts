import * as mongoose from 'mongoose';

const orderSchema=new mongoose.Schema({
    customer_id:{type:Number}, 
    product_id:[{type:String}],
    total_amount:{type:Number},
    created_on:{type:Date},  
    shipped_on:{type:Date},
    status:{type:Number,default:0},  
    comments:{type:String},  
   
    created_at:{type:Date,required:true,default:new Date()},
    updated_at:{type:Date,required:true,default:new Date()},

})

export default mongoose.model('Order',orderSchema);