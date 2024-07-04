import { useEffect, useState } from "react";
import '../../Css/Navbar.css';

export default function LanguageSelect(props) {
  const { showModal, setShowModal, content } = props;

  const [country, setCountry] = useState('Türkiye - (TL)');
  const [language, setLanguage] = useState('Türkçe');

  const updateSettings = () => {
    // Güncelleme işlemleri burada yapılacak
    console.log(`Ülke: ${country}, Dil: ${language}`);
  };
  useEffect(() => {
    // call click outside
  }, []);

  return (
    <div
      className={showModal ? "modal-dialog show" : "modal-dialog"}
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <span aria-hidden="true"></span>
          </button>

        </div>


        <h2>Ülke ve Dil Seçimi</h2>
        <p>Dilin Türkçe ve ülken Türkiye (TL) olarak görünüyor, farklı ise şimdi ya da dilediğin zaman menüden güncelleyebilirsin.</p>
        <div className="dropdown">
          <label htmlFor="country-select">Ülke Seçimi:</label>
          <select id="country-select" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="Türkiye - (TL)">Türkiye - (TL)</option>
            {/* Diğer ülke seçenekleri eklenebilir */}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="language-select">Dil Seçimi:</label>
          <select id="language-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="Türkçe">Türkçe</option>
            {/* Diğer dil seçenekleri eklenebilir */}
          </select>
        </div>
        <button onClick={updateSettings} style={{color: '#fff'}}>Güncelle</button>
        <button onClick={updateSettings} className="not-update-btn">Güncellemeden devam et</button>

        <div className="modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
