import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Css/resetPassword.css';
import Navbar from '../Navbar';

function PasswordResetRequest() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showResetForm, setShowResetForm] = useState(false); // Şifre sıfırlama formunu göstermek için durum
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = email.trim();

    try {
      const response = await fetch('/api/resetpassword/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: enteredEmail }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Email is not found');
      }

      // E-posta adresi bulunduğunda şifre sıfırlama formunu göster
      setShowResetForm(true);
      setErrorMessage('');

    } catch (error) {
      console.error('Password reset request failed:', error);
      setShowResetForm(false); // E-posta adresi bulunamadığında formu gizle
      setSuccessMessage(null);
      setErrorMessage('Email bulunamadı. Lütfen geçerli bir email adresi girin.');
    }
  };

  const handleResetPassword = async (newPassword) => {
    try {
      const response = await fetch('/api/resetpassword/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Password update failed');
      }

      const data = await response.json();
      console.log('Password updated:', data);

      setSuccessMessage('Şifreniz başarıyla güncellendi!');
      setShowResetForm(false); // Şifre güncelleme başarılı olduğunda formu gizle

    } catch (error) {
      console.error('Password update failed:', error);
      setSuccessMessage(null);
      setErrorMessage('Şifre güncelleme başarısız oldu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='body'>
        <div className="form" >
          <div className="title">Şifre Sıfırlama Talebi</div>
          {!showResetForm ? (
            <>
              <div className="subtitle">Lütfen e-posta adresinizi girin</div>
              <form onSubmit={handleSubmit}>
                <div className="input-container ic1">
                  <input
                    id="email"
                    className="input"
                    type="email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="cut cut-short"></div>
                  <label htmlFor="email" className="placeholder">
                    Email
                  </label>
                </div>
                <button type="submit" className="submit">
                  Gönder
                </button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <a href='/' style={{ color: 'white' }}>Anasayfa'ya Dön</a>
              </form>
            </>
          ) : (
            <ResetPasswordForm onSubmit={handleResetPassword} />
          )}
        </div>
      </div>
    </div>
  );
}

const ResetPasswordForm = ({ onSubmit }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Şifreler eşleşmiyor. Lütfen tekrar deneyin.');
      return;
    }

    try {
      await onSubmit(newPassword);
      setNewPassword('');
      setConfirmPassword('');
      setError('');
    } catch (error) {
      console.error('Password update failed:', error);
      setError('Şifre güncelleme başarısız oldu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container ic1">
        <input
          type="password"
          placeholder=" "
          className='input'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <div className="cut cut-short"></div>
        <label htmlFor="newPassword" className="placeholder">
          Yeni Şifre
        </label>
      </div>
      <div className="input-container ic1">
        <input
          type="password"
          className='input'
          placeholder=" "
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="cut cut-short"></div>
        <label htmlFor="confirmPassword" className="placeholder">
          Yeni Şifre Tekrar
        </label>
      </div>
      <button type="submit" className="submit">
        Şifreyi Güncelle
      </button>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </form>
  );
};

export default PasswordResetRequest;
