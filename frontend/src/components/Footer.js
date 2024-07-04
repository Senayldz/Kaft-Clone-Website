import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/main.css';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#d9dbcf' }}>
      <div style={{
        display: 'block',
        width: '100%',
        height: '10vh'
      }}></div>
      <div className="headertextS11">
        <h2>Yenilerden ilk senin haberin olsun</h2>
      </div>
      <hr style={{ width: '500px', margin: 'auto' }} />
      <div className="change">
        <div className="country">Türkiye</div>
        <div className="vertical-line">|</div>
        <div className="language">Türkçe</div>
      </div>
      <div className="tableBox">
        <table>
          <thead>
            <tr>
              <th>Ürünler</th>
              <th>Öne Çıkanlar</th>
              <th>Kaft Dünyası</th>
              <th>Bilgi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href='#'>Tasarım Tişört</a></td>
              <td><a href='#'>2023 Tişört Serileri</a></td>
              <td><a href='#'>KAFT Hakkında</a></td>
              <td><a href='#'>Sipariş Takibi</a></td>
            </tr>
            <tr>
              <td><a href='#'>Basic Tişört</a></td>
              <td><a href='#'>Fujifilm x KAFT</a></td>
              <td><a href='#'>Tasarımcılar</a></td>
              <td><a href='#'>iade ve Değişim</a></td>
            </tr>
            <tr>
              <td><a href='#'>Atlet</a></td>
              <td><a href='#'>Tema x KAFT</a></td>
              <td><a href='#'>KAFT Colors</a></td>
              <td><a href='#'>Sipariş ve Ödeme</a></td>
            </tr>
            <tr>
              <td><a href='#'>Şort</a></td>
              <td><a href='#'>Yeni Ürünler</a></td>
              <td><a href='#'>Lookbook</a></td>
              <td><a href='#'>Satış Noktaları</a></td>
            </tr>
            <tr>
              <td><a href='#'>Pantolon</a></td>
              <td> </td>
              <td><a href='#'>Journery</a></td>
              <td><a href='#'>Ekibe Katıl</a></td>
            </tr>
            <tr>
              <td><a href='#'>Çanta</a></td>
              <td> </td>
              <td><a href='#'>KAFTsoul - Fotoğraflarınız</a></td>
              <td><a href='#'>Yardım</a></td>
            </tr>
            <tr>
              <td><a href='#'>Ceket</a></td>
              <td></td>
              <td><Link to="/GiftCard">Hediye Kartı</Link></td>
              <td><a href='#'>İşlem Rehberi</a></td>
            </tr>
            <tr>
              <td><a href='#'>Tasarım Kapşonlu</a></td>
              <td> </td>
              <td><a href='#'>Tee Machine</a></td>
              <td><a href='#'>KVK ve Gizlilik Politikası</a></td>
            </tr>
            <tr>
              <td><a href='#'>Sweatshirt</a></td>
              <td> </td>
              <td> </td>
              <td><a href='#'>Çerez Ayarları</a></td>
            </tr>
            <tr>
              <td><a href='#'>Bere</a></td>
              <td> </td>
              <td> </td>
              <td><a href='#'>İletişim</a></td>
            </tr>
            <tr>
              <td><a href='#'>Çorap</a></td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="socialMeediaIcons">
        {/* Sosyal medya ikonları */}
      </div>
    </div>
  );
};

export default Footer;
