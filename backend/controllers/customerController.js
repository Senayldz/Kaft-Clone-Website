const Customer = require('../models/customerModel')
const mongoose = require('mongoose')

// GET ALL CUSTOMERS
const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({}).sort({ createdAt: -1 })
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// GET A SINGLE CUSTOMER
const getCustomer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such customer' })
    }

    try {
        const customer = await Customer.findById(id)
        if (!customer) {
            return res.status(404).json({ error: 'No such customer' })
        }
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// CREATE A NEW CUSTOMER
const createCustomer = async (req, res) => {
    const { name, surname, email, password } = req.body

    let emptyFields = []

    if (!name) {
      emptyFields.push('name')
    }
    if (!surname) {
      emptyFields.push('surname')
    }
    if (!email) {
      emptyFields.push('email')
    }
    if (!password) {
        emptyFields.push('password')
      }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }




    try {
        const customer = await Customer.create({ name, surname, email, password })
        res.status(200).json(customer)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// DELETE A CUSTOMER
const deleteCustomer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such customer' })
    }

    try {
        const customer = await Customer.findOneAndDelete({ _id: id })
        if (!customer) {
            return res.status(404).json({ error: 'No such customer' })
        }
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// UPDATE A CUSTOMER
const updateCustomer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such customer' })
    }

    try {
        const customer = await Customer.findOneAndUpdate({ _id: id }, {
            ...req.body
        })
        if (!customer) {
            return res.status(404).json({ error: 'No such customer' })
        }
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = {
    createCustomer,
    getCustomers,
    getCustomer,
    deleteCustomer,
    updateCustomer
}
