const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'database.db'), (err) => {
  if (err) {
    console.error('Veritabanı bağlantı hatası:', err);
  } else {
    console.log('SQLite veritabanı bağlantısı başarılı.');
  }
});

db.serialize(() => {
  // 1. Kampanya Slider Kartları (Slider.jsx)
  db.run(`CREATE TABLE IF NOT EXISTS slider_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    imageLink TEXT,
    discountLink TEXT
  )`);

  // 2. Elektronik Ürün Kartları (ElectronicsDeals.jsx)
  db.run(`CREATE TABLE IF NOT EXISTS electronic_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    imageLink TEXT,
    productLink TEXT,
    rating TEXT,
    price TEXT
  )`);

  // 3. Navbar Altı Kampanya Kartları (QuickLinks.jsx)
  db.run(`CREATE TABLE IF NOT EXISTS discount_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kartLink TEXT,
    resimLink TEXT,
    buttonText TEXT
  )`);

  // 4. Sana Özel Ürünler (Recommended.jsx)
  db.run(`CREATE TABLE IF NOT EXISTS recommended_products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    imageLink TEXT,
    productLink TEXT,
    rating TEXT,
    price TEXT
  )`);
});

module.exports = db;
