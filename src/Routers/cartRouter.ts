import {Router} from 'express'
import { GlobalMiddleWare } from '../GlobalMiddleWare/GlobalMiddleWare';
import { categoryController } from '../Controllers/categoryController';
import { cartController } from '../Controllers/cartController';
import Product from '../Models/Product';
import { cartValidators } from '../Validators/cartValidators';
export class cartRouter{
     router:Router;
    constructor(){
        this.router=Router();
        this.getRouter();
        this.postRouter();
        this.deleteRouter();
        this.putRouter();
    }

    getRouter(){
     this.router.get('/',GlobalMiddleWare.authenticate,cartController.get)
      
    }
    postRouter(){
     
        this.router.post('/addtocart',GlobalMiddleWare.authenticate,cartValidators.addtocart(),GlobalMiddleWare.checkError,cartController.addtocart)
        this.router.post('/removetocart',GlobalMiddleWare.authenticate,cartController.removetocart)
      
}
    deleteRouter(){
    
    }
    putRouter(){
 
    }
}

export default new cartRouter().router