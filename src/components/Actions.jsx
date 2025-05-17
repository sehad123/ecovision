import React, { useState, useEffect } from "react";

const initialTasks = [
  { id: 1, label: "Bawa tas belanja sendiri", checked: false },
  { id: 2, label: "Kurangi konsumsi air", checked: false },
  { id: 3, label: "Matikan lampu saat tidak digunakan", checked: false },
  { id: 4, label: "Gunakan transportasi umum", checked: false },
];

export default function Actions() {
  const [tasks, setTasks] = useState([]);
  const [electricity, setElectricity] = useState("");
  const [transport, setTransport] = useState("");
  const [result, setResult] = useState(null);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("ecoTasks"));
    if (savedTasks && Array.isArray(savedTasks) && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      setTasks(initialTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ecoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, checked: !task.checked } : task)));
  };

  const calculateCarbon = () => {
    const e = parseFloat(electricity) || 0;
    const t = parseFloat(transport) || 0;
    const total = e * 0.85 + t * 0.21;
    const fixedTotal = total.toFixed(2);
    setResult(fixedTotal);

    if (total < 100) {
      setSummary("Jejak karbon Anda tergolong RENDAH. Pertahankan kebiasaan ramah lingkungan!");
    } else if (total < 300) {
      setSummary("Jejak karbon Anda SEDANG. Masih ada ruang untuk mengurangi emisi lebih lanjut.");
    } else {
      setSummary("Jejak karbon Anda TINGGI. Pertimbangkan perubahan gaya hidup untuk keberlanjutan.");
    }
  };

  return (
    <section className="py-12 px-4 w-full bg-white dark:bg-black transition-colors duration-300" id="actions">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-8">Aksi Nyata</h2>

        {/* Grid 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kolom kiri: Checklist */}
          <div className="mt-3">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">Checklist Aksi Harian</h3>
            <ul className="space-y-3">
              {tasks.map((task) => (
                <li key={task.id} className="flex items-center gap-3">
                  <input type="checkbox" checked={task.checked} onChange={() => toggleTask(task.id)} className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className={task.checked ? "line-through text-gray-500 dark:text-gray-400" : "text-black dark:text-white"}>{task.label}</span>
                </li>
              ))}
            </ul>
            {tasks.length > 0 && tasks.every((task) => task.checked) && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded shadow">
                🎉 <strong>Selamat!</strong> Anda telah menyelesaikan semua aksi harian. Terus pertahankan kebiasaan ramah lingkungan Anda!
              </div>
            )}
          </div>

          {/* Kolom kanan: Kalkulator */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">Kalkulator Jejak Karbon</h3>
            <div className="grid gap-4">
              <div>
                <label className="block mb-2 text-sm text-black dark:text-white">Konsumsi listrik (kWh/bulan):</label>
                <input
                  type="number"
                  value={electricity}
                  onChange={(e) => setElectricity(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
                  placeholder="Contoh: 100"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-black dark:text-white">Jarak tempuh transportasi (km/minggu):</label>
                <input
                  type="number"
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
                  placeholder="Contoh: 50"
                />
              </div>
            </div>
            <button onClick={calculateCarbon} className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors">
              Hitung Jejak Karbon
            </button>

            {result && (
              <div className="mt-6 bg-green-50 dark:bg-green-900 p-4 rounded shadow-inner text-black dark:text-green-300 transition-colors">
                <p className="text-green-700 dark:text-green-400 font-medium text-lg">
                  Perkiraan jejak karbon bulanan Anda: <span className="font-bold">{result} kg CO₂</span>
                </p>
                <p className="mt-2 text-gray-700 dark:text-green-300">{summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
