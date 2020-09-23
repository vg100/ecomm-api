import * as mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
           productName:{type:String,required:true},
           rating:{type:Number,defalut:0},
           price:{type:Number,required:true},
           availableOffers:{
               offerName:[{type:String,default:''}],
           },
           size:[{type:Number,default:''}],
           highlights:{type:String,default:''},
           paymentOptions:{type:String,default:''},
           impNotes:{type:String,default:''},
           seller:{type:String,default:''},
           productDescription:{
            specifications:{type:String,default:''}
           },
           reviews: [{type: mongoose.Types.ObjectId, ref: 'reviews'}],
           created_at:{type:Date,required:true,default:new Date()},
           updated_at:{type:Date,required:true,default:new Date()},

})

export default mongoose.model('products',productSchema);