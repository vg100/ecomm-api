import { Router } from "express";
import { orderController } from "../Controllers/orderController";
import { GlobalMiddleWare } from "../GlobalMiddleWare/GlobalMiddleWare";
// import { productValidator } from "../Validators/productValidator";

export class orderRouter{
    router:Router;
   constructor(){
       this.router=Router();
       this.getRouter();
       this.postRouter();
       
       this.deleteRouter();
   }

   getRouter(){
    this.router.get('/:orderId',orderController.getOrderInfo)
   
        }
   postRouter(){
           this.router.post('/',GlobalMiddleWare.authenticate,orderController.createOrder)
     
      }
  
   deleteRouter(){}
}

export default new orderRouter().router