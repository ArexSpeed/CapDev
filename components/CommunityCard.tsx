import FlagIconSwitcher from '../components/IconsSwitcher/FlagIconSwitcher';
import SocialIconSwitcher from '../components/IconsSwitcher/SocialIconSwitcher';
import SkillsIconSwitcher from '../components/IconsSwitcher/SkillsIconSwitcher';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  userId?: string;
  name?: string;
  imageSrc?: string;
  position?: string;
  skills?: string[];
  langs?: string[];
  socials?: { name: string; link: string }[];
  followers?: any;
  currentUserFollowed?: boolean;
  openToWork?: boolean;
  imageUrl?: string;
}

export const CommunityCard = ({
  userId,
  name,
  imageUrl,
  position,
  skills,
  langs,
  socials,
  openToWork
}: CardProps) => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-end w-full h-4 gap-2 ml-auto">
        {langs?.map((lang, i) => (
          <FlagIconSwitcher key={i} country={lang} />
        ))}
      </div>
      <div className="mb-2 text-gray-900">
        <div className="flex flex-row items-center">
          {imageUrl ? (
            <div className="flex h-[70px] w-[70px] mr-3 ">
              <Image
                objectFit="contain"
                width={70}
                height={70}
                src={imageUrl}
                className="rounded-full"
              />
            </div>
          ) : (
            <div className="h-[70px] w-[70px] rounded-full bg-cyan-600 mr-3"></div>
          )}

          <div className="flex flex-col">
            <h1 className="font-bold"> {name} </h1>
            <h2> {position} </h2>
          </div>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-700">Main Skills</p>
      <div className="flex flex-row w-full h-6 gap-2 my-3 text-cyan-600">
        {skills?.map((skill, i) => (
          <SkillsIconSwitcher key={i} name={skill} className="icon-medium secondary-blue" />
        ))}
      </div>
      <div className="flex items-center justify-between w-full my-3">
        <button className="bg-[#F3F3F3] rounded w-[105px] h-[24px]">
          <Link href={`/profile/${userId}`}>Profile</Link>
        </button>

        <button className="bg-[#17ABDB] rounded w-[105px] h-[24px]">Follow</button>
      </div>
      <div className="flex items-center justify-between ">
        {openToWork ? (
          <span className="p-1 rounded text-12 bg-green">OPEN TO WORK</span>
        ) : (
          <span></span>
        )}
        <div className="flex items-center h-7 ">
          {socials?.map((social, i) => (
            <Link key={i} href={social.link} passHref>
              <a>
                <SocialIconSwitcher
                  name={social.name}
                  className="flex w-3 h-3 gap-2 m-1 text-cyan-600"
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
