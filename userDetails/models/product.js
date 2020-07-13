const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    }
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});

const Product = mongoose.model('Product', productSchema);
module.exports = { Product }