import {body, param} from 'express-validator';
import reviewModel from "../Models/review.model";
import ProductModel from '../Models/Product.model';


export class reviewValidator {
    static addreview() {
        return [body('review', 'Review is Required').isString().exists(),
            param('productId').custom((productId, {req}) => {
                return ProductModel.findOne({_id: productId}).then((product) => {
                    if (product) {
                        req.product = product;
                     
                        return true;
                    } else {
                        throw  new Error('Product Does Not Exist');
                    }
                })
            })]
    }
}