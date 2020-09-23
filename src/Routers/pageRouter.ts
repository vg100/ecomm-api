import {Router} from 'express'
// import {customerValidators} from '../Validators/customerValidators'
import { GlobalMiddleWare } from '../GlobalMiddleWare/GlobalMiddleWare';
import { categoryController } from '../Controllers/categoryController';
export class pageRouter{
     router:Router;
    constructor(){
        this.router=Router();
        this.getRouter();
     
    }

    getRouter(){
       this.router.get('/',(req,res)=>{
             res.render('p');

       })
    }
    
}

export default new pageRouter().router