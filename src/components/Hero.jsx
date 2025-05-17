import React, { useEffect, useState } from "react";
import quickStatsData from "../data/quickStats.json";

export default function Hero() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats(quickStatsData);
  }, []);

  return (
    <section id="hero" className="bg-green-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Teks dan CTA */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 dark:text-green-300 leading-tight mt-10">EcoVision</h1>
          <p className="mt-4 text-lg md:text-xl text-green-700 dark:text-green-200">Web untuk Bumi Masa Depan — Mari bersama ciptakan dunia yang lebih hijau dan berkelanjutan.</p>

          {/* Tombol CTA */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a href="#actions" className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              Mulai Aksi Nyata
            </a>
            <a
              href="#education-video"
              className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition dark:border-green-300 dark:text-green-300 dark:hover:bg-green-400 dark:hover:text-black"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="bg-green-50 dark:bg-gray-800 rounded-lg p-6 shadow-md border border-green-200 dark:border-gray-600">
                <p className="text-3xl font-extrabold text-green-800 dark:text-green-300">{stat.value}</p>
                <p className="mt-2 text-green-700 font-semibold dark:text-green-200">{stat.label}</p>
                <p className="text-green-600 text-sm mt-1 dark:text-green-400">{stat.unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gambar Bumi/Hutan Animasi */}
        <div className="md:w-1/2">
          <svg className="w-full max-w-md mx-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Animasi Bumi Hijau">
            <circle cx="100" cy="100" r="90" fill="#34D399" />
            <circle cx="100" cy="100" r="70" fill="#10B981" style={{ animation: "pulse 4s infinite ease-in-out" }} />
            <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="24" dy=".3em" fontWeight="bold">
              🌍
            </text>

            <style>{`
              @keyframes pulse {
                0%, 100% { r: 70; opacity: 1; }
                50% { r: 75; opacity: 0.7; }
              }
            `}</style>
          </svg>
        </div>
      </div>
    </section>
  );
}
