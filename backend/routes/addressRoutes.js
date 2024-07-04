// addressRoutes.js

const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// Yeni adres eklemek için POST isteği
router.post('/', addressController.createAddress);

// Tüm adresleri getirmek için GET isteği
router.get('/', addressController.getAddresses);

// Belirli bir adresi güncellemek için PUT isteği
router.put('/:id', addressController.updateAddress);

// Belirli bir adresi silmek için DELETE isteği
router.delete('/:id', addressController.deleteAddress);

module.exports = router;
