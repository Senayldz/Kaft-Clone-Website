// authController.js
const Customer = require('../models/customerModel');

const loginCustomer = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const customer = await Customer.findOne({ email });

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        const isMatch = await customer.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isAdmin = email === 'admin@gmail.com';
        res.status(200).json({ message: 'Login successful', customerName: customer.name, isAdmin });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const facebookLoginCustomer = async (req, res) => {
    const { accessToken } = req.body;

    try {
        if (!accessToken) {
            return res.status(400).json({ error: 'Access token is required' });
        }

        const response = await fetch(`https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,email`);
        const userData = await response.json();

        if (!userData || !userData.email) {
            return res.status(400).json({ error: 'Invalid access token or no email provided' });
        }

        let customer = await Customer.findOne({ email: userData.email });

        if (!customer) {
            customer = new Customer({
                facebookId: userData.id,
                name: userData.name.split(' ')[0],  // Name split by first space
                surname: userData.name.split(' ')[1],  // Surname assumed to be second word
                email: userData.email,
            });
            await customer.save();
        }

        const isAdmin = userData.email === 'admin@gmail.com';
        res.status(200).json({ message: 'Login successful', customerName: customer.name, isAdmin });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    loginCustomer,
    facebookLoginCustomer
};