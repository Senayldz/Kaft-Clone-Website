import React, { useState } from "react";
import "../../Css/Address.css";
import axios from "axios";

function AddressField(props) {
  const { name, type, placeholder, value, onChange, className } = props;

  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <input
          className={`input ${className}`}
          type={type}
          placeholder={placeholder}
          value={value} // state'den gelen değeri input'un value'suna bağla
          onChange={onChange} // input değeri değiştiğinde state'i güncelle
        />
      </div>
    </div>
  );
}

function AddressForm() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://kaft-website-clone-main.onrender.com/api/address', {
        address,
        postalCode,
        city,
        country
      });
      console.log('Address added successfully');

      // Adres bilgilerini sessionStorage'e kaydet
      sessionStorage.setItem('addressInfo', JSON.stringify({ address, postalCode, city, country }));

      // /payment sayfasına yönlendir
      window.location.href = '/payment';
    } catch (err) {
      console.error('Error adding address:', err);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="box">
          <AddressField
            name="Adres"
            type="text"
            placeholder="eg. Menteşe/Muğla"
            className="small-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <AddressField
            name="Posta kodu"
            type="number"
            placeholder=""
            className="small-input postal-input"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <div className="field">
            <label>Şehir:</label>
            <div className="control">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="large-select"
              >
                <option value="">Şehir Seçin</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Ülke:</label>
            <div className="control">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="large-select"
              >
                <option value="">Ülke Seçin</option>
                <option value="turkey">Türkiye</option>
                <option value="usa">Amerika Birleşik Devletleri</option>
                <option value="uk">Birleşik Krallık</option>
              </select>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Onayla</button>
              {/* Diğer butonlar buraya eklenebilir */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
