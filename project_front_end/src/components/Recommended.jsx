import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../redux/visited';

const baseURL = import.meta.env.VITE_API_BASE_URL;

function Recommended() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${baseURL}/recommended`)
      .then((res) => {
        setProducts(res.data.special_products);
      })
      .catch((err) => console.error('Önerilen ürünler alınamadı:', err));
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleClick = (item) => {
    dispatch(addVisitedProduct(item));
  };

const renderStars = (ratingStr) => {
  if (!ratingStr || !ratingStr.includes('/')) return null;

  const rating = parseFloat(ratingStr.split('/')[0]); // örn: 4.8/5
  const fullStars = rating > 4.8 ? 5 : Math.floor(rating); // 4.9 → 5 yıldız, 4.7 → 4 yıldız
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center text-yellow-500 text-xs mt-1 space-x-1">
      <span>
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`}>☆</span>
        ))}
      </span>
      <span className="text-gray-500 text-[11px]">({ratingStr})</span>
    </div>
  );
};


  return (
    <div className="relative group">
      {/* Scroll Alanı */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent group-hover:scrollbar-thumb-gray-400 py-2 px-1 transition-all"
      >
        {products.map((item) => (
          <a
            key={item.id}
            href={item.productLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(item)}
            className="flex-shrink-0 w-[180px] bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.imageLink}
              alt={item.productName}
              className="w-full h-[150px] object-contain mb-2 rounded"
            />
            <p className="text-[12px] font-semibold line-clamp-2 h-[40px]">
              {item.productName}
            </p>
            {renderStars(item.rating)}
            <p className="text-sm font-bold text-orange-600 mt-1">{item.price}</p>
            <button className="mt-1 text-[11px] border border-orange-400 text-orange-500 px-2 py-[2px] rounded hover:bg-orange-50 transition">
              Sepete Ekle
            </button>
          </a>
        ))}
      </div>

      {/* Scroll Butonları */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default Recommended;
