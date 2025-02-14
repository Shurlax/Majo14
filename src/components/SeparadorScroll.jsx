import { motion } from "framer-motion";

const SeparadorScroll = () => {
  return (
    <motion.div
      className="w-full flex justify-center items-center my-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-12 h-12 border-4 border-pink-500 rounded-full animate-bounce"></div>
    </motion.div>
  );
};

export default SeparadorScroll;
