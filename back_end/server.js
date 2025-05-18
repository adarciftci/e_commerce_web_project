const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');


app.use(cors());

// JSON verilerini okuyabilmek için
app.use(express.json());

// Route'lar
const sliderRoutes = require('./routes/slider');
const electronicsRoutes = require('./routes/electronics');
const discountRoutes = require('./routes/discounts');
const recommendedRoutes = require('./routes/recommended');

app.use('/api/slider', sliderRoutes);               // slider_cards
app.use('/api/electronics', electronicsRoutes);     // electronic_cards
app.use('/api/discounts', discountRoutes);          // discount_cards
app.use('/api/recommended', recommendedRoutes);     // recommended_products

// Port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Sunucu ${PORT} portunda çalışıyor`);
});
