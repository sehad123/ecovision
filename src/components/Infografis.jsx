import React, { useEffect, useState } from "react";

const infographics = [
  {
    title: "Daur Ulang",
    img: "/assets/daur_ulang.png",
    description: "Simbol daur ulang sebagai pengingat pentingnya memilah dan mengolah sampah.",
  },
  {
    title: "Polusi Plastik",
    img: "/assets/polusi_plastik.png",
    description: "Polusi plastik membahayakan ekosistem laut dan kesehatan manusia.",
  },
  {
    title: "Emisi Karbon",
    img: "/assets/emisi_karbon.png",
    description: "Jejak karbon adalah total emisi gas rumah kaca dari aktivitas individu atau organisasi.",
  },
  {
    title: "Energi Terbarukan",
    img: "/assets/energi_terbarukan.png",
    description: "Energi bersih dari matahari dan angin membantu mengurangi ketergantungan pada bahan bakar fosil.",
  },
];

export default function EducationInfographic() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infographics.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = infographics[currentIndex];

  return (
    <section id="education-infographic" className="w-full bg-white dark:bg-black py-16 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-800 dark:text-green-300">Infografis Lingkungan</h2>

      <div className="w-full">
        <img src={current.img} alt={current.title} className="w-full max-h-[85vh] object-contain mx-auto transition-all duration-700 ease-in-out" />
        <div className="text-center mt-6">
          <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">{current.title}</h3>
          <p className="text-gray-700 dark:text-green-200 mt-2 text-base">{current.description}</p>

          <div className="mt-4 flex justify-center gap-2">
            {infographics.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300
                  ${currentIndex === idx ? "bg-green-600 dark:bg-green-400" : "bg-gray-300 dark:bg-gray-600"}
                `}
                aria-label={`Pilih infografis ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
