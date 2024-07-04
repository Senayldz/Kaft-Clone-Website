import resim1 from '../../images/giftcard_1.png';
import resim2 from '../../images/giftcard_2.png';
import resim3 from '../../images/giftcard_3.png';
import resim4 from '../../images/giftcard_4.png';
import React from 'react';


const GiftCardData= [
  {
    id: 2000,
    title: 'İstediği bir tişörtü alması için yeterli olacaktır. ',
    price: 1000,
    image: resim1,
  },
  {
    id: 2001,
    title: 'Tişörtlerin yanı sıra sweatshirtler arasından da seçim yapma fırsatı olur.',
    price: 2000,
    image: resim2,
  },
  {
    id: 2002,
    title: 'Kapşonlulardan çantalara kadar geniş bir skalada seçim yapabilir.',
    price: 3000,
    image: resim3,
  },
  {
    id: 2003,
    title: 'Epey mutlu olacaktır.',
    price: 4000,
    image: resim4,
  },
];

export default GiftCardData;
