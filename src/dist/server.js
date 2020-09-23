"use strict";
exports.__esModule = true;
exports.Server = void 0;
var express = require("express");
var mongoose = require("mongoose");
var mysql = require("mysql");
var productRouter_1 = require("./Routers/productRouter");
var customerRouter_1 = require("./Routers/customerRouter");
var orderRouter_1 = require("./Routers/orderRouter");
var categoryRouter_1 = require("./Routers/categoryRouter");
var cors = require("cors");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cartRouter_1 = require("./Routers/cartRouter");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.setConfiguration();
        this.setRouter();
        this.error404Handler();
        this.handleErrors();
    }
    Server.prototype.setConfiguration = function () {
        this.configureBodyParser();
        //   this.connectsqlDB();
        this.connectMongoDB();
        // this.handlebarsTemplate();
        // this.setSession();
        // this.connectToFlash();
        this.enableCors();
    };
    Server.prototype.connectsqlDB = function () {
        mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root'
        }).connect(function (err) {
            console.log('mysql connected successfully', err);
        });
    };
    //connecting to mongoDatabase
    Server.prototype.connectMongoDB = function () {
        mongoose.connect('mongodb+srv://vijay701:vijay701@cluster0-bszog.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function (data) {
            console.log('database is connected now');
        })["catch"](function (err) {
            console.log(err);
        });
    };
    //get data in json format from the user
    Server.prototype.configureBodyParser = function () {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
    };
    Server.prototype.enableCors = function () {
        this.app.use(cors({
            allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false
        }));
    };
    // handlebarsTemplate(){
    //     this.app.use(express.static(path.join(__dirname, "../public")));
    //     this.app.set('views', path.join(__dirname, 'views'));
    //     this.app.set('view engine', 'hbs');
    // }
    //All routers 
    Server.prototype.setRouter = function () {
        //     this.app.use('/api/payment',paymentsRouter);
        this.app.use('/api/cart', cartRouter_1["default"]);
        this.app.use('/api/customers', customerRouter_1["default"]);
        this.app.use('/api/categories', categoryRouter_1["default"]);
        this.app.use('/api/products', productRouter_1["default"]);
        this.app.use('/api/orders', orderRouter_1["default"]);
    };
    //handling errors found in any function
    Server.prototype.handleErrors = function () {
        this.app.use(function (error, req, res, next) {
            var errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message,
                status_code: errorStatus
            });
        });
    };
    //handling errors NOT FOUND
    Server.prototype.error404Handler = function () {
        this.app.use(function (req, res) {
            res.status(404).json({
                message: 'Not Found',
                status_code: 404
            });
        });
    };
    return Server;
}());
exports.Server = Server;
