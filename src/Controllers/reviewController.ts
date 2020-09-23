import reviewModel from "../Models/review.model";

export class reviewController{
 static async addreview(req,res,next){
    const product = req.product;
    try {
        const review = new reviewModel({
            user_id:req.user.user_id,
            review:req.body.review,
            created_at: new Date(),
            updated_at: new Date(),
        });
      
        product.reviews.push(review);
        await Promise.all([review.save(), product.save()]);
        res.send(review);

    } catch (e) {
        next(e);
    }
 }
 static allreview(req,res,next){
    reviewModel.find().then((review)=>{
            res.send(review);
        }).catch((err)=>{
            next(err);
        })
    }


    static async deletePost(req, res, next) {
        const post = req.post;
        try {
            await post.remove();
            res.send(post);
        } catch (e) {
           next(e);
      }
    }

}