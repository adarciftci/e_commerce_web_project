import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-gray-200 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo ve Açıklama */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-wide text-white">
            E-Commerce
          </h2>
        </div>

        {/* Hızlı Linkler */}
        <nav>
          <h3 className="text-xl font-semibold mb-4 border-b border-indigo-600 pb-2">
            Hızlı Linkler
          </h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Kariyer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                İletişim
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Gizlilik Politikası
              </a>
            </li>
          </ul>
        </nav>

        {/* Müşteri Hizmetleri */}
        <nav>
          <h3 className="text-xl font-semibold mb-4 border-b border-indigo-600 pb-2">
            Müşteri Hizmetleri
          </h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Sipariş Takibi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                İade ve Değişim
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Sıkça Sorulan Sorular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Yardım Merkezi
              </a>
            </li>
          </ul>
        </nav>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-indigo-600 pb-2">
            Bizi Takip Edin
          </h3>
          <div className="flex space-x-6 text-gray-300 text-2xl">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.797.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.622h-3.121V24h6.116c.726 0 1.326-.6 1.326-1.337V1.337C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition duration-300"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.917 4.917 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.15 4.916 4.916 0 0 0 3.195 9.86 4.902 4.902 0 0 1 .964 9.1v.062a4.917 4.917 0 0 0 3.941 4.815 4.996 4.996 0 0 1-1.294.172c-.317 0-.626-.03-.928-.086a4.916 4.916 0 0 0 4.588 3.41 9.866 9.866 0 0 1-6.102 2.105c-.397 0-.788-.023-1.175-.068a13.945 13.945 0 0 0 7.557 2.209c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition duration-300"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm4.25 1.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5zm0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zm4.75-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition duration-300"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.026-3.038-1.85-3.038-1.853 0-2.135 1.445-2.135 2.938v5.669H9.358V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.27 2.37 4.27 5.451v6.29zM5.337 7.433a2.07 2.07 0 1 1 0-4.141 2.07 2.07 0 0 1 0 4.141zM7.119 20.452H3.554V9h3.565v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-indigo-700 pt-6 text-center text-sm text-indigo-400 select-none">
        &copy; {new Date().getFullYear()} SE 3355 ASSIGNMENT
      </div>
    </footer>
  );
}

export default Footer;
