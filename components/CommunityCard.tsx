import { BritainIcon, FranceIcon, PolandIcon } from 'components/Icons/FlagIcons';
import { HtmlIcon, JavaScriptIcon, ReactIcon } from 'components/Icons/SkillsIcons';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'components/Icons/SocialIcons';

interface CardProps {
  name?: string;
  imageSrc?: string;
  position?: string;
  skills?: string;
  langs?: string;
  socials?: string;
  followers?: any;
  currentUserFollowed?: boolean;
  openToWork?: boolean;
}

export const CommunityCard = ({
  name,
  imageSrc,
  position,
  skills,
  langs,
  socials,
  openToWork
}: CardProps) => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-end w-full h-4 gap-2 ml-auto">
        <BritainIcon />
        <FranceIcon />
        <PolandIcon />
      </div>
      <div className="mb-2 text-gray-900">
        <div className="flex flex-row items-center">
          <div className="h-[70px] w-[70px] rounded-full bg-cyan-600 mr-2">
            <img src={imageSrc} alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold"> {name} </h1>
            <h2> {position} </h2>
          </div>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-700">Main Skills</p>
      <div className="flex flex-row w-full h-6 gap-2 my-3 text-cyan-600">
        <ReactIcon />
        <JavaScriptIcon />
        <HtmlIcon />
      </div>
      <div className="flex items-center justify-between w-full my-3">
        <button className="bg-[#F3F3F3] rounded w-[105px] h-[24px]">Profile</button>
        <button className="bg-[#17ABDB] rounded w-[105px] h-[24px]">Follow</button>
      </div>
      <div className="flex items-end ">
        {openToWork && <span className="p-1 rounded text-12 bg-green">OPEN TO WORK</span>}
        <span className="flex justify-end h-3 gap-2 mt-6 ml-auto text-cyan-600">
          <FacebookIcon className="w-3 h-3" />
          <TwitterIcon className="w-3 h-3" />
          <LinkedinIcon className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
