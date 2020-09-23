"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.productController = void 0;
var Product_1 = require("../Models/Product");
var productController = /** @class */ (function () {
    function productController() {
    }
    productController.getAllProducts = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                Product_1["default"].find().then(function (product) {
                    res.send(product);
                })["catch"](function (err) {
                    next(err);
                });
                return [2 /*return*/];
            });
        });
    };
    productController.createOneProduct = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, category, product_name, price, description, discounted_price, image_1, thumbnail, data, product, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("create product");
                        _a = req.body, category = _a.category, product_name = _a.product_name, price = _a.price, description = _a.description, discounted_price = _a.discounted_price, image_1 = _a.image_1, thumbnail = _a.thumbnail;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        data = {
                            product_name: product_name,
                            description: description,
                            price: price,
                            discounted_price: discounted_price,
                            category: category,
                            image_1: image_1,
                            thumbnail: thumbnail,
                            created_at: new Date(),
                            updated_at: new Date()
                        };
                        return [4 /*yield*/, new Product_1["default"](data).save()];
                    case 2:
                        product = _b.sent();
                        res.send(product);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        next(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    productController.getProductsInCategory = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var category;
            return __generator(this, function (_a) {
                category = req.params.category;
                try {
                    Product_1["default"].find({ category: category }).then(function (product) {
                        res.send(product);
                    });
                }
                catch (e) {
                    next(e);
                }
                return [2 /*return*/];
            });
        });
    };
    productController.searchProducts = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_1["default"].find({ product_name: req.query.search })
                                .then(function (product) {
                                if (product.length > 1) {
                                    res.send({ numberFound: product.length, product: product });
                                }
                                else {
                                    res.send({
                                        message: "Product Not Found"
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        next(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    productController.getSingleProduct = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var product_id;
            return __generator(this, function (_a) {
                product_id = req.params.product_id;
                try {
                    Product_1["default"].find({ _id: product_id }).then(function (product) {
                        res.send(product);
                    });
                }
                catch (e) {
                    next(e);
                }
                return [2 /*return*/];
            });
        });
    };
    return productController;
}());
exports.productController = productController;
