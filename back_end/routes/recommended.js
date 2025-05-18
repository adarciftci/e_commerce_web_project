const express = require('express');
const router = express.Router();
const db = require('../database/db');

// GET /api/recommended → recommended_products verilerini getir
router.get('/', (req, res) => {
  db.all('SELECT * FROM recommended_products', (err, rows) => {
    if (err) {
      console.error('Önerilen ürünler alınamadı:', err);
      res.status(500).json({ error: 'Veri çekilemedi' });
    } else {
      res.json({ special_products: rows });
    }
  });
});

// POST /api/recommended → yeni önerilen ürün ekle
router.post('/', (req, res) => {
  const { productName, imageLink, productLink, rating, price } = req.body;

  const query = `
    INSERT INTO recommended_products (productName, imageLink, productLink, rating, price)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [productName, imageLink, productLink, rating, price], function (err) {
    if (err) {
      console.error('Önerilen ürün eklenemedi:', err);
      res.status(500).json({ error: 'Ekleme başarısız' });
    } else {
      res.status(201).json({ message: 'Ürün eklendi', id: this.lastID });
    }
  });
});

module.exports = router;
