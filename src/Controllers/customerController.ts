import customer from '../Models/customer'
import Customer from '../Models/customer'
import * as Jwt from 'jsonwebtoken';
import { Utils } from '../Utils/utils';


export class customerController{
     static async login(req,res,next){
     const {password,email}=req.query;
     const customer=req.customer;
           console.log(customer)
     try {
         await Utils.comparePassword({
        plainPassword: password,
        encryptedPassword: customer.password
     });
         const token = Jwt.sign({email: email, customer_id:customer._id},
         'secret', {expiresIn: '120d'});
         const data = {token: token, customer: customer};
          res.send(data);
          console.log(data.token);
          
        //  res.render('p',{data:data})
        
       } catch (e) {
      
         next(e);
       //  res.send("invalid username or password")
      }

     }
     static async register(req,res,next){
     const {fullname,email,password} = req.body;
     const hash = await Utils.encryptPassword(password);
      try {
        const data={
            fullName:fullname,
            email:email,
            password:hash,
            created_at: new Date(),
            updated_at: new Date()
     }
      
     let user=await new customer(data).save()
     res.send(user);
       
     } catch (e) {
        next(e);
     }

    }
    static async UpdateCustomer(req,res,next){
        const customer_id = req.user.customer_id;
        
     try{
        const user = await customer.update({_id: customer_id},req.body,{new:true})
      res.send(user);
     }catch (e) {
         next(e);
    }

    }
    static async UpdateCreditCard(req,res,next){
        
        const customer_id = req.user.customer_id;
        const {credit_card}=req.body;
        try{
           const user = await customer.update({_id: customer_id},{
               credit_card,
               updated_at: new Date()
           },{new:true})
         res.send(user);
        }catch (e) {
           next(e);
        }
    }

    static async UpdateCustomerAddress(req,res,next){
      
        const customer_id = req.user.customer_id;
        const {address_1,address_2}=req.body;
        try{
           const user = await customer.update({_id: customer_id},{
            address_1,
            address_2,
            updated_at: new Date()
        },{new:true})
           
        res.send(user);
        }catch (e) {
           next(e);
               }

    }

        static getCustomer(req,res,next){
            const customer_id = req.params.customerId;
            console.log(customer_id);
            
            Customer.findOne({_id:customer_id})
            .populate({
                path:"cart",
                select:"product_id qty total_price",
            populate:{
            path:"product_id",
            select:"product_name price image_1",
            
        }
            })
           
            .then((customer)=>{
                if(customer){
                    res.send(customer);
                    console.log(customer);
                    
                }
            })
                .catch((err)=>{
                    next(err);
                    console.log(err);
                })


              
           
        }

        static async deleteallusers(req,res,next){
                     const users=[]

           customer.find().then(async (product)=>{
                   product.map(id=>{
                       users.push(id._id)
                   })
                   if(users.length >0){
                    await customer.remove({'_id':{'$in':users}})
                    res.send({
                        message:"deleted successfully",
                        status:200
                    });
                   }else{
                    res.send({
                        message:"not found",
                        status:404
                    });
                   
                   }
                   
                }).catch((err)=>{
                    next(err);
                })

        }
}
