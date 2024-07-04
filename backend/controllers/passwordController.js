// passwordController.js

const Customer = require('../models/customerModel');

// checkEmail adında bir asenkron fonksiyon oluşturuyoruz
const checkEmail = async (req, res) => {
    // İstekten gelen e-posta adresini alıyoruz
    const { email } = req.body;

    try {
        // E-posta adresi boş ise 400 hatası dönüyoruz
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Veritabanında e-posta adresine sahip müşteri arıyoruz
        const customer = await Customer.findOne({ email });

        // Eğer müşteri bulunamazsa 404 hatası dönüyoruz
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        // Müşteri bulunursa başarılı mesajı ve müşteri adını dönüyoruz
        res.status(200).json({ message: 'Check is successful', customerName: customer.name });
    } catch (error) {
        // Herhangi bir hata oluşursa 500 hatası dönüyoruz
        res.status(500).json({ error: error.message });
    }
};
const updatePassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        if (!email || !newPassword) {
            return res.status(400).json({ error: 'Email and newPassword are required' });
        }

        const customer = await Customer.findOne({ email });

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        // Şifre güncelleme işlemi burada gerçekleştirilebilir, örneğin:
        customer.password = newPassword;
        await customer.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// checkEmail fonksiyonunu dışa aktarıyoruz
module.exports = {
    checkEmail,
    updatePassword
};
