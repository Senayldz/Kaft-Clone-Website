import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar2';
import '../Css/ContactPage.css';
import Footer from '../components/Footer';

function ContactPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini işleme logic burada olabilir

    // Mesaj gönderildi uyarısı ve ana sayfaya yönlendirme
    alert('Mesajınız gönderildi.');
    navigate('/');
  };

  return (
    <>
      <div>
        <div className="App">
          <div className="Navbar">
            <Navbar />
          </div>
          <div className="contact-page-content">
            <div className="contact-form">
              <h1>İletişim</h1><br />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Adınız Soyadınız:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email">E-posta Adresiniz:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Konu:</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesajınız:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gönder</button>
              </form>
              <div className="adres">
                <br />
                <br />
                <h2>Adreslerimiz</h2>
                <p>Ofis: Konaklar Mah. Akasyalı Sk. No:12 34330 Beşiktaş/İstanbul Türkiye</p>
                <p>Depo: Yakuplu Mah. Bakırcılar ve Pirinççiler San. Sit. Karanfil Cad. No:5 Kat:1 İstanbul, Türkiye</p>
              </div>
              <br />
              <div className="iletisim-bilgileri">
                <h2>İletişim Bilgileri</h2>
                <p>Mersis No: 0487052510200026</p>
                <p>KEP: <a href="mailto:kaft@hs01.kep.tr">kaft@hs01.kep.tr</a></p>
                <p>info@kaft.com</p>
                <p>order@kaft.com</p>
                <p>Müşteri Hizmetleri Tel: <a href="tel:+902122673634">+90 212 2673634</a></p>
                <p>Ofis Tel: <a href="tel:+902128432349">+90 212 8432349</a></p>
                <p>Faks: +90 212 2673638</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
