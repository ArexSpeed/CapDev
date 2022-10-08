import { motion } from 'framer-motion';

export interface SubButtonsProps {
  activeSubButton: string;
  setActiveSubButton: (value: string) => void;
  value1: string;
  value2: string;
  /*   session: string; */
}

const Buttons = ({ activeSubButton, setActiveSubButton, value1, value2 }: SubButtonsProps) => {
  return (
    <section className="flex w-full mt-4 mb-3 gap-11 text-20 ">
      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        className={activeSubButton === value1 ? ' text-blue font-bold' : ''}
        onClick={() => setActiveSubButton(value1)}>
        {value1}
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className={activeSubButton === value2 ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveSubButton(value2)}>
        {value2}
      </motion.button>
    </section>
  );
};

export default Buttons;
