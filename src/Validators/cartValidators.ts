import { body,query } from "express-validator";
import customer from "../Models/customer";
import Product from "../Models/Product";


export class cartValidators{
   static addtocart(){
        return [body('product_id', 'product is Required').custom((product_id,{req}) => {
            return customer.findOne({email:req.user.email}).then(customer => {
                           
                 return Product.findOne({_id: product_id}).then(product_id => {
                    if (product_id) {
                       
                        req.product_id = product_id;
                        req.customer=customer;
                         return true;
                    } else {
                        throw  new Error('product Does Not Exist');
                    }
                })
            })

      
        })
                
            ];
    }
}