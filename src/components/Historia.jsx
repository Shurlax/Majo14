import { motion } from "framer-motion";

const Historia = () => {
  return (
    <section className="p-12 text-center bg-pink-100 flex flex-col items-center">
   <section className="titulo-historia p-12 text-center bg-pink-100 relative flex flex-col items-center min-h-[200px]">
  {/* Fondo detrás del título */}
  <div className="absolute inset-0 bg-pink-600 opacity-50 rounded-lg z-10"></div>

  <h2 className="text-4xl font-bold text-white mb-8 relative z-20">💑 Nuestra Historia 💑</h2>
</section>

      <motion.div
        className="max-w-2xl space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-xl text-gray-700">
          ❤️De la forma menos esperada te conocí, solo fue necesario verte una vez para saber que te quería en mi vida...❤️
        </p>

        <p className="text-xl text-gray-700">
        Desde entonces, cada día ha sido una aventura en todos los sentidos. ✨ Me has enseñado a quererte más y más cada día y me has regalado momentos inolvidables. 💫🥰        </p>

        <p className="text-xl text-gray-700">
        Sé que no ha sido fácil llegar hasta hoy, pero juntos hemos superado cada obstáculo que se ha presentado en nuestro camino. 💪💖✨         </p>
         
          <p className="text-xl text-gray-700">
          Eres una mujer maravillosa en todos los sentidos: inteligente, carismática, noble, hermosa y llena de amor. TE QUIERO DE VERDAD, MI PRINCESITA. 💖✨         </p>
      </motion.div>
    </section>
  );
};

export default Historia;