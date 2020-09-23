import * as mongoose from 'mongoose';

const CategorySchema=new mongoose.Schema({
    category_name:{type:String},
    created_at:{type:Date,required:true,default:new Date()},
    updated_at:{type:Date,required:true,default:new Date()},

})

export default mongoose.model('Category',CategorySchema);