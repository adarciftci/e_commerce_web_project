import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(prev => (prev === index ? null : index));
  };

  const categories = [
    { name: 'Elektronik', sub: ['Telefon', 'Bilgisayar', 'TV & Ses'] },
    { name: 'Moda', sub: ['Kadın Giyim', 'Erkek Giyim', 'Ayakkabı'] },
    { name: 'Ev & Yaşam', sub: ['Mobilya', 'Dekorasyon', 'Mutfak'] },
    { name: 'Spor & Outdoor', sub: ['Fitness', 'Kamp', 'Bisiklet'] },
    { name: 'Kozmetik', sub: ['Cilt Bakımı', 'Parfüm', 'Makyaj'] },
    { name: 'Kitap', sub: ['Roman', 'Çocuk Kitapları', 'Eğitim'] },
    { name: 'Oyuncak', sub: ['Puzzle', 'LEGO', 'Zeka Oyunları'] },
    { name: 'Pet Shop', sub: ['Kedi Ürünleri', 'Köpek Ürünleri', 'Mama'] },
    { name: 'Anne & Bebek', sub: ['Bebek Bezi', 'Mama Sandalyesi', 'Oyuncaklar'] },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      {/* Üst Menü */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <Link to="/">e-commerce</Link>
        </div>

        {/* Arama Kutusu */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Ürün, kategori veya marka ara"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Sağ Menü */}
        <div className="flex space-x-4 items-center text-sm">
          <button
            className="text-orange-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <button className="border px-3 py-1 rounded-full border-orange-500 text-orange-500 hover:bg-orange-50 hidden md:block">
            Giriş Yap
          </button>

          <ShoppingCart className="w-6 h-6 text-orange-500 hover:scale-105 transition cursor-pointer" />
        </div>
      </div>

      {/* Masaüstü Alt Menü */}
      <div className="bg-gray-50 py-2 border-t border-gray-200 hidden md:flex">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 justify-start text-sm font-medium text-gray-700">
          {categories.map((cat, index) => (
            <div key={index} className="relative group">
              <button className="hover:text-orange-500">{cat.name}</button>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg border rounded-md hidden group-hover:block z-50 min-w-[160px]">
                {cat.sub.map((subCat, i) => (
                  <Link
                    key={i}
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subCat}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobil Menü (Hamburger tıklanınca açılır) */}
      {menuOpen && (
        <div className="bg-white border-t border-gray-200 px-4 py-2">
          {categories.map((cat, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleCategory(index)}
                className="w-full text-left font-semibold text-orange-600 hover:text-orange-700 transition"
              >
                {cat.name}
              </button>

              {activeCategory === index && (
                <div className="pl-4 mt-1 space-y-1">
                  {cat.sub.map((subCat, i) => (
                    <Link
                      key={i}
                      to="#"
                      className="block text-gray-700 text-sm hover:text-orange-500"
                    >
                      {subCat}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
