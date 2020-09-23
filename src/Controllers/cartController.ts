import * as Jwt from 'jsonwebtoken';
import { Utils } from '../Utils/utils';
import Cart from '../Models/cart';
import Product from '../Models/Product';
import Customer from '../Models/customer';


export class cartController{
     static async addtocart(req,res,next){
         var customer=req.customer;
         const pro= req.product_id
         var qty
         if(req.body.qty){
          qty=parseInt(req.body.qty,10);
         }else{
             qty=1;
         }
       const totalprice=qty*pro.price;
      try {
        const cartt = new Cart({
            email:req.user.email,
            product_id:pro,
            qty:qty,
            total_price:totalprice,
            created_at: new Date(),
            updated_at: new Date(),
        });
        customer.cart.push(cartt);
        await Promise.all([customer.save(), cartt.save()]);
        res.send(cartt);
      
      }catch (e) {
     console.log(e)
        next(e);
    }
     

     }

     static async get(req,res,next){

     }
     static async removetocart(req,res,next){
          Cart.findByIdAndDelete(req.body.cart_id,(err)=>{
              if(err){
                  console.log(err);
              }else{
                  console.log("success")
              }
          });
         

     }
    
 }