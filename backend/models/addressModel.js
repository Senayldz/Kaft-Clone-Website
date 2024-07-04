// models/address.js

const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    address: String,
    postalCode: Number,
    city: String,
    country: String
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;
