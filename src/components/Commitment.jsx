import React, { useState, useEffect } from "react";

export default function Commitment() {
  const [name, setName] = useState("");
  const [promise, setPromise] = useState("");
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ecoCommitments")) || [];
    setCommitments(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && promise.trim()) {
      const newEntry = { name, promise };
      const updated = [newEntry, ...commitments];
      setCommitments(updated);
      localStorage.setItem("ecoCommitments", JSON.stringify(updated));
      setName("");
      setPromise("");
    }
  };

  return (
    <section className="py-12 px-4 w-full mx-auto bg-white dark:bg-black transition-colors duration-300" id="commitment">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-6">Janji untuk Bumi</h2>

        <form onSubmit={handleSubmit} className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow mb-8 space-y-4 transition-colors duration-300">
          <div>
            <label className="block mb-1 font-medium text-sm text-black dark:text-gray-200">Nama:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Nama Anda"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm text-black dark:text-gray-200">Janji Aksi:</label>
            <input
              type="text"
              value={promise}
              onChange={(e) => setPromise(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Contoh: Mengurangi sampah plastik"
              required
            />
          </div>
          <button type="submit" className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors duration-300">
            Simpan Janji
          </button>
        </form>

        <div>
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">Janji dari Pengunjung Lain</h3>
          <ul className="space-y-3">
            {commitments.map((entry, idx) => (
              <li key={idx} className="bg-white dark:bg-gray-800 p-4 rounded shadow border-l-4 border-green-600 dark:border-green-400 transition-colors duration-300">
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{entry.promise}"</p>
                <p className="text-sm font-semibold text-green-800 dark:text-green-400 mt-1">- {entry.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
