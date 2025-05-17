import React, { useState, useEffect } from "react";

const defaultImages = [
  {
    src: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Proses daur ulang botol plastik",
    id: "default-1",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Panel surya di pembangkit listrik",
    id: "default-2",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    alt: "Tanaman kecil",
    id: "default-3",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Emisi karbon dari industri",
    id: "default-4",
  },
  {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Komunitas melakukan penanaman pohon",
    id: "default-5",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Transportasi umum ramah lingkungan",
    id: "default-6",
  },
];

const MAX_IMAGES = 12;

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("ecoGalleryImages"));
    if (saved && saved.length > 0) {
      setImages(saved);
    } else {
      setImages(defaultImages);
      localStorage.setItem("ecoGalleryImages", JSON.stringify(defaultImages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ecoGalleryImages", JSON.stringify(images));
  }, [images]);

  const handleUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (images.length + files.length > MAX_IMAGES) {
      alert(`Maksimal ${MAX_IMAGES} gambar.`);
      return;
    }

    try {
      const newImages = await Promise.all(
        Array.from(files).map((file) => {
          return new Promise((resolve, reject) => {
            if (!file.type.startsWith("image/")) {
              reject(new Error("File harus berupa gambar"));
              return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
              resolve({
                src: event.target.result,
                alt: `Unggahan ${file.name.split(".")[0]}`,
                id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              });
            };
            reader.onerror = () => reject(new Error("Gagal membaca file"));
            reader.readAsDataURL(file);
          });
        })
      );

      setImages((prev) => [...prev, ...newImages]);
    } catch (error) {
      alert(error.message);
    } finally {
      e.target.value = null;
    }
  };

  const confirmDelete = (id) => {
    setImageToDelete(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    if (imageToDelete) {
      setImages((prev) => prev.filter((img) => img.id !== imageToDelete));
    }
    setShowDeleteModal(false);
    setImageToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setImageToDelete(null);
  };

  return (
    <section className="py-12 px-4 w-full mx-auto bg-white dark:bg-black transition-colors duration-300" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-8">Galeri Inspirasi</h2>

        <div className="mb-6 text-center">
          <label className="inline-block cursor-pointer px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
            Unggah Gambar
            <input type="file" accept="image/*" multiple className="hidden" onChange={handleUpload} disabled={images.length >= MAX_IMAGES} />
          </label>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {images.length}/{MAX_IMAGES} gambar terunggah. Format: JPG, PNG, GIF
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(({ id, src, alt }) => (
            <div key={id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all bg-white dark:bg-gray-800">
              <img
                src={src}
                alt={alt}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x600?text=Gambar+Tidak+Tersedia";
                  e.target.alt = "Gambar tidak dapat dimuat";
                }}
              />
              <div className="p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 truncate">{alt}</p>
              </div>
              <button
                onClick={() => confirmDelete(id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Hapus gambar ${alt}`}
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        {/* Modal Konfirmasi Hapus */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-sm w-full">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Konfirmasi Penghapusan</h3>
              <p className="mb-6 text-black dark:text-gray-300">Apakah Anda yakin ingin menghapus gambar ini?</p>
              <div className="flex justify-end space-x-3">
                <button onClick={cancelDelete} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white">
                  Batal
                </button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
