import { Router } from "express";
import { orderController } from "../Controllers/orderController";
import { paymentsController } from "../Controllers/paymentsController";
export class orderRouter{
    router:Router;
   constructor(){
       this.router=Router();
       this.getRouter();
       this.postRouter();
       
       this.deleteRouter();
   }

   getRouter(){
    this.router.get('/paytm',paymentsController.paytm)
   
        }
   postRouter(){
          
     
      }
  
   deleteRouter(){}
}

export default new orderRouter().router