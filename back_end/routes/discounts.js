const express = require('express');
const router = express.Router();
const db = require('../database/db');

// GET /api/discounts → discount_cards verilerini getir
router.get('/', (req, res) => {
  db.all('SELECT * FROM discount_cards', (err, rows) => {
    if (err) {
      console.error('İndirim kartları alınamadı:', err);
      res.status(500).json({ error: 'Veri çekilemedi' });
    } else {
      res.json({ discount_cards: rows });
    }
  });
});

// POST /api/discounts → yeni indirim kartı ekle
router.post('/', (req, res) => {
  const { kartLink, resimLink, buttonText } = req.body;

  const query = `
    INSERT INTO discount_cards (kartLink, resimLink, buttonText)
    VALUES (?, ?, ?)
  `;

  db.run(query, [kartLink, resimLink, buttonText], function (err) {
    if (err) {
      console.error('İndirim kartı eklenemedi:', err);
      res.status(500).json({ error: 'Ekleme başarısız' });
    } else {
      res.status(201).json({ message: 'İndirim kartı eklendi', id: this.lastID });
    }
  });
});

module.exports = router;
