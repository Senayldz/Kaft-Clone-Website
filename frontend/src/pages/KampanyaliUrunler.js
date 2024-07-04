import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar2';
import Footer from '../components/Footer';
import FilterComponent from '../components/Products/FilterComponent';
import '../Css/KampanyaliUrunler.css';

const KampanyaliUrunler = () => {
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
            // En pahalı ürünü seçme ve sıralama
            const sortedProducts = data.sort((a, b) => b.price - a.price).slice(0, 1);
            setProducts(sortedProducts);
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

    const calculateDiscountedPrice = (price) => {
        return Number(price);
    }

    return (
        <div>
            <Navbar />
            <div className="content-container">
                <FilterComponent onFilter={handleFilter} onClear={handleClearFilters} />
                   {/* Üst kısımdaki yazı */}
                <div className="top-text">
                    <p><strong>2'li alımda 2. Ürün Yüzde 50 indirimli</strong></p>
                </div>
                {loading ? (
                    <p><center>Ürünler Yükleniyor...</center></p>
                ) : products.length === 0 ? (
                    <p><center>Kampanyalı ürün bulunamadı</center></p>
                ) : (
                    <div id="product">
                        {products.map((product, index) => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.image} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>
                                    <p>{product.description}</p>
                                    <span className="normal-price">Tekli Fiyat: {Number(product.price).toFixed(2)-(Number(product.price).toFixed(2)*(1/3))} TL</span>
                                    <br />
                                    {/* Kampanyalı ürün fiyatının daha belirgin gösterilmesi */}
                                    <span className="discounted-price">
                                        <strong>2'li alım fiyatı:</strong> {calculateDiscountedPrice(Number(product.price)).toFixed(2)} TL
                                    </span>
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

export default KampanyaliUrunler;
