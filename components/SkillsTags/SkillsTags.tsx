import SkillsIconSwitcher from '../IconsSwitcher/SkillsIconSwitcher';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
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
  selectSkill: string[];
  setSelectSkill: (value: string[]) => void;
}

const SkillsTags = ({ selectSkill, setSelectSkill }: SkillsTagsProps) => {
  const toggleSkill = (skill: string) => {
    selectSkill[0] === skill ? setSelectSkill(['']) : setSelectSkill([skill]);
  };

  return (
    <div className="flex w-full bg-white rounded-lg">
      {skills.map((skill, i) => (
        <motion.button
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: i / 50 }}
          key={i}
          className={`${selectSkill[0] === skill ? 'active' : ''}`}
          onClick={() => toggleSkill(skill)}>
          <div>
            <SkillsIconSwitcher
              name={skill}
              className={`${
                selectSkill[0] === skill
                  ? 'text-blue h-9 w-9 p-[2px] border-4 rounded'
                  : ' text-blue  h-9 w-9 p-[6px]'
              }`}
            />
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default SkillsTags;
