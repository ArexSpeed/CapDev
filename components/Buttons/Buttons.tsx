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

const Buttons = ({ activeButton, setActiveButton }: ButtonsProps) => {
  return (
    <section className="flex w-full mt-4 mb-3 gap-11 text-20">
      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        className={activeButton === '' ? ' text-blue font-bold' : ''}
        onClick={() => setActiveButton('')}>
        All projects
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className={activeButton === 'Company' ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton('Company')}>
        Company
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className={activeButton === 'Single' ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton('Single')}>
        Single
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className={activeButton === 'Your' ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton('Your')}>
        Your
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className={activeButton === 'Favorite' ? ' text-blue font-bold  ' : ''}
        onClick={() => setActiveButton('Favorite')}>
        Favorite
      </motion.button>
    </section>
  );
};

export default Buttons;
