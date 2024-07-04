import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import '../../Css/main.css';
import video from '../../images/668.mp4'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Kullanılan Resimler
import canta from '../../images/bag.webp'
import bere from '../../images/beanie.webp'
import ceket from '../../images/jacket.webp'
import atlet from '../../images/tank.webp'
import short from '../../images/short_man.webp'
import pantolon from '../../images/pant_man.webp'
import '../../Css/fonts.css'
// import required modules
import { Autoplay } from 'swiper/modules';


export default class App extends Component {
    render() {
        return (
            <div>
                <Fullpage>
                    <FullPageSections>

                        <FullpageSection className="bg s1 my-section ">
                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                        <small>Tüm Basic Tişörtlerde</small>
                                        <h4>3 AL 2 ÖDE</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>
                        </FullpageSection>
                        <FullpageSection className="bg s2 my-section">
                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                        <small>5 Sanatçı, 5 Yeni Tasarım</small>
                                        <h4>HOOD BASE x KAFT</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>
                        </FullpageSection>
                        <FullpageSection className="bg s3 my-section">
                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                        <small> Apenda, XPocket, Oileka, Horizon, Flowinga</small>
                                        <h4>UZUN KOLLULARDA İNDİRİM</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>

                        </FullpageSection>
                        <FullpageSection className="bg s4 my-section">

                            <video className="video-background" autoPlay loop muted>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                        <small>İşler Yaratıcılığa Geldiğinde</small>
                                        <h4>CREAPUS</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>
                        </FullpageSection>
                        <FullpageSection className="bg s5 my-section">

                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                        <small>Sketch Tee Seeries</small>
                                        <h4>7 YENİ TASARIM</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>
                        </FullpageSection>
                        <FullpageSection className="bg s6 my-section">
                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                        <small>Yeni Basic Sweatshirt Tasarımı</small>
                                        <h4>LYUGA</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>
                        </FullpageSection>
                        <FullpageSection className="bg s7 my-section">
                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                        <small>Yeni ve Zamansız Pantolon Tasarımları</small>
                                        <h4>ROUPA & UTAMA</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>
                        </FullpageSection>
                        <FullpageSection className="bg s8 my-section">
                            <div className="caption-container">
                                <a href='#'>
                                    <div className="caption">
                                    </div>
                                </a>
                            </div>
                            <div class="cover"></div>
                        </FullpageSection>
                        <FullpageSection className="bg s9 my-section">
                            <>
                                <div class="headertextS9">
                                    <h2>Keşfedilecek daha çok şey var</h2>
                                </div>
                                {/* Boşluk bırakmak için */}
                                <div style={{
                                    display: 'block',
                                    height: '30vh'
                                }}>

                                </div>

                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    autoplay={{ delay: '1200' }}
                                    loop={true}
                                    centeredSlides={true}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>

                                        <div style={{ position: 'relative', textAlign: 'center' }}>
                                            <img style={{ alt: 'bag', height: '65%', width: '65%' }} src={canta} />
                                            <div style={{
                                                position: 'absolute', top: '50%', left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                padding: '10px'
                                            }}>Çanta</div>
                                        </div>


                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div style={{ position: 'relative', textAlign: 'center' }}>
                                            <img style={{ alt: 'beanie', height: '65%', width: '65%' }} src={bere} />
                                            <div style={{
                                                position: 'absolute', top: '50%', left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                padding: '10px'
                                            }}>Bere</div>
                                        </div>


                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div style={{ position: 'relative', textAlign: 'center' }}>
                                            <img style={{ alt: 'jacket', height: '65%', width: '65%' }} src={ceket} />
                                            <div style={{
                                                position: 'absolute', top: '50%', left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                padding: '10px'
                                            }}>Ceket</div>
                                        </div>



                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div style={{ position: 'relative', textAlign: 'center' }}>
                                            <img style={{ alt: 'tank', height: '65%', width: '65%' }} src={atlet} />
                                            <div style={{
                                                position: 'absolute', top: '50%', left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                padding: '10px'
                                            }}>Atlet</div>
                                        </div>


                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ position: 'relative', textAlign: 'center' }}>
                                            <img style={{ alt: 'short', height: '65%', width: '65%' }} src={short} />
                                            <div style={{
                                                position: 'absolute', top: '50%', left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                padding: '10px'
                                            }}>Şort</div>
                                        </div>


                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ position: 'relative', textAlign: 'center' }}>
                                            <img style={{ alt: 'pant', height: '65%', width: '65%' }} src={pantolon} />
                                            <div style={{
                                                position: 'absolute', top: '50%', left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                padding: '10px'
                                            }}>Pantolon</div>
                                        </div>


                                    </SwiperSlide>

                                </Swiper>
                            </>

                        </FullpageSection>

                        <FullpageSection className="bg s10 my-section">
                            <div className="containers1">
                                <div className="box b1">
                                    <div className="myText">
                                        <a href='#'>
                                            <p>Sevdiklerin için</p>
                                            <p>bir güzellik yap.</p>
                                            <h4>GIFT CARD</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="box b2">
                                    <div className="myText">
                                        <a href='#'>
                                            <p>Ormana Dönüşen</p>
                                            <p>Bir Seri.</p>
                                            <h4>TEMA X KAFT</h4>
                                        </a>
                                    </div>

                                </div>
                                <div className="box b3">
                                    <div className="myText">
                                        <a href='#'>
                                            <p>Kaft tişörtlerini <u>indirimli</u></p>
                                            <p>almanın eğlenceli yolu.</p>
                                            <h4>TEEMACHINE</h4>
                                        </a>
                                    </div>

                                </div>
                                <div className="box b4">

                                    <div className="myText">
                                        <a href='#'>
                                            <p>Zamansız Hikayeler</p>
                                            <p>Yaratmak Zaman Alir</p>
                                            <h4>SÜRDÜRÜLEBİLİRLİK</h4>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </FullpageSection>


                        {/* FOOTER */}
                        <FullpageSection className="s11" >
                            <div style={{
                                display: 'block',
                                width: '100%',
                                height: '10vh'
                            }}>

                            </div>
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
                                    <tr>
                                        <th>Ürünler</th>
                                        <th>Öne Çıkanlar</th>
                                        <th>Kaft Dünyası</th>
                                        <th>Bilgi</th>
                                    </tr>
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
                                </table>
                            </div>
                            <br />
                            <div className="socialMeediaIcons">
                                {/* Gerekirse doldururum diye bıraktım */}
                            </div>

                        </FullpageSection>

                        <FullpageSection style={{ height: '8vh', backgroundColor: '#d9dbcf' }} className="bg s12 my-section">
                            Aha da çalışıyor imza isa
                        </FullpageSection>

                    </FullPageSections>


                </Fullpage >

            </div>
        )
    }
}
