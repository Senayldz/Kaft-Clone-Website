import React from 'react';
import { useCart } from '../../context/CartContex';

function GiftCardCards({ item }) {
    const { addGiftCardToCart } = useCart();
    const { id, title, price, image,color } = item;

    return (
        <div style={{ textAlign: 'left', margin: '0', backgroundColor: 'transparent', padding: '0', width: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <img src={image} alt="Resim" style={{ width: '320px', height: '400px' }} />
                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', margin: '10px 0' }}>{price}</p>
                <p style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'left', margin: '10px 0' }}>{title}</p>
            </div>
            <button onClick={() => addGiftCardToCart(item)} style={{backgroundColor: '#5faee3', color: 'white', border: 'none', borderRadius: 0, padding: '10px', marginTop: '10px', cursor: 'pointer' }}>
                Sepete Ekle
            </button>
        </div>
    );
}

export default GiftCardCards;
