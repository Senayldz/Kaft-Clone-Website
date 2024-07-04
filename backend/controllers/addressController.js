// addressController.js

const Address = require('../models/addressModel');

// Yeni adres eklemek
const createAddress = async (req, res) => {
    try {
        const newAddress = await Address.create(req.body);
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(400).json({ message: 'Adres eklenirken bir hata oluştu.' });
    }
};

// Tüm adresleri getirmek
const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find();
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Adresler getirilirken bir hata oluştu.' });
    }
};

// Adres güncellemek
const updateAddress = async (req, res) => {
    try {
        const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedAddress) {
            return res.status(404).json({ message: 'Adres bulunamadı.' });
        }
        res.status(200).json(updatedAddress);
    } catch (error) {
        res.status(400).json({ message: 'Adres güncellenirken bir hata oluştu.' });
    }
};

// Adres silmek
const deleteAddress = async (req, res) => {
    try {
        const deletedAddress = await Address.findByIdAndDelete(req.params.id);
        if (!deletedAddress) {
            return res.status(404).json({ message: 'Adres bulunamadı.' });
        }
        res.status(200).json({ message: 'Adres başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ message: 'Adres silinirken bir hata oluştu.' });
    }
};

module.exports = {
    createAddress,
    getAddresses,
    updateAddress,
    deleteAddress
    // Diğer işlevleri de ekleyebilirsiniz (güncelleme, silme vb.)
};
