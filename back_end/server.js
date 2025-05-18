const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();


require('dotenv').config();

const db = require('./database/db');

const PORT = process.env.PORT || 5050;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Express + SQLite API çalışıyor!');
});

// Route'lar
const sliderRoutes = require('./routes/slider');
const electronicsRoutes = require('./routes/electronics');
const discountRoutes = require('./routes/discounts');
const recommendedRoutes = require('./routes/recommended');

app.use('/api/slider', sliderRoutes);               
app.use('/api/electronics', electronicsRoutes);     
app.use('/api/discounts', discountRoutes);          
app.use('/api/recommended', recommendedRoutes);     

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
