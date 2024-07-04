import React, { useEffect, useState } from 'react';
import Cargonav from '../Navbar2';
import Footer from '../Footer';
import resim1 from '../../images/siparişdurumu.png'


function Cargo() {
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const option = localStorage.getItem('selectedOption');
        if (option) {
            setSelectedOption(option);
        }
    }, []);

    return (
        <div>

            <Cargonav />


            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <div>
                <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: '24px', background: 'white', width: '160vh', height: '90vh', margin: 'auto' }}><br></br>
                <table style={{ width: '100%', height: '100%' }}>
        <tr>
            <td style={{ verticalAlign: 'middle', padding: '20px' }}>
                <figure className="img-figure">
                    <img src={resim1} alt="Seni KAFT dünyasından haberdar ederiz." style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </figure>
            </td>
            <td style={{ verticalAlign: 'middle', padding: '20px' }}>
                <div>
                    <h1>SİPARİŞ TAKİBİ</h1><br></br><br></br>
                    {selectedOption ? (
                        <p>{selectedOption}</p>
                    ) : (
                        <p>kargonuz yok</p>
                    )}
                </div>
            </td>
        </tr>
    </table>

                </div>
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            </div>
            <Footer />
        </div>

    );
}

export default Cargo;
