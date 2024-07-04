const Product = require('../models/productModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer storage ve file filter yapılandırması
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    // Yalnızca resim dosyalarını kabul et
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Yalnızca resim dosyaları kabul edilir!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

// Yeni ürün ekle
exports.createProduct = [
    upload.single('image'),
    async (req, res) => {
        try {
            const product = new Product({
                title: req.body.title,
                image: req.file.path,
                description: req.body.description,
                content: req.body.content,
                price: req.body.price,
                color: req.body.color,
                count: req.body.count
            });
            const savedProduct = await product.save();
            res.status(201).json(savedProduct);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
];

// Tüm ürünleri listeleme (filtreleme ile)
exports.getAllProducts = async (req, res) => {
    try {
        const { minPrice, maxPrice, search, ...otherFilters } = req.query;

        const filters = { ...otherFilters };

        if (minPrice || maxPrice) {
            filters.price = {};
            if (minPrice) filters.price.$gte = Number(minPrice);
            if (maxPrice) filters.price.$lte = Number(maxPrice);
        }

        if (search) {
            filters.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ];
        }

        const products = await Product.find(filters);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Belirli bir ürünü alma
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Ürünü güncelleme
exports.updateProduct = async (req, res) => {
    try {
        const updateData = {
            ...req.body,
            ...(req.file && { image: req.file.path }) // Yeni resim yüklenmişse, image alanını güncelle
        };

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }

        // Yeni resim yüklendiğinde eski resmi sil
        if (req.file && product.image) {
            fs.unlink(product.image, (err) => {
                if (err) {
                    console.error('Eski resim silinemedi:', err);
                }
            });
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Ürünü silme
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }
        res.status(200).json({ message: 'Ürün silindi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
