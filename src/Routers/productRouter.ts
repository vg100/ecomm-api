import { Router } from "express";
import { productController } from "../Controllers/productController";
// import { productValidator } from "../Validators/productValidator";

export class productRouter{
    router:Router;
   constructor(){
       this.router=Router();
       this.getRouter();
       this.postRouter();
       
       this.deleteRouter();
   }

   getRouter(){
       this.router.get('/allproduct',productController.getAllProducts)
       this.router.get('/search',productController.searchProducts)
       this.router.get('/incategory/:category',productController.getProductsInCategory)
       this.router.get('/:product_id',productController.getSingleProduct)
        }
   postRouter(){
       this.router.post('/addproduct',productController.createOneProduct)
      }
  
   deleteRouter(){}
}

export default new productRouter().router