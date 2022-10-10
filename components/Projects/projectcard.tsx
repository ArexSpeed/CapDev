import { HeartIcon, HeartOutlineIcon } from 'components/Icons/FontIcons';
import { WebsiteIcon } from 'components/Icons/SocialIcons';
import SkillsIconSwitcher from 'components/IconsSwitcher/SkillsIconSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
  date: string;
  skills?: string[];
  likes?: string[];
}

function ProjectCard({
  author,
  category,
  date,
  desc,
  employees,
  likes,
  link,
  logo,
  skills,
  title,
  id
}: Props) {
  const [follow, isFollow] = useState<boolean>(false);
  const [like, isLike] = useState<number>(0);

  const handleFollow = () => {
    isFollow(!follow);
    if (follow) {
      isLike(like + 1);
    } else {
      isLike(like - 1);
    }
  };
  return (
    <div className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-m">
      <div className="mb-2 text-gray-900">
        <div className="flex flex-row items-center">
          {logo ? (
            <div className="flex h-[50px] w-[50px] mr-3 ">
              <Image
                objectFit="contain"
                width={50}
                height={50}
                src={logo}
                className="rounded-full"
              />
            </div>
          ) : (
            <div className="h-[50px] w-[50px] rounded-full bg-cyan-600 mr-2"></div>
          )}

          <h1 className="ml-2 font-bold border-b-8 border-b-solid border-b-emerald-500">{title}</h1>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-700">{desc}.</p>
      <div className="flex flex-row w-full h-6 gap-2 my-3 text-cyan-600">
        {skills?.map((skill, index) => (
          <SkillsIconSwitcher name={skill} key={index} />
        ))}
      </div>
      <div className="flex flex-row items-center my-3">
        <div className="w-6 h-6 rounded-full bg-cyan-600 mr-">
          <img src={author?.imageUrl} alt="" />
        </div>
        <h1 className="ml-2">{author?.name}</h1>
      </div>
      <div className="flex justify-between ">
        <div className="flex">
          <button className="absolute w-6 h-6 text-cyan-600" onClick={handleFollow}>
            {follow ? <HeartOutlineIcon /> : <HeartIcon />}
            <div className="w-4 h-4 bg-[#95E616] rounded-full text-xs text-gray absolute bottom-[-5px] right-[-5px]">
              {like}
            </div>
          </button>
        </div>
        <button>
          <div className="flex items-center h-[33px] w-[133px] border-0 border-solid rounded-lg bg-[#95E616] text-cyan-600 gap-2">
            <WebsiteIcon />
            <Link href={`projects/${id}`}>
              <span className="text-black">Go to project</span>
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
