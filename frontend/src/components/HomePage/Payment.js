import React, { useState, useEffect } from 'react';
import '../../Css/Payment.css';
import chip from '../../images/chip.png';
import aprox from '../../images/aprox.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar2';
import Footer from '../Footer';

const Payment = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [validThru, setValidThru] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (event) => {
        let formattedInput = event.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(formattedInput);
    };

    const handleCardHolderChange = (event) => {
        setCardHolder(event.target.value.toUpperCase());
    };

    const handleValidThruChange = (event) => {
        let formattedInput = event.target.value.replace(/[^\d]/g, '').replace(/(.{2})/, '$1/').trim().slice(0, 5);
        setValidThru(formattedInput);
    };

    const handleCvvChange = (event) => {
        let formattedInput = event.target.value.replace(/[^\d]/g, '').slice(0, 3);
        setCvv(formattedInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Ödeme başarıyla gerçekleşti.");
        navigate("/"); // Anasayfaya yönlendirme yapılıyor
    };

    const handleAddAddress = () => {
        navigate("/address"); // Adres ekleme sayfasına yönlendirme yapılıyor
    };

    const handleDeleteAddress = () => {
        setAddressInfo(null);
    };

    const [addressInfo, setAddressInfo] = useState(null);

    useEffect(() => {
        // sessionStorage'den adres bilgilerini al
        const storedAddressInfo = sessionStorage.getItem('addressInfo');
        if (storedAddressInfo) {
            setAddressInfo(JSON.parse(storedAddressInfo));
            // sessionStorage'deki bilgileri temizle (isteğe bağlı)
            sessionStorage.removeItem('addressInfo');
        }
    }, []);

    // Adres bilgilerini formatla
    const formatAddress = (info) => {
        if (!info) return '';
        const { address, postalCode, city, country } = info;
        return [address, postalCode, city, country].filter(Boolean).join(', ');
    };

    return (
        <>
            <Navbar />
            <main className="container">
                <section className="ui">
                    <div className="container-left">
                        <form id="credit-card" onSubmit={handleSubmit}>
                            <div className="number-container">
                                <label>Kart Numarası</label>
                                <input
                                    type="text"
                                    name="card-number"
                                    id="card-number"
                                    maxLength="19"
                                    placeholder="1234 5678 9101 1121"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    required
                                />
                            </div>
                            <div className="name-container">
                                <label>İsim</label>
                                <input
                                    type="text"
                                    name="name-text"
                                    id="name-text"
                                    maxLength="30"
                                    placeholder="SENA YILDIZ"
                                    value={cardHolder}
                                    onChange={handleCardHolderChange}
                                    required
                                />
                            </div>
                            <div className="infos-container">
                                <div className="expiration-container">
                                    <label>Valid-thru</label>
                                    <input
                                        type="text"
                                        name="valid-thru-text"
                                        id="valid-thru-text"
                                        maxLength="5"
                                        placeholder="02/40"
                                        value={validThru}
                                        onChange={handleValidThruChange}
                                        required
                                    />
                                </div>
                                <div className="cvv-container">
                                    <label>CVV</label>
                                    <input
                                        type="text"
                                        name="cvv-text"
                                        id="cvv-text"
                                        maxLength="3"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={handleCvvChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="address-container">
                                <label>Adres</label>
                                {addressInfo ? (
                                    <div>
                                        <input
                                            type="text"
                                            name="address"
                                            className="address-input"
                                            value={formatAddress(addressInfo)}
                                            readOnly
                                        />
                                        <button type="button" onClick={handleDeleteAddress} style={{ backgroundColor: '#d9534f', marginRight: '10px' }}>
                                            Adres Sil
                                        </button>
                                    </div>
                                ) : (
                                    <span className="no-address">Adres KAYDI bulunamadı</span>
                                )}
                                <br></br>
                                <button type="button" onClick={handleAddAddress} style={{ backgroundColor: '#008cb1' }}>
                                    {addressInfo ? 'Adres Güncelle' : 'Adres Ekle'}
                                </button>
                            </div>
                            <input type="submit" value="Ödeme Yap" id="add" />
                        </form>
                    </div>
                    <div className="container-right">
                        <div className="card-btn">
                            <div className="intern">
                                <img className="approximation" src={aprox} alt="approximation" />
                                <div className="card-number">
                                    <div className="number-vl">{cardNumber}</div>
                                </div>
                                <div className="card-holder">
                                    <label>Holder</label>
                                    <div className="name-vl">{cardHolder}</div>
                                </div>
                                <div className="card-infos">
                                    <div className="exp">
                                        <label>valid-thru</label>
                                        <div className="expiration-vl">{validThru}</div>
                                    </div>
                                    <div className="cvv">
                                        <label>CVV</label>
                                        <div className="cvv-vl">{cvv}</div>
                                    </div>
                                </div>
                                <img className="chip" src={chip} alt="chip" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Payment;
