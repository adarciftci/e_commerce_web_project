const express = require('express');
const router = express.Router();
const db = require('../database/db');

// GET /api/slider → slider_cards verilerini getir
router.get('/', (req, res) => {
  db.all('SELECT * FROM slider_cards', (err, rows) => {
    if (err) {
      console.error('Slider verisi alınamadı:', err);
      res.status(500).json({ error: 'Veri çekilemedi' });
    } else {
      res.json({ sliderOne_cards: rows });
    }
  });
});

// POST /api/slider → yeni slider kartı ekle
router.post('/', (req, res) => {
  const { imageLink, discountLink } = req.body;

  const query = `INSERT INTO slider_cards (imageLink, discountLink) VALUES (?, ?)`;

  db.run(query, [imageLink, discountLink], function (err) {
    if (err) {
      console.error('Slider verisi eklenemedi:', err);
      res.status(500).json({ error: 'Ekleme başarısız' });
    } else {
      res.status(201).json({ message: 'Slider eklendi', id: this.lastID });
    }
  });
});




module.exports = router;
