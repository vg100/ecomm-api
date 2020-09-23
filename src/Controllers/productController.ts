import Product from "../Models/Product";

export class productController{
    static async getAllProducts(req,res,next){
        Product.find().then((product)=>{
                res.send(product);
            }).catch((err)=>{
                next(err);
            })
       
        }
    static async createOneProduct(req,res,next){   
        console.log("create product");
        
        const {category,product_name,price,description,discounted_price,image_1,thumbnail}=req.body;

        try {
        const data={
            product_name:product_name,
            description:description,
            price:price,
            discounted_price:discounted_price,
            category:category,
            image_1:image_1,
            thumbnail:thumbnail,
            created_at: new Date(),
            updated_at: new Date()
        }
       
       let product = await new Product(data).save()
       res.send(product);
    } catch (e) {
        next(e);
    }
    }

    static async getProductsInCategory(req,res,next){
            const category=req.params.category;
            try {
            Product.find({category:category}).then((product)=>{
                res.send(product)
            })
        } catch (e) {
            next(e);
        }
            }


       static  async searchProducts(req,res,next){
        try {
          await Product.find({product_name:req.query.search})
          .then((product)=>{
              if(product.length > 1){
                res.send({numberFound:product.length,product:product});
              }else{
                res.send({
                    message:"Product Not Found"
                }) 
              }
             
          })
        } catch (e) {
            next(e);
        }
            }
            static async getSingleProduct(req,res,next){
                const product_id=req.params.product_id;
                try {
                Product.find({_id:product_id}).then((product)=>{
                    res.send(product)
                })
            } catch (e) {
                next(e);
            }
                }
}