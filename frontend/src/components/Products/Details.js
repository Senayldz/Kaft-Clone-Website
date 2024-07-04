import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../Css/Details.css';
import Navbar from '../../components/Navbar2';
import Footer from '../../components/Footer';
import Accordion from './Accordion';
import ImageSlider from './ImageSlider';
import { useCart } from '../../context/CartContex';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart, notification } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Ürün bulunamadı.');
                }
                const json = await response.json();
                setProduct(json);
            } catch (error) {
                console.error('Ürün getirme hatası:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    //accordion data
    const data = [
        {
            id: 1,
            label: "Kumaş Kalitesi",
            renderContent: () => <p>%100 pamuklu, 2 iplik diye bilinen, bir tık kalın ama hava geçiren bir penyedir.

                Better Cotton Initiative partneri olarak, ürünlerimizde Better Cotton Initiative'in sürdürülebilir pamuk üretimi standartlarına öncelik veriyoruz.

                Bu tasarımda kullanılan materyaller, tekstil ürünlerinin insan sağlığı açısından zararlı madde içermediğini belgeleyen uluslararası sertifikalandırma sistemi olan OEKO-TEX® tarafından onaylanmış ve sertifikalandırılmıştır.

                Tişört önceden yıkanmış olarak gelir, böylece önerilen yıkama sonrası çekme yapma olasılığı çok düşüktür.

                Kumaş üretiminde kullanılan boyalar, sertifikalı ve güvenlidir; insan sağlığına zarar vermez.

                Tasarımlarımızda hiçbir hayvansal materyal kullanılmamaktadır.</p>
        },
        {
            id: 2,
            label: "Baskı Kalitesi",
            renderContent: () => <p>Emprime / Serigrafi tekniğini kullanıyoruz. Bu, hava alan bir baskı türüdür. Dokunduğunuzda plastik değil, çoğunlukla yumuşak bir his verir, çünkü kumaşla tamamen bütünleşiktir.

                Baskılarımız sonsuza kadar solmaz diye bir iddiamız yok, ama çoğu baskılı tişörtten çok daha uzun ömürlü olacağına emin olabilirsin.

                Kullanılan boyalar tamamen sertifikalı ve sağlıklıdır.</p>
        },
        {
            id: 3,
            label: "Detaylar",
            renderContent: () => <p>Yıkama talimatları için kullanılan kaba etiketler bizde yok. Etiketi kaldırdık, talimatları baskıyla yazdık. Artık rahatsız edemeyecek.

                Ensesinde süet puftan yapılma, az belli olan, küçük bir KAFT logosu bulunur.</p>
        },
        {
            id: 4,
            label: "Sürdürülebilirlik",
            renderContent: () => <p>Lokal üreticilerimizle birlikte, zamansız hikayeleri ve uzun yaşam döngüsü olan tasarımları hayata geçiriyoruz. Bunu yaparken de doğaya ve insana saygılı üretim modellerini merkeze alıyoruz. Bu yönde yaptığımız tüm çalışmalar hakkında detaylı bilgi almak için sürdürülebilirlik sayfamızı ziyaret edebilirsin.</p>
        },
        {
            id: 5,
            label: "İade & Değişim",
            renderContent: () => <p>Ürünlerimizin arkasındayız. Bu yüzden kullanıcılarımıza %100 iade ve değişim garantisi veriyoruz.

                Herhangi bir sebepten dolayı üründen memnun kalmazsan, 1 yıl içinde iade veya değişim için gönderebilirsin.

                Türkiye içi kargo masrafları da bize ait. Geri gönderimini ücretsiz, Kaft karşı ödemeli olarak, anlaşmalı kargo firmalarımız ile yapabilirsin.

                Aklına takılan herhangi bir şey olursa bize iletişim kanallarımızdan her zaman ulaşabilirsin.</p>
        }
    ];


    return (
        <>
            <Navbar />
            <div className="product-details-container">
                <div className="details">
                    <div className="image-container">
                        <img
                            src={`/${product.image}`}
                            alt={product.title}
                            onError={(e) => {
                                console.error("Error loading image:", e.target.src);
                                e.target.onerror = null;
                                e.target.src = "/images/fallback-image.jpg";
                            }}
                        />
                    </div>
                    <div className="info-container">
                        <h1>{product.title}</h1>
                        <p className="description">{product.description}</p>
                        <p className="label">Beden</p>
                        <div className="sizes">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                            <span>2XL</span>
                        </div>
                        <p className="label">Renk</p>
                        <div className='colors'>
                            {product.color}
                            <div className='outer-circle' style={{ borderColor: product.color }}>
                                <div className='inner-circle' style={{ backgroundColor: product.color }}></div>
                            </div>
                        </div>
                        <div className="price-and-cart">
                            <p className="price">{product.price} TL</p>

                            {/* Sepete ekleme işlemi */}
                            <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
                                Sepete Ekle
                            </button>
                            {notification && <div className="notification">{notification}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <Accordion items={data} keepOthersOpen={false} />
            <React.StrictMode>
                <ImageSlider />
            </React.StrictMode>
            <Footer />
        </>
    );
};

export default Details;
