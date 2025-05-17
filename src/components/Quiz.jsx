import React, { useState } from "react";

const questions = [
  {
    question: "Apa manfaat utama dari daur ulang?",
    options: ["Mengurangi limbah dan menyelamatkan sumber daya", "Meningkatkan polusi udara", "Menggunakan lebih banyak energi", "Mempercepat pemanasan global"],
    answerIndex: 0,
  },
  {
    question: "Bagaimana cara efektif mengurangi emisi karbon?",
    options: ["Menggunakan kendaraan pribadi lebih sering", "Berjalan kaki, bersepeda, atau naik transportasi umum", "Membakar sampah plastik", "Menggunakan AC sepanjang hari"],
    answerIndex: 1,
  },
  {
    question: "Apa sumber energi terbarukan?",
    options: ["Batu bara", "Minyak bumi", "Tenaga surya", "Gas alam"],
    answerIndex: 2,
  },
  {
    question: "Mengapa penting mengurangi penggunaan plastik sekali pakai?",
    options: [
      "Plastik sekali pakai mudah terurai dan baik untuk lingkungan",
      "Plastik sekali pakai mencemari lautan dan membahayakan satwa",
      "Plastik sekali pakai meningkatkan kualitas udara",
      "Plastik sekali pakai membantu menurunkan emisi karbon",
    ],
    answerIndex: 1,
  },
  {
    question: "Apa yang dapat dilakukan untuk menghemat konsumsi air?",
    options: ["Meninggalkan keran air menyala saat tidak digunakan", "Memperbaiki kebocoran dan menggunakan air secukupnya", "Membuang sampah ke sungai", "Mandi lebih lama"],
    answerIndex: 1,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === null) return;

    if (selected === questions[current].answerIndex) {
      setScore(score + 1);
    }

    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <section className="py-12 px-4 w-full mx-auto bg-white dark:bg-black transition-colors duration-300" id="quiz">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-8">Quiz Lingkungan</h2>

        {!showResult ? (
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow transition-colors duration-300">
            <p className="mb-4 font-semibold text-black dark:text-white">
              Pertanyaan {current + 1} dari {questions.length}
            </p>
            <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">{questions[current].question}</h3>

            <ul className="space-y-4">
              {questions[current].options.map((opt, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleOptionClick(idx)}
                    className={`w-full text-left px-4 py-3 rounded border transition-colors duration-200 ${
                      selected === idx ? "bg-green-600 text-white border-green-700" : "bg-white dark:bg-gray-800 text-green-800 dark:text-green-200 border-green-300 dark:border-green-600 hover:bg-green-100 dark:hover:bg-green-800"
                    }`}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={handleNext}
              disabled={selected === null}
              className={`mt-6 px-6 py-2 rounded transition-colors duration-200 ${selected === null ? "bg-green-300 dark:bg-green-700 cursor-not-allowed text-white" : "bg-green-600 text-white hover:bg-green-700"}`}
            >
              {current + 1 === questions.length ? "Selesai" : "Selanjutnya"}
            </button>
          </div>
        ) : (
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow text-center transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Hasil Quiz</h3>
            <p className="mb-6 text-lg text-black dark:text-white">
              Anda mendapatkan skor <span className="font-bold">{score}</span> dari {questions.length} pertanyaan.
            </p>
            <button onClick={handleReset} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200">
              Ulangi Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
