import * as express from 'express'
import * as mongoose from 'mongoose';
import * as mysql from 'mysql';
import productRouter  from './Routers/productRouter';
import customerRouter from './Routers/customerRouter';
import orderRouter from './Routers/orderRouter';
import categoryRouter from './Routers/categoryRouter';
import * as cors from 'cors';
// import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import paymentsRouter from './Routers/paymentsRouter';
import  pageRouter from './Routers/pageRouter';
import cartRouter from './Routers/cartRouter';
import  appRouter  from './Routers/appRouter';

export class Server {
    app:express.Application=express();
    constructor(){
        this.setConfiguration();
        this.setRouter();
        this.error404Handler();
        this.handleErrors(); 
    }
    setConfiguration(){
        this.configureBodyParser();
      //   this.connectsqlDB();
       this.connectMongoDB();
        // this.handlebarsTemplate();
        // this.setSession();
        // this.connectToFlash();
        this.enableCors();
    }
    connectsqlDB(){
        mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            
        }).connect((err)=>{
            console.log('mysql connected successfully',err)
        });
        
    }
     //connecting to mongoDatabase
    connectMongoDB(){
        mongoose.connect('mongodb+srv://vijay701:vijay701@cluster0-bszog.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true })
        .then((data)=>{
                console.log('database is connected now');
        }).catch((err)=>{
                console.log(err);
        })
    }
      //get data in json format from the user
    configureBodyParser(){
       this.app.use(bodyParser.urlencoded({extended:true}))
       this.app.use(bodyParser.json())
       this.app.use(express.json())
    //    this.app.use(morgan('tiny'))
    }
    enableCors(){
        this.app.use(cors( {
            allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false
        }));
    }

   
    // handlebarsTemplate(){
    //     this.app.use(express.static(path.join(__dirname, "../public")));
    //     this.app.set('views', path.join(__dirname, 'views'));
    //     this.app.set('view engine', 'hbs');
    // }
    //All routers 
    setRouter(){                                                                                                                                                                                                                                    
    
          
    //     this.app.use('/api/payment',paymentsRouter);
          this.app.use('/api/cart',cartRouter);
          this.app.use('/api/customers',customerRouter);
          this.app.use('/api/categories',categoryRouter);
        this.app.use('/api/products', productRouter);
        this.app.use('/api/orders', orderRouter);


    // for native app

    this.app.use('/api/app',appRouter)


        
    }   
    //handling errors found in any function
    handleErrors(){
        this.app.use((error:any,req:any,res:any,next:any):void=>{
            let errorStatus=req.errorStatus || 500
         res.status(errorStatus).json({
             message:error.message,
             status_code:errorStatus
         })
        })
        
    }
    //handling errors NOT FOUND
    error404Handler(){
        this.app.use((req,res)=>{
            res.status(404).json({
                message:'Not Found',
                status_code:404,
            })
        });
    }


}


