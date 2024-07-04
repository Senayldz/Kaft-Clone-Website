const mongoose = require('mongoose');
const crypto = require('crypto');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Password comparison method
customerSchema.methods.comparePassword = function(candidatePassword) {
    const hash = crypto.scryptSync(candidatePassword, 'salt', 64);
    return this.password === hash.toString('hex');
};

// Hash password before saving
customerSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = crypto.scryptSync(this.password, 'salt', 64).toString('hex');
    }
    next();
});

module.exports = mongoose.model('Customer', customerSchema);
