import React, { useState } from "react";
import "../../Css/FGmodal.css";

function GoogleModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="googlebutton">
                Google ile giriş
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span><br></br><br></br>
                        <h2>Google ile giriş</h2>
                        <form>
                            <input type="text" placeholder="Adınız" required />
                            <input type="text" placeholder="Soyadınız" required />
                            <input type="email" placeholder="Mail Adresiniz" required />
                            <input type="password" placeholder="Şifreniz" required />
                            <button type="submit" className="üye_ol">üye ol</button>
                        </form>

                    </div>
                </div>
            )}

        </>
    );
}
export default GoogleModal;