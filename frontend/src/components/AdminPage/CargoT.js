import React from 'react';

function CargoT() {
    const buttonStyle = {
        color: 'white',
       
        padding: '35px 19px',
        fontSize: '30px',
        border: 'none',
        borderRadius: '0px',
        cursor: 'pointer',
        transform: 'scale(0.55)'
    };
    const handleOptionClick = (option) => {
        localStorage.setItem('selectedOption', option);
        alert(`Seçilen seçenek: ${option}`);
    };

    return (
        <div>
            <br></br> <br></br> <br></br> 
            <button style={buttonStyle} onClick={() => handleOptionClick('Teslim Alındı')}>Teslim Alındı</button>
            <button style={buttonStyle} onClick={() => handleOptionClick('Aktarma Merkezinde')}>Aktarma Merkezinde</button>
            <button style={buttonStyle} onClick={() => handleOptionClick('Teslimat Şubesinde')}>Teslimat Şubesinde</button>
            <button style={buttonStyle} onClick={() => handleOptionClick('Dağıtımda Çıkarıldı')}>Dağıtımda Çıkarıldı</button>
            <button style={buttonStyle} onClick={() => handleOptionClick('Teslim edildi')}>Teslim edildi</button>
        </div>
    );
}

export default CargoT;
