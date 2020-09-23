import { body,query } from "express-validator";
import Product from "../Models/product";


export class productValidator{
  
    static search() {
        return [
        query('search', 'Required').isEmail().custom((search, {req}) => {
            return Product.find({product_name: search}).then(product => {
                if (product) {
                    req.product = product;
                    return true;
                } else {
                    throw new Error('product Does Not Exist');
                }
            })
        })
    ];
}
static addtocart() {
    return [
    body().custom(({req}) => {
        return Product.find({_id:req.params.productID}).then(product => {
            if (product) {
                req.product = product;
                return true;
            } else {
                throw new Error('product Does Not Exist');
            }
        })
    })
];
}
}
