// src/components/SplashScreen.js

import React from 'react';
import '../Css/SplashScreen.css';
import logo from '../assets/logo.png'; // Resmi import edin

const SplashScreen = ({ isFading }) => {
    return (
      <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
        <img src={logo} alt="App Logo" className="splash-logo" />
      <h1>KAFT'ın Eşsiz Dünyasına Hoşgeldiniz</h1>
      <p>Hikayesi olan, farklı ve yaratıcı tasarımlarımızı inceleyin</p>
    </div>
  );
};

export default SplashScreen;
