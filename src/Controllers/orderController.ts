import category from '../Models/category'
import * as Jwt from 'jsonwebtoken';
import { Utils } from '../Utils/utils';
import order from '../Models/order';


export class orderController{
     static async createOrder(req,res,next){
        const {customer_id}=req.user;
        const {cardId,shippingId,taxId}=req.body;
        // const order={
        //     cart_id:cardId,
        //     shipping_id:shippingId,
        //     tax_id:taxId
            

        // }


     }
     static async getOrderInfo(req,res,next){
       const { orderId } = req.params;

       order.findById({_id:orderId}).then((order)=>{
           res.send(order);
       })
   
    }
   
 }