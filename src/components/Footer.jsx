import React from "react";
import { FaHome, FaVideo, FaChartBar, FaHandsHelping, FaImages, FaHeart, FaQuestion, FaInfoCircle } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", href: "#hero", icon: <FaHome className="mr-2" /> },
    { name: "Edukasi", href: "#education-video", icon: <FaVideo className="mr-2" /> },
    { name: "Infografis", href: "#education-infographic", icon: <FaChartBar className="mr-2" /> },
    { name: "Aksi", href: "#actions", icon: <FaHandsHelping className="mr-2" /> },
    { name: "Galeri", href: "#gallery", icon: <FaImages className="mr-2" /> },
    { name: "Komitmen", href: "#commitment", icon: <FaHeart className="mr-2" /> },
    { name: "Quiz", href: "#quiz", icon: <FaQuestion className="mr-2" /> },
    { name: "Tentang", href: "#about", icon: <FaInfoCircle className="mr-2" /> },
  ];

  const middleIndex = Math.ceil(links.length / 2);
  const firstColumn = links.slice(0, middleIndex);
  const secondColumn = links.slice(middleIndex);

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm text-gray-300">EcoVision adalah platform edukatif yang bertujuan meningkatkan kesadaran masyarakat tentang bahaya polusi plastik terhadap lingkungan melalui informasi, aksi, dan komitmen.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            {[firstColumn, secondColumn].map((column, index) => (
              <ul key={index} className="text-sm space-y-2">
                {column.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center hover:text-green-400 transition-colors">
                      {link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: ecovision@gmail.com</p>
          <p className="text-sm text-gray-300">Phone: +62-812-3456-7890</p>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="text-center text-sm text-gray-400">© 2025 EcoVision. All rights reserved.</div>
    </footer>
  );
}
