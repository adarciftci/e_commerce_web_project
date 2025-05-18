const express = require('express');
const router = express.Router();
const db = require('../database/db');

// GET /api/electronics → electronic_cards verilerini getir
router.get('/', (req, res) => {
  db.all('SELECT * FROM electronic_cards', (err, rows) => {
    if (err) {
      console.error('Elektronik ürünler alınamadı:', err);
      res.status(500).json({ error: 'Veri çekilemedi' });
    } else {
      res.json({ sliderTwo_electricCards: rows });
    }
  });
});

// POST /api/electronics → yeni elektronik kartı ekle
router.post('/', (req, res) => {
  const { productName, imageLink, productLink, rating, price } = req.body;

  const query = `
    INSERT INTO electronic_cards (productName, imageLink, productLink, rating, price)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [productName, imageLink, productLink, rating, price], function (err) {
    if (err) {
      console.error('Elektronik ürün eklenemedi:', err);
      res.status(500).json({ error: 'Ekleme başarısız' });
    } else {
      res.status(201).json({ message: 'Elektronik ürün eklendi', id: this.lastID });
    }
  });
});

module.exports = router;
