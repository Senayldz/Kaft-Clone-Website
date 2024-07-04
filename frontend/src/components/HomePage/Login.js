import React, { useState } from 'react';
import Navbar from '../../components/Navbar2';
import "../../Css/Login.css";
import girişyaplogo from '../../images/girişyaplogo.jpg.png';
import resim1 from '../../images/resim1.png';
import resim2 from '../../images/resim2.png';
import resim3 from '../../images/resim3.png';
import resim4 from '../../images/resim4.png';
import resim5 from '../../images/resim5.png';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      setError('Passwords do not match');
      return;
    }

    const customer = { name, surname, email, password };
    const response = await fetch('/api/customers', {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    } else {
      setError(null);
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
      setPasswordRepeat('');
      setEmptyFields([]);
      setSuccessMessage('Üyelik başarılı! Hoş geldiniz.');
      console.log('new customer added', json);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg section s9">
        <div className="Hoşgeldin">
          <br /><br />
          HOŞ GELDİN
        </div>

        <div className="wrapper">
          <div className="item">
            <h3>Yeni Üyelik</h3><br />
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="giriş-yazı">Adın</label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
              />
              <label htmlFor="surname" className="giriş-yazı">Soyadın</label>
              <input
                type="text"
                name="surname"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                className={emptyFields.includes('surname') ? 'error' : ''}
              />
              <label htmlFor="email" className="giriş-yazı">E-posta Adresin</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={emptyFields.includes('email') ? 'error' : ''}
              />
              <label htmlFor="password" className="giriş-yazı">Şifren</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={emptyFields.includes('password') ? 'error' : ''}
              />
              <label htmlFor="passwordRepeat" className="giriş-yazı">Şifren (tekrar)</label>
              <input
                type="password"
                name="passwordRepeat"
                onChange={(e) => setPasswordRepeat(e.target.value)}
                value={passwordRepeat}
              />
              <input type="checkbox" id="rememberMe1" className="rememberMe1" />
              <label htmlFor="rememberMe1" className="rememberLabel1">KAFT tarafından iletişim bilgilerime tanıtım, reklam, kampanya vb. içerikli ticari e-ileti gönderilmesine, sağladığım kişisel verilerin Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni kapsamında bu amaçla işlenmesine ve hizmet sağlayıcılara aktarılmasına izin veriyorum.</label>
              <input type="checkbox" id="rememberMe2" className="rememberMe2" />
              <label htmlFor="rememberMe2" className="rememberLabel1"> Üyelik Sözleşmesi'ni okudum, onaylıyorum. </label>
              <p>Üyeliğiniz sırasında elde edilen kişisel verileriniz, Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni kapsamında işlenmektedir.</p>
              <br />
              <br />
              <button className='kaftaüyeol' type="submit">KAFT'a Üye ol</button>
              {error && <div className="error">{error}</div>}
              {successMessage && <div className="success">{successMessage}</div>}
            </form>
            <Link to="/">
              <a className="girişyapbutton">Giriş yap</a><br /><br />
            </Link>
            <span className="üyeliğimvar">Daha önceden üyeliğim var</span>
          </div>

          <div className="item">
            <figure className="girişyaplogo">
              <img src={girişyaplogo} alt="Giriş Yap Logo" />
            </figure>
            <br />
            <table>
              <tbody>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim1} alt="Seni KAFT dünyasından haberdar ederiz." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Seni KAFT dünyasından haberdar ederiz.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim2} alt="Kampanya ve indirimlerimizden öncelikli yararlanırsın." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Kampanya ve indirimlerimizden öncelikli yararlanırsın.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim3} alt="Yeni bir ürün veya tasarım geliştirirken fikir almak istediğimizde, öncelikle sana danışırız." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Yeni bir ürün veya tasarım geliştirirken fikir almak istediğimizde, öncelikle sana danışırız.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim4} alt="KAFT etkinliklerinde seni önceden bilgilendiririz ve özel davetlilerimiz arasında olabilirsin." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>KAFT etkinliklerinde seni önceden bilgilendiririz ve özel davetlilerimiz arasında olabilirsin.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim5} alt="Üniversite öğrencilerine özel %20 indirimden yararlanabilirsin. Tek yapman gereken “edu.tr” uzantılı mail adresin ile üye olmak." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Üniversite öğrencilerine özel %20 indirimden yararlanabilirsin. Tek yapman gereken “edu.tr” uzantılı mail adresin ile üye olmak.</figcaption>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ display: 'block', width: '100%', height: '20vh' }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
