import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// pages & components
import Home from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AddCustomer from './components/AdminPage/AddCustomer';
import Singup from './components/HomePage/Login';
import ContactPage from './pages/ContactPage';
import KampanyaliUrunler from './pages/KampanyaliUrunler';
import GiftCard from './components/HomePage/GiftCard';
import PasswordReset from './components/HomePage/PasswordResetRequest';
import Productlar from './components/Products/Productlar';
import Details from './components/Products/Details';
import AddProduct from './components/AdminPage/AddProduct';
import SplashScreen from './components/SplashScreen';
import Basket from './components/HomePage/Basket';
import UpdateProduct from './components/AdminPage/UpdateProduct';
import Payment from './components/HomePage/Payment';
import Address from './components/HomePage/Address';
import CargoT from './components/AdminPage/CargoT';
import Cargo from './components/HomePage/Cargo';

function SplashHandler({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === '/');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  if (loading && location.pathname === '/') {
    return <SplashScreen isFading={isFading} />;
  }

  return children;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SplashHandler>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/singup" element={<Singup />} />
              <Route path="/admin/addcustomer" element={<AddCustomer />} />
              <Route path="/iletisim" element={<ContactPage />} />
              <Route path="/kampanyaliurunler" element={<KampanyaliUrunler />} />
              <Route path="/GiftCard" element={<GiftCard />} />
              <Route path="/admin/addproduct" element={<AddProduct />} />
              <Route path="/admin/update/product/:id" element={<UpdateProduct />} />
              <Route path="/product" element={<Productlar />} />
              <Route path="/product/:id" element={<Details />} />
              <Route path="/PasswordReset" element={<PasswordReset />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/address" element={<Address />} />
              <Route path="/admin/cargot" element={<CargoT />} />
              <Route path="/siparistakibi" element={<Cargo />} />
            </Routes>
          </div>
        </SplashHandler>
      </BrowserRouter>
    </div>
  );
}

export default App;
