import { useEffect, useState } from "react";

const images = [
  "https://blog.uniaoconstrucoes.com.br/wp-content/uploads/2022/12/apartamento-para-casal-jovem.jpeg",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="flex items-center justify-center border border-love rounded-xl p-2 w-full max-w-sm">
  <div className="relative w-full aspect-[9/16]">
    <img
      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      src={images[currentIndex]}
      alt={`Imagem ${currentIndex + 1}`}
    />

    {/* Botão Anterior */}
    <button
      onClick={prevImage}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center justify-center bg-white text-gray-900 opacity-60 hover:opacity-90 rounded-full px-2 py-1 cursor-pointer"
    >
      <i className="bi bi-chevron-left"></i>
    </button>

    {/* Botão Próximo */}
    <button
      onClick={nextImage}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center bg-white text-gray-900 opacity-60 hover:opacity-90 rounded-full px-2 py-1 cursor-pointer"
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  </div>
</div>
);
}
