import React, { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../Css/GiftCard.css';
import arkaplan from '../../images/hediyekartı.jpg';

import Modal from '../HomePage/GiftCardModal';
import list from '../Products/GiftCardData';
import GiftCardCards from '../Products/GiftCardCards';
import { useCart } from '../../context/CartContex'


function GiftCard({ handleClick }) {
    const [scrolled, setScrolled] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const dateInputRef = useRef(null);
    const { notification } = useCart();

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.pageYOffset + 800,
            behavior: 'smooth', // smooth kaydırma efekti eklenmiş
        });
        setScrolled(true);
    };
    const HandleScroll = (scrollOffset) => {
        window.scrollTo({
            top: window.pageYOffset + scrollOffset,
            behavior: 'smooth', // smooth kaydırma efekti eklenmiş
        });
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleButtonClick = () => {
        dateInputRef.current.focus();
    };


    return (
        <div>
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${arkaplan})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh'
                }}
            >
                <br /><br /><br /><br /><br /><br /><br />
                <div style={{ color: 'white', height: '5vh', width: '10%', marginLeft: '80px', marginTop: '20px', textAlign: 'left' }}>
                    <h3>KAFT Gift Card</h3>
                </div>
                <div style={{ color: 'white', height: '20vh', width: '47%', marginLeft: '80px', marginTop: '20px', textAlign: 'left' }}>
                    <h1>Sevdiğin birisi için yüzlerce tasarım ve bir o kadar hikaye arasından doğru olanı seçmekte zorlandığın anlar olabilir.</h1>
                </div>
                <div style={{ color: 'white', height: '15vh', width: '47%', marginLeft: '80px', marginTop: '20px', textAlign: 'left' }}>
                    <h3>İşte böyle anlarda seçimi O’na bırakmak için bir KAFT GIFT CARD gönderebilirsin. Böylelikle KAFT dünyasından dilediği ürüne kendisi karar verebilir.</h3>
                </div>

                <div style={{ position: 'absolute', bottom: '70px', left: '12%', transform: 'translateX(-50%)', textAlign: 'left' }}>

                    <button
                        className={scrolled ? 'scroll-button scrolled' : 'scroll-button'}
                        onClick={handleScrollDown}
                        style={{ bottom: '20px', zIndex: '100', width: '200px', height: '50px', borderRadius: 0, backgroundColor: '#5faee3', color: 'white' }}
                    >
                        Bir Kart Satın Al
                    </button>
                </div>
            </div>




            <div style={{ background: '#f2f3ef', height: '250vh' }}>
                <br></br><br></br><br></br><br /><br /><br /><br /><br /><br />
                <div style={{ textAlign: 'center' }}>
                    <h1>HEDİYE ETMEK İSTEDİĞİN TUTAR</h1>
                    <h4>4 farklı seçenekten, bütçene göre dilediğini seçebilirsin.</h4>
                </div>

                <br></br><br></br><br></br><br /><br /><br /><br /><br /><br />






                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: '100%' }}>
                        {list.map((item) => (
                            <GiftCardCards key={item.id} item={item} handleClick={handleClick} />
                        ))}
                    </section>
                </div>

                {notification && <div style={{ position: 'fixed', top: '10px', right: '10px', background: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>{notification}</div>}

                <br></br><br></br><br></br><br /><br /><br /><br /><br /><br /><br></br><br></br><br></br><br /><br /><br /><br /><br /><br />
                <div style={{ textAlign: 'center' }}>
                    <br></br><br></br>
                    <Modal />
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <Footer />
        </div >
    )
}

export default GiftCard;
