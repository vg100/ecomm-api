import {Router} from 'express'
import {customerValidators} from '../Validators/customerValidators'
import { GlobalMiddleWare } from '../GlobalMiddleWare/GlobalMiddleWare';
import { customerController } from '../Controllers/customerController';
import {validate} from '../Validators/joiValid/validate'
export class customerRouter{
    router:Router;
    constructor(){
        this.router=Router();
        this.getRouter();
        this.postRouter();
        this.patchRouter();
        this.deleteRouter();
        this.putRouter();
    }

    getRouter(){
        this.router.get('/login',customerValidators.login(),GlobalMiddleWare.checkError,customerController.login)
        this.router.get('/:customerId',customerController.getCustomer)
    }
    postRouter(){
     
         this.router.post('/register',customerValidators.register(),GlobalMiddleWare.checkError,customerController.register);
       // this.router.post('/register',validate.adduser,customerController.register);
       
    }
    patchRouter(){

    }
    deleteRouter(){
        this.router.delete('/deleteallusers',customerController.deleteallusers)
    }
    putRouter(){
   this.router.put('/',GlobalMiddleWare.authenticate,GlobalMiddleWare.checkError,customerController.UpdateCustomer)
   this.router.put('/creditCard',GlobalMiddleWare.authenticate,GlobalMiddleWare.checkError,customerController.UpdateCreditCard)
   this.router.put('/address',GlobalMiddleWare.authenticate,GlobalMiddleWare.checkError,customerController.UpdateCustomerAddress)
   
    }
}

export default new customerRouter().router