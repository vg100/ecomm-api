import {Router} from 'express'
// import {customerValidators} from '../Validators/customerValidators'
import { GlobalMiddleWare } from '../GlobalMiddleWare/GlobalMiddleWare';
import { categoryController } from '../Controllers/categoryController';
export class categoryRouter{
     router:Router;
    constructor(){
        this.router=Router();
        this.getRouter();
        this.postRouter();
        this.deleteRouter();
        this.putRouter();
    }

    getRouter(){
       this.router.get('/categories',categoryController.getAllCategory)
      
    }
    postRouter(){
     
        this.router.post('/category',categoryController.createCategory);
      
    }
   
    deleteRouter(){
        this.router.delete('/removecategory',categoryController.removeCategory)
    }
    putRouter(){
   this.router.put('/editcategory',categoryController.editCategory) 
    }
}

export default new categoryRouter().router