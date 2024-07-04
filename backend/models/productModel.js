const mongoose = require('mongoose');
//ürün ekle

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    price: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    count: {
        type: Number,
        required: true,
    },

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);
