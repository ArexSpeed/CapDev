import { motion } from 'framer-motion';

interface ButtonsProps {
  activeButton: string;
  setActiveButton: (value: string) => void;
  /*   session: string; */
}

export const CommunityButtons = ({ activeButton, setActiveButton }: ButtonsProps) => {
  return (
    <section className="flex w-full mt-4 mb-3 gap-11 text-20 ">
      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        className={activeButton === '' ? ' text-blue font-bold' : ''}
        onClick={() => setActiveButton('')}>
        All developers
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className={activeButton === 'Friends' ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton('Friends')}>
        Friends
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className={activeButton === 'Followers' ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton('Followers')}>
        Followers
      </motion.button>

      <motion.button
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        className={activeButton === 'Projects' ? ' text-blue font-bold ' : ''}
        onClick={() => setActiveButton('Projects')}>
        Projects
      </motion.button>
    </section>
  );
};
