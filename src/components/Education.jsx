// components/EducationVideo.js
import React, { useState } from "react";

const topics = [
  {
    title: "Daur Ulang",
    content: "Daur ulang membantu mengurangi limbah dan menyelamatkan sumber daya alam. Mulailah dari memisahkan sampah organik dan anorganik.",
    video: "https://www.youtube.com/embed/LPKToHZ5fuI",
  },
  {
    title: "Polusi Plastik",
    content: "Plastik sekali pakai mencemari lautan dan membunuh hewan laut. Gunakan barang reusable setiap hari.",
    video: "https://www.youtube.com/embed/BnAMYVgWS7g",
  },
  {
    title: "Emisi Karbon",
    content: "Mengurangi penggunaan kendaraan bermotor dan beralih ke transportasi umum atau bersepeda membantu menurunkan emisi karbon.",
    video: "https://www.youtube.com/embed/KzJuOYh4joE",
  },
  {
    title: "Energi Terbarukan",
    content: "Mendukung sumber energi terbarukan seperti tenaga surya dan angin membantu transisi ke masa depan berkelanjutan.",
    video: "https://www.youtube.com/embed/hG3km2fGgrM",
  },
];

export default function EducationVideo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="education-video" className="w-full bg-white dark:bg-black py-16 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800 dark:text-green-300">Edukasi Lingkungan - Video</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {topics.map((topic, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-lg border font-semibold transition
              ${
                activeIndex === i
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-700 border-green-400 hover:bg-green-100 dark:bg-black dark:text-green-300 dark:border-green-500 dark:hover:bg-green-700 dark:hover:text-white"
              }
            `}
            onClick={() => setActiveIndex(i)}
          >
            {topic.title}
          </button>
        ))}
      </div>

      {/* Video Content */}
      <div className="bg-green-50 rounded-lg p-6 max-w-6xl mx-auto shadow text-center dark:bg-black">
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">{topics[activeIndex].title}</h3>
        <p className="mt-2 mb-4 text-gray-700 dark:text-green-200">{topics[activeIndex].content}</p>
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe src={topics[activeIndex].video} title={`Video edukasi ${topics[activeIndex].title}`} allowFullScreen className="w-full h-full rounded-lg shadow-md" frameBorder="0" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
