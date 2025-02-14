import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="text-center p-6 bg-pink-500 text-white text-3xl font-bold"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      💕 😚 💖 Nuestra Historia Recién Comienza 💖😚 💕
    </motion.header>
  );
};

export default Header;