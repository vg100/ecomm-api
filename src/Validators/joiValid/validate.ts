import * as Joi from '@hapi/joi'




export class validate {
    static async adduser(req,res,next){
       
             const valid= await Joi.object().keys({
                fullname:Joi.string().required(),
                email:Joi.string().email().required(),
                password:Joi.string().required()
            }).validate(req.body)
             if(valid.error){
                 res.json({
                     success:0,
                     message:valid.error.details[0].message
                 })
             }else{
                 next()
             }
    
    }
}

