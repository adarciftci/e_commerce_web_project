
//Kampanya Kartları

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

function QuickLinks() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/discounts`)
      .then((res) => {
        setCards(res.data.discount_cards);
      })
      .catch((err) => {
        console.error('Kampanya kartları yüklenemedi:', err);
      });
  }, []);

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div className="flex justify-center">
        <div className="flex gap-3 px-4 py-3 min-w-max">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.kartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[110px] md:w-[130px] flex flex-col items-center justify-start"
            >
              <img
                src={card.resimLink}
                alt={card.buttonText}
                className="w-full h-[100px] object-contain rounded"
              />
              {/* <span className="text-[13px] text-center mt-1 text-gray-700 font-medium hover:text-orange-600 transition">
                {card.buttonText}
              </span> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
