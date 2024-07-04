/* global FB */
import React, { useState } from "react";
import "../../Css/FGmodal.css";
import axios from 'axios';

function FacebookModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const facebookLogin = () => {
        FB.login(function(response) {
            if (response.status === 'connected') {
                const accessToken = response.authResponse.accessToken;
                console.log('Access Token:', accessToken);

                axios.post('/api/facebook-login', { accessToken })
                    .then(response => {
                        console.log('Sunucudan Gelen Yanıt:', response.data);
                        toggleModal();
                    })
                    .catch(error => {
                        console.error('Giriş Hatası:', error);
                    });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'email'});
    };

    return (
        <>
            <button onClick={toggleModal} className="facebookbutton">
                Facebook ile giriş
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span><br /><br />
                        <h2>Facebook ile giriş</h2>
                        <button onClick={facebookLogin} className="facebookbutton">
                            Facebook ile giriş yap
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default FacebookModal;
