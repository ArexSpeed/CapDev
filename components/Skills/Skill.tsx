import SkillsIconSwitcher from 'components/IconsSwitcher/SkillsIconSwitcher';
import { FC } from 'react';
interface Props {
  name: string;
}

const Skill: FC<Props> = ({ name }) => {
  return (
    <div className="w-16 p-3 m-1 bg-white rounded-md ">
      <div className="flex flex-col items-center justify-center">
        <SkillsIconSwitcher name={name} className="w-6 h-6 text-blue" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Skill;
