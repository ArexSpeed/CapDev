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
    import { motion } from 'framer-motion';

    interface ButtonsProps {
      activeButton: string;
      setActiveButton: (value: string) => void;
      value1: string;
      value2: string;
      value3: string;
      value4: string;
      /*   session: string; */
    }
    
    export const CommunityButtons = ({
      activeButton,
      setActiveButton,
      value1,
      value2,
      value3,
      value4
    }: ButtonsProps) => {
      return (
        <section className="flex w-full mt-4 mb-3 gap-11 text-20 ">
          <motion.button
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
            className={activeButton === '' ? ' text-blue font-bold' : ''}
            onClick={() => setActiveButton('')}>
            All Developers
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
    
  );
};

export default Buttons;
