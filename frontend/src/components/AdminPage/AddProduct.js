import React, { useState } from 'react';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [count, setCount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('price', price);
    formData.append('color', color);
    formData.append('count', count);

    try {
      const response = await fetch('https://kaft-website-clone-main.onrender.com/api/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Ürün başarıyla eklendi!');
        setTitle('');
        setImage(null);
        setDescription('');
        setContent('');
        setPrice('');
        setColor('');
        setCount(0);
      } else {
        const errorData = await response.json();
        alert('Ürün eklenemedi: ' + errorData.message);
      }
    } catch (error) {
      alert('Hata: ' + error.message);
    }
  };

  return (
    <div style={{ margin: '50px' }}>
      <h1>Yeni Ürün Ekle</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Başlık
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Resim
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            required
          />
        </label>
        <label>
          Açıklama
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          İçerik
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <label>
          Fiyat
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Renk
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          Adet
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Ürün Ekle</button>
      </form>
    </div>
  );
};

export default AddProduct;
