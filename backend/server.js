const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors());
const products = {
  phones: [
    {
      id: 1,
      name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
      price: 900,
      image: 'https://i.imgur.com/tkd2aCq.png',
      description: 'Flagship smartphone from Apple featuring a Super Retina XDR display, powerful A16 Bionic chip, and stunning camera performance.'
    },
    {
      id: 2,
      name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
      price: 1799,
      image: 'https://i.imgur.com/vUJB0Sq.png',
      description: 'Innovative foldable smartphone from Samsung with a flexible display, top-tier performance, and multitasking capabilities.'
    },
    {
      id: 3,
      name: 'Apple iPhone 14 Pro 256GB Silver (MQ103)',
      price: 1399,
      image: 'https://i.imgur.com/Iuq79xr.png',
      description: 'Powerful and stylish iPhone 14 Pro with an enhanced camera system and extended storage capacity.'
    },
    {
      id: 4,
      name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      price: 1437,
      image: 'https://i.imgur.com/UCbVKAv.png',
      description: 'High-capacity version of the iPhone 14 Pro, perfect for capturing photos, recording videos, and running large apps.'
    },
  ],
  headphones: [
    {
      id: 5,
      name: 'AirPods Max Silver Starlight Aluminium',
      price: 549,
      image: 'https://i.imgur.com/AFstKHR.png',
      description: 'Premium over-ear headphones from Apple with active noise cancellation, immersive sound, and luxurious design.'
    },
    {
      id: 6,
      name: 'Galaxy Buds FE Graphite',
      price: 99.99,
      image: 'https://i.imgur.com/QhDcJzA.png',
      description: 'Compact and comfortable wireless earbuds from Samsung offering great sound quality and long battery life.'
    },
  ],
  watches: [
    {
      id: 7,
      name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
      price: 399,
      image: 'https://i.imgur.com/fE8maoL.png',
      description: 'Advanced smartwatch from Apple featuring fitness tracking, heart monitoring, and a vibrant Retina display.'
    },
    {
      id: 8,
      name: 'Samsung Galaxy Watch6 Classic 47mm Black',
      price: 369,
      image: 'https://i.imgur.com/rMyYnOr.png',
      description: 'Stylish and feature-rich smartwatch from Samsung with a rotating bezel, health tracking, and Wear OS.'
    },
  ],
  tablets: [
    {
      id: 9,
      name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
      price: 398,
      image: 'https://i.imgur.com/tYhl29s.png',
      description: 'Versatile and affordable iPad with a 10.2-inch Retina display, A13 Bionic chip, and support for Apple Pencil (1st gen).'
    },
  ],
};

app.get('/api/all', (req, res) => {
  const allProducts = [
    ...products.phones,
    ...products.headphones,
    ...products.watches,
    ...products.tablets
  ];
  res.json(allProducts);  
});

app.get('/api/product/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const allProducts = [
    ...products.phones,
    ...products.headphones,
    ...products.watches,
    ...products.tablets,
  ];

  const found = allProducts.find((p) => p.id === id);
  if (found) {
    res.json(found);
  } else {
    res.status(404).json({ error: 'Товар не найден' });
  }
});


app.get('/api/:category', (req, res) => {
  const category = req.params.category;
  res.json(products[category] || []);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
