import { HeartIcon } from 'components/Icons/FontIcons';
import { CssIcon, HtmlIcon, ReactIcon, SassIcon } from 'components/Icons/SkillsIcons';
import { WebsiteIcon } from 'components/Icons/SocialIcons';
import SkillsIconSwitcher from 'components/IconsSwitcher/SkillsIconSwitcher';

type User = {
  id: string;
  name: string;
  imageUrl: string;
};

interface Props {
  id: string;
  author?: User;
  employees?: User[];
  title: string;
  category: string;
  logo?: string;
  link?: string;
  desc: string;
  data: string;
  skills?: string[];
  likes?: [];
}

function ProjectCard({
  author,
  category,
  data,
  desc,
  employees,
  likes,
  link,
  logo,
  skills,
  title,
  id
}: Props) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-m">
      <div className="mb-2 text-gray-900">
        <div className="flex flex-row items-center">
          <div className="h-[50px] w-[50px] rounded-full bg-cyan-600 mr-2">
            <img src="" alt="" />
          </div>
          <h1 className="ml-2 font-bold border-b-8 border-b-solid border-b-emerald-500">{title}</h1>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-700">{desc}.</p>
      <div className="flex flex-row w-full h-6 gap-2 my-3 text-cyan-600">
        {skills?.map((skill, index) => (
          <SkillsIconSwitcher name={skill} key={index} className="w-6 h-6" />
        ))}
      </div>
      <div className="flex flex-row items-center my-3">
        <div className="w-6 h-6 rounded-full bg-cyan-600 mr-">
          <img src={author?.imageUrl} alt="" />
        </div>
        <h1 className="ml-2">{author?.name}</h1>
      </div>
      <div className="static flex flex-row justify-between mt-2">
        <div className="flex">
          <button className="absolute w-6 h-6 text-cyan-600">
            <HeartIcon />
            <div className="w-4 h-4 bg-[#95E616] rounded-full text-xs text-gray-900 absolute bottom-[-5px] right-[-5px]">
              {likes}
            </div>
          </button>
        </div>
        <button>
          <div className="flex items-center h-[33px] w-[133px] border-0 border-solid rounded-lg bg-[#95E616] text-cyan-600">
            <WebsiteIcon />
            <span className="self-center text-gray-900">Go to project</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
