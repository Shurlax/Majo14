import { useState } from 'react';
import { motion } from 'framer-motion';

// Cargar imágenes automáticamente desde /src/assets/
const imagenes = Object.values(import.meta.glob('/src/assets/*.jpg', { eager: true })).map(img => img.default);

const Galeria = () => {
  const [index, setIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const cambiarImagen = (nuevaIndex) => {
    setIndex((prevIndex) => {
      const nuevoValor = (prevIndex + nuevaIndex + imagenes.length) % imagenes.length;
      return nuevoValor;
    });
  };

  const manejarEnfoque = () => {
    setIsFocused(true);
    setTimeout(() => {
      setIsFocused(false); // Restablece el enfoque después de un pequeño tiempo
    }, 1000);
  };

  return (
    <div className="galeria-container py-16 relative">
      {/* Fondo detrás de la galería */}
      <div className="bg-gray-800 bg-opacity-70 absolute inset-0 z-10"></div>

      <section className="titulo-galeria mb-16 relative z-20">
  {/* Fondo ajustado al tamaño del texto en todos los lados */}
  <div className="absolute inset-0 bg-pink-600 opacity-50 rounded-lg z-10 flex justify-center items-center p-4">
    <h2 className="text-4xl font-bold text-white text-center relative z-20">Nuestra Galería 📸</h2>
  </div>
</section>




      {/* Contenedor de imágenes de la galería */}
      <section className="imagenes-galeria flex justify-center items-center gap-8 mt-16 relative z-20">
        {/* Imagen anterior */}
        <motion.img
          key={index - 1}
          src={imagenes[(index - 1 + imagenes.length) % imagenes.length]}
          alt={`Foto ${index}`}
          className="galeria-imagen anterior-siguiente"
          initial={{ opacity: 0.3, scale: 0.6 }}
          animate={{ opacity: 0.3, scale: 0.6 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            cambiarImagen(-1);
            manejarEnfoque(); 
          }}
        />

        <motion.img
          key={index}
          src={imagenes[index]}
          alt={`Foto ${index + 1}`}
          className="galeria-imagen"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: isFocused ? 1.4 : 1 }} // Aumenta el tamaño cuando tiene enfoque
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          style={{ maxHeight: "90vh" }} // Limitar la altura máxima de la imagen principal
        />

        {/* Imagen siguiente */}
        <motion.img
          key={index + 1}
          src={imagenes[(index + 1) % imagenes.length]}
          alt={`Foto ${index + 2}`}
          className="galeria-imagen siguiente-anterior"
          initial={{ opacity: 0.3, scale: 0.6 }}
          animate={{ opacity: 0.3, scale: 0.6 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            cambiarImagen(1);
            manejarEnfoque(); // Activar enfoque cuando se hace clic
          }}
        />
      </section>
    </div>
  );
};

export default Galeria;
