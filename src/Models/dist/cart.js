"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var CartSchema = new mongoose.Schema({
    email: { type: String, required: true },
    product_id: { type: mongoose.Types.ObjectId, ref: 'Product' },
    qty: { type: Number, required: true, "default": 1 },
    total_price: { type: Number, required: true },
    created_at: { type: Date, required: true, "default": new Date() },
    updated_at: { type: Date, required: true, "default": new Date() }
});
exports["default"] = mongoose.model('Cart', CartSchema);
