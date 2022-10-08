import SkillsIconSwitcher from '../IconsSwitcher/SkillsIconSwitcher';
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

export interface SkillsTagsProps {
  selectSkill: any;
  setSelectSkill: any;
  /*   session: string; */
}

const SkillsTags = ({ selectSkill, setSelectSkill }: SkillsTagsProps) => {
  /* const [active, setActive] = UseState(''); */
  const toggleSkill = (skill: string) => {
    selectSkill[0] === skill ? setSelectSkill(['']) : setSelectSkill([skill]);
  };

  return (
    <div className="flex skillstags">
      {skills.map((skill, i) => (
        <button>
          <div className="">
            <SkillsIconSwitcher name={skill} className="w-6 h-6 " />
          </div>
        </button>
      ))}
    </div>
  );
};

export default SkillsTags;
