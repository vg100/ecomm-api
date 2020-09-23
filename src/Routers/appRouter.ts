import {Router} from 'express'
import { GlobalMiddleWare } from '../GlobalMiddleWare/GlobalMiddleWare';
import { categoryController } from '../Controllers/categoryController';
import { cartController } from '../Controllers/cartController';
import Product from '../Models/Product';
import { cartValidators } from '../Validators/cartValidators';
export class appRouter{
     router:Router;
    constructor(){
        this.router=Router();
        this.getRouter();
        this.postRouter();
        this.deleteRouter();
        this.putRouter();
    }

    getRouter(){
     this.router.get('/',(req,res)=>{
         console.log("called")
     res.json({
         code:200,
         msg:'success',
         responseData:{
             name:'vijat',
             react:'react'
         }
     })




     })
      
    }
    postRouter(){
     
             
}
    deleteRouter(){
    
    }
    putRouter(){
 
    }
}

export default new appRouter().router