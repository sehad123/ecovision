import React from "react";

export default function About() {
  return (
    <section className="py-12 px-4 w-full mx-auto bg-white dark:bg-black transition-colors duration-300" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-12">Tentang</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start text-gray-800 dark:text-gray-200">
          {/* Penulis Kiri */}
          <div className="flex flex-col items-center text-center">
            <img src="/assets/hadi.jpeg" alt="Setya Hadi Nugroho" className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">Setya Hadi Nugroho</h3>
            <p className="mt-2 px-4">Web Developer</p>
          </div>

          {/* Penulis Kanan */}
          <div className="flex flex-col items-center text-center">
            <img src="/assets/venny.jpeg" alt="Venny Septia Hartono" className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">Venny Septia Hartono</h3>
            <p className="mt-2 px-4">Designer UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
