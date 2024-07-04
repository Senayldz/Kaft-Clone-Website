import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar2';
import Footer from '../Footer';
import FilterComponent from './FilterComponent';
import '../../Css/Productlar.css';

const Productlar = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async (filters = {}) => {
        setLoading(true);
        const queryString = new URLSearchParams(filters).toString();
        const response = await fetch(`/api/products?${queryString}`);
        const data = await response.json();

        if (response.ok) {
            setProducts(data);
        }
        setLoading(false);
    }

    const handleFilter = (filters) => {
        fetchProducts(filters);
    }

    const handleClearFilters = () => {
        setProducts([]);
        fetchProducts();
    }

    return (
        <div>
            <Navbar />
            <div className="content-container">
                <FilterComponent onFilter={handleFilter} onClear={handleClearFilters} />
                {loading ? (
                    <p><center>Ürünler Yükleniyor...</center></p>
                ) : products.length === 0 ? (
                    <p><center>Ürün bulunamadı</center></p>
                ) : (
                    <div id="product">
                        {products.map((product) => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.image} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>
                                    <p>{product.description}</p>
                                    <span>{product.price} TL</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Productlar;
