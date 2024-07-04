// LoginModal.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import FacebookModal from '../HomePage/FacebookModal'
import GoogleModal from '../HomePage/GoogleModal'

function LoginModal({ onClose }) {


  const [error, setError] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Giriş başarısız oldu.');
      }

      const data = await response.json();
      console.log('Kullanıcı girişi başarılı:', data);

      setWelcomeMessage(`Hoş geldin, ${data.customerName}!`);

      // Kullanıcıyı oturum durumuna kaydet
      login(data);

      if (data.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/');
      }

    } catch (error) {
      console.error('Giriş hatası:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3 style={{ width: '100px', marginLeft: '30px', color: 'black', float: 'left', fontFamily: 'Font1', marginTop: '-25px' }}>Üyelik</h3>
        <br />

        {welcomeMessage ? (
          <p>{welcomeMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="labelgiriş">E-posta</label>
            <input type="email" id="email" name="email" className="input" required />
            <label htmlFor="password" className="labelgiriş">Şifre</label>
            <input type="password" id="password" name="password" className="input" required />
            {error && <p className="error-message">{error}</p>}
            <input type="checkbox" id="rememberMe" className="irememberMe" />
            <label htmlFor="rememberMe" className="irememberLabel">Beni Hatırla</label>
            <a href='/PasswordReset' className="şifreyiunuttum" >Şifremi Unuttum</a>
            <input type="submit" value="Giriş Yap" className="login-button" />
          </form>
        )}
        <br />
        <div className="button-container">
        <FacebookModal/> 
        <GoogleModal/>
          <div className="square-button"><a href="/singup">Üye Ol</a></div>
        </div>
      </div>
      <div className="login-modal-background" onClick={onClose} />
    </div>
  );
}

export default LoginModal;
