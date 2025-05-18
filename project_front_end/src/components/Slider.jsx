import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../redux/visited';


const baseURL = import.meta.env.VITE_API_BASE_URL;


const handleClick = (item) => {
  dispatch(addVisitedProduct(item));
};

function Slider() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const dispatch = useDispatch();
  const handleClick = (item) => {
  dispatch(addVisitedProduct(item));
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/slider`)
      .then((res) => {
        setSlides(res.data.sliderOne_cards);
      })
      .catch((err) => console.error('Slider verisi alınamadı:', err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        slides.length > 0 ? (prev + 1) % slides.length : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) {
    return <div className="h-[280px] flex items-center justify-center bg-white rounded-xl shadow">Yükleniyor...</div>;
  }

  return (
    <div className="slider-section-1 w-full max-w-[730px] h-[405px] bg-white rounded-xl overflow-hidden shadow flex flex-col justify-between relative group">
      
      {/* Görsel */}
      <a
        href={slides[currentIndex].discountLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-[400px]"
      >
        <img
          src={slides[currentIndex].imageLink}
          alt={`slide-${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </a>

      {/* Sol Buton */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Sağ Buton */}
      <button
        onClick={goNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Alt Buton */}
      <div className="text-center py-2 bg-black/50">
        <a
          href="https://www.trendyol.com/kampanyalar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white text-sm font-semibold py-2 px-4 rounded hover:bg-black/60 transition"
        >
          Tüm Kampanyaları Gör
        </a>
      </div>
    </div>
  );
}

export default Slider;
