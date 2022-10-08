import { BritainIcon, FranceIcon, PolandIcon } from 'components/Icons/FlagIcons';
import { HtmlIcon, JavaScriptIcon, ReactIcon } from 'components/Icons/SkillsIcons';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'components/Icons/SocialIcons';

function CommunityCard() {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-m">
      <div className="flex justify-end w-full h-4 gap-2 ml-auto">
        <BritainIcon />
        <FranceIcon />
        <PolandIcon />
      </div>
      <div className="mb-2 text-gray-900">
        <div className="flex flex-row items-center">
          <div className="h-[70px] w-[70px] rounded-full bg-cyan-600 mr-2">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Developer Name</h1>
            <h2>Frontend Developer</h2>
          </div>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-700">Main Skills</p>
      <div className="flex flex-row w-full h-6 gap-2 my-3 text-cyan-600">
        <ReactIcon />
        <JavaScriptIcon />
        <HtmlIcon />
      </div>
      <div className="flex flex-row items-center my-3">
        <button className="bg-[#F3F3F3] rounded w-[105px] h-[24px]">Profile</button>
        <button className="bg-[#17ABDB] rounded w-[105px] h-[24px]">Follow</button>
      </div>
      <div className="flex justify-end w-full h-3 gap-2 mt-6 ml-auto text-cyan-600">
        <FacebookIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
}

export default CommunityCard;
