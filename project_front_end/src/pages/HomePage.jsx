import React from 'react';
import Slider from '../components/Slider';
import QuickLinks from '../components/QuickLinks';
import ElectronicsDeals from '../components/ElectronicsDeals';
import Recommended from '../components/Recommended';
import VisitedProducts from '../components/VisitedProducts';

function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen px-4 py-6">
      
      {/* Kampanya Linkleri */}
      <section className="mb-10 px-4 lg:px-20">
        <h2 className="text-xl font-semibold mb-0"></h2>
        <QuickLinks />
      </section>

      {/* Ana Slider + Elektronik Ürünler */}
      <section className="flex flex-col lg:flex-row gap-1 mb-10 px-4 lg:px-20">
        <div className="w-full lg:w-[65%]">
          <Slider />
        </div>
        <div className="w-full lg:w-[65%]">
          <ElectronicsDeals />
        </div>
      </section>

      {/* Sana Özel Öneriler */}
      <section className="mb-10 px-4 lg:px-20">
        <h2 className="text-xl font-semibold mb-4">Sana Özel Öneriler</h2>
        <Recommended />
      </section>

      {/* Gezilen Ürünler */}
      <section className="mb-10 px-4 lg:px-20">
        <h2 className="text-xl font-semibold mb-4"></h2>
        <VisitedProducts />
      </section>

    </main>
  );
}

export default HomePage;
