const express = require('express')
const {
    createCustomer,
    getCustomers,
    getCustomer,
    deleteCustomer,
    updateCustomer

} = require('../controllers/customerController')

const router = express.Router()

//get all
router.get('/', getCustomers)
//get single
router.get('/:id', getCustomer)
//create new customer
router.post('/', createCustomer)
//delete customer
router.delete('/:id', deleteCustomer)
//update a customer
router.patch('/:id',updateCustomer)
module.exports = router