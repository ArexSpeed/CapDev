import { motion } from 'framer-motion';

export interface ButtonsProps {
  activeButton: string;
  setActiveButton: (value: string) => void;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;

  /*   session: string; */
}

const Buttons = ({
  activeButton,
  setActiveButton,
  value1,
  value2,
  value3,
  value4,
  value5
}: ButtonsProps) => {
  return (
    <section className="flex w-full mt-4 mb-3 gap-11 text-20">
      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        className={activeButton === value1 ? ' text-blue font-bold' : ''}
        onClick={() => setActiveButton(value1)}>
        {value1}
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className={activeButton === value2 ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton(value2)}>
        {value2}
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className={activeButton === value3 ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton(value3)}>
        {value3}
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className={activeButton === value4 ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton(value4)}>
        {value4}
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className={activeButton === value5 ? ' text-blue font-bold  ' : ''}
        onClick={() => setActiveButton(value5)}>
        {value5}
      </motion.button>
    </section>
  );
};

export default Buttons;
