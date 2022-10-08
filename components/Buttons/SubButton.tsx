import { motion } from 'framer-motion';

export interface SubButtonProps {
  activeSubButton: string;
  setActiveSubButton: (value: string) => void;
  value1: string;
  value2: string;
}

const SubButtons = ({ activeSubButton, setActiveSubButton, value1, value2 }: SubButtonProps) => {
  return (
    <section className="grid grid-cols-2 pt-3 w-[130px]  justify-items-start text-16">
      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        className={activeSubButton === value1 ? ' text-lightblue font-semibold' : ''}
        onClick={() => setActiveSubButton(value1)}>
        {value1}
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className={activeSubButton === value2 ? ' text-lightblue font-semibold ' : ''}
        onClick={() => setActiveSubButton(value2)}>
        {value2}
      </motion.button>
    </section>
  );
};

export default SubButtons;
