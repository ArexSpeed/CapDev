import SkillsIconSwitcher from './Icons/SkillsIcons';
import { motion } from 'framer-motion';

// eslint-disable-next-line prettier/prettier
const skills = [
  'html',
  'css',
  'sass',
  'react',
  'javascript',
  'typescript',
  'tailwind',
  'node',
  'next',
  'angular',
  'csharp',
  'cplus',
  'php',
  'drupal',
  'java',
  'python',
  'postgres',
  'mongo',
  'wordpress',
  'net'
];

const SkillsTags = ({ selectSkill, setSelectSkill }) => {
  const toggleSkill = (skill) => {
    selectSkill[0] === skill ? setSelectSkill(['']) : setSelectSkill([skill]);
  };

  return (
    <div className="skillstags">
      {skills.map((skill, i) => (
        <motion.button
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: i / 50 }}
          key={i}
          className={`skillstags__button ${selectSkill[0] === skill ? 'active' : ''}`}
          onClick={() => toggleSkill(skill)}>
          <div>
            <SkillsIconSwitcher
              name={skill}
              className={`icon-large ${
                selectSkill[0] === skill ? 'primary-white' : 'secondary-blue'
              }`}
            />
          </div>
          <span>{skill}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default SkillsTags;
