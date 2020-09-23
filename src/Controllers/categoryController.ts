import Category from '../Models/category'
import * as Jwt from 'jsonwebtoken';
import { Utils } from '../Utils/utils';


export class categoryController{
     static async getAllCategory(req,res,next){
      Category.find().then((category)=>{
         res.send(category);
     }).catch((err)=>{
         next(err);
     })

     }
     static async createCategory(req,res,next){
       const data={
         category_name:req.body.category_name,
         updated_at: new Date()

       }
       let category = await new Category(data).save()
       res.send(category);
   
    }
    static async removeCategory(req,res,next){
           
     }
    static async editCategory(req,res,next){

    }
 }