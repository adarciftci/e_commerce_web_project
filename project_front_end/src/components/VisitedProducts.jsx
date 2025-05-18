import React from 'react';
import { useSelector } from 'react-redux';

function VisitedProducts() {
  const visitedItems = useSelector((state) => state.visited?.items || []);

  const renderStars = (ratingStr) => {
    if (!ratingStr || !ratingStr.includes('/')) return null;

    const rating = parseFloat(ratingStr.split('/')[0]); // örn: 4.7/5
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.1 && rating - fullStars < 0.8;
    const totalDisplayedStars = fullStars + (hasHalfStar ? 1 : 0);
    const emptyStars = 5 - totalDisplayedStars;

    return (
      <div className="flex items-center text-yellow-500 text-xs mt-1 space-x-1">
        <span className="flex">
          {/* Dolu yıldızlar */}
          {Array.from({ length: fullStars }).map((_, i) => (
            <span key={`full-${i}`}>★</span>
          ))}
          {/* Yarım yıldız */}
          {hasHalfStar && <span key="half">☆</span>}
          {/* Boş yıldızlar */}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <span key={`empty-${i}`}>☆</span>
          ))}
        </span>
        <span className="text-gray-500 text-[11px]">({ratingStr})</span>
      </div>
    );
  };

  if (visitedItems.length === 0) {
    return (
      <div className="bg-yellow-100 p-4 rounded-lg shadow text-center">
        <p className="text-yellow-800 font-medium">Henüz ziyaret edilen ürün yok.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Ziyaret Edilen Ürünler</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {visitedItems.map((item) => (
          <a
            key={item.id}
            href={item.productLink || item.discountLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[170px] bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.imageLink}
              alt={item.productName || 'Ürün'}
              className="w-full h-[120px] object-contain mb-2 rounded"
            />
            <div className="text-sm text-gray-800 font-medium line-clamp-2 mb-1">
              {item.productName || 'Ürün Başlığı'}
            </div>
            {item.rating && renderStars(item.rating)}
            {item.price && (
              <div className="text-sm font-bold text-orange-600">{item.price}</div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default VisitedProducts;
