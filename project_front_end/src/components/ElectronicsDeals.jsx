import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../redux/visited';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ElectronicsDeals() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/electronics`)
      .then((res) => {
        setProducts(res.data.sliderTwo_electricCards);
      })
      .catch((err) => console.error('Elektronik ürünler alınamadı:', err));
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

    const rating = parseFloat(ratingStr.split('/')[0]);
    const fullStars = rating > 4.8 ? 5 : Math.floor(rating);
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
    <div
      className="w-full max-w-[730px] h-[405px] shadow rounded-xl overflow-hidden flex flex-col justify-end bg-cover bg-no-repeat relative group"
      style={{
        backgroundImage:
          'url("https://images.hepsiburada.net/banners/s/1/980-530/930x530_(3)133891869153318564.jpg")',
        backgroundPosition: 'left center',
        backgroundSize: 'cover',
      }}
    >
      {/* Scroll Kutusu */}
      <div
        ref={scrollRef}
        className="px-2 py-2 flex gap-2 overflow-x-auto overflow-y-hidden h-[194px] items-end
            scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent group-hover:scrollbar-thumb-gray-400 transition-all duration-300"
        style={{ scrollbarWidth: 'thin' }}
      >
        {products.map((item) => (
          <a
            key={item.id}
            href={item.productLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(item)}
            className="flex-shrink-0 w-[300px] h-[176px] bg-white border border-gray-200 rounded-lg flex items-center p-3 shadow"
          >
            <img
              src={item.imageLink}
              alt={item.productName}
              className="w-[90px] h-[120px] object-contain mr-3 rounded"
            />
            <div className="flex flex-col justify-between h-full overflow-hidden">
              <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-2">
                {item.productName}
              </p>
              {renderStars(item.rating)}
              <p className="text-orange-600 font-bold text-sm mt-1">{item.price}</p>
              <button className="mt-1 text-[11px] border border-orange-400 text-orange-500 px-2 py-[2px] rounded hover:bg-orange-50 transition">
                Sepete Ekle
              </button>
            </div>
          </a>
        ))}
      </div>

      {/* Scroll Butonları */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 bottom-[80px] transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-1 bottom-[80px] transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default ElectronicsDeals;
