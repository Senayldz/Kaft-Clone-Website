
const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// POST /check
router.post('/check', passwordController.checkEmail);
// POST /update
router.patch('/update', passwordController.updatePassword);

module.exports = router;
