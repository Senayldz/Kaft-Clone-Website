import React, { useState, useEffect } from 'react';
import '../../Css/GiftCard.css'

function GiftCardModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const [formData, setFormData] = useState({
    sender: '',
    senderEmail: '',
    recipient: '',
    recipientEmail: '',
    note: ''
  });

  useEffect(() => {
    if (modal) {
      document.body.classList.add('im-active-modal');
    } else {
      document.body.classList.remove('im-active-modal');
    }
  }, [modal]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Form gönderimi burada işlenir
  };

  return (
    <>
      <button onClick={toggleModal} className="login-button-giftcard">
        Devam Et
      </button>

      {modal && (
        <div className="im-modal">
          <div onClick={toggleModal} className="im-overlay"></div>
          <div className="im-modal-content"><br></br>
          <span className="imclose" onClick={toggleModal}>&times;</span><br></br>
            <h2>Hediye Kartı Bilgileri</h2>
            <form onSubmit={handleSubmit} className="giftcard-form">
              <div className="form-group">
                <input
                  type="text"
                  name="sender"
                  value={formData.sender}
                  onChange={handleChange}
                  placeholder="Gönderen"
                  required
                />
               
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="senderEmail"
                  value={formData.senderEmail}
                  onChange={handleChange}
                  placeholder="Gönderenin Mail Adresi"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleChange}
                  placeholder="Alıcı"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="recipientEmail"
                  value={formData.recipientEmail}
                  onChange={handleChange}
                  placeholder="Alıcının Mail Adresi"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Hediye Notu (Yazmak İstersen)"
                />
              </div>
              <button type="submit" className="login-button-giftcard">
                Sepete Ekle
              </button>
            </form>
            <div className="giftcard-info">
              <p>
                Hediye kartları süresiz olarak kullanılabilir. Kaybolması durumunda hediye kartları için geri ödeme yapılmaz. Hediye kartları geri iade edilemez. Hediye kartları ile birlikte başka bir kupon veya promosyon kodu kullanılamaz.
              </p>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

export default GiftCardModal;
