import Education from 'components/Education';
import { BritainIcon, GermanyIcon, PolandIcon } from 'components/Icons/FlagIcons';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'components/Icons/SocialIcons';
import FlagIconSwitcher from 'components/IconsSwitcher/FlagIconSwitcher';
import SocialIconSwitcher from 'components/IconsSwitcher/SocialIconSwitcher';
import { Layout } from 'components/Layout';
import ProjectCard from 'components/Projects/projectcard';
import Skill from 'components/Skills/Skill';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllUsers, getOneUser } from 'services/users/getUsers';

type Users = {
  location?: string;
  about?: string;
  experience?: [];
  education?: [];
  openToProject?: boolean;
  friends?: [];
  followers?: [];
  projetcs?: [];
  _id: string;
  name: string;
  email: string;
  imageUrl?: string;
  position?: string;
  languages?: [];
  skills?: [];
  socials: [];
};
interface Props {
  userProp: any;
}

export async function getStaticPaths() {
  const users = await getAllUsers();
  const paths = users.map((user) => ({
    params: { id: user._id.toString() }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  const user = await getOneUser(params.id);
  return { revalidate: 30, props: { userProp: JSON.stringify(user) } };
}

const ProfileId: NextPage<Props> = ({ userProp }) => {
  const user = JSON.parse(userProp);
  return (
    <Layout>
      {' '}
      <div className="flex flex-col p-8">
        <div className="flex flex-row w-full p-4 bg-white rounded-md">
          <div className="flex w-7/12 p-2">
            <div>
              <div className="h-[150px] w-[150px] rounded-full bg-center bg-cover bg-cyan-600 mr-2 overflow-hidden">
                <img className="h-[150px] w-[150px] rounded-full" src={user?.imageUrl} alt="" />
              </div>
              <div className="flex justify-center mt-8 ">
                {user?.socials.map((social: { [keyof: string]: string }, i: any) => (
                  <Link key={i} href={social.link}>
                    <div>
                      <SocialIconSwitcher
                        key={i}
                        name={social.name}
                        className="w-6 h-6 duration-300 cursor-pointer text-lightblue hover:text-blue"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10">
              <h2 className="my-2 text-2xl font-bold">{user?.name}</h2>
              <h3 className="my-2 text-xl">{user?.position}</h3>
              <div className="flex">
                {user?.languages.map((lang: string, i: any) => (
                  <FlagIconSwitcher key={i} country={lang} className="w-6 h-6 mr-2" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-5/12 px-10">
            <div className="flex flex-col justify-between">
              <h4 className="my-3 ">About me</h4>
              <span className="font-medium">{user?.about}</span>
            </div>
            <div className="flex justify-end w-full">
              <button className="h-[24px] w-[104px] rounded-md bg-[#17ABDB] text-white my-5 ">
                <span className="self-center text-gray-900">Follow</span>
              </button>
            </div>
          </div>
        </div>
        <div className="skills">
          <h4 className="my-3">Skills</h4>
          <div className="flex flex-wrap">
            {user?.skills.map((skill: string, i: any) => (
              <Skill key={i} name={skill} />
            ))}
          </div>
        </div>
        <div className="flex flex-row w-full experienceEducation">
          <div className="w-1/2 experience">
            <h4 className="my-3">Experience</h4>
            <Education date="2-11-2016" university="AWF" department="Education" field="Fitness" />
            <Education date="4-12-2017" university="WSB" department="Programming" field="ML" />
            <Education
              date="24-09-2019"
              university="Hogwords"
              department="Programming"
              field="Back-End"
            />
          </div>
          <div className="w-1/2 ">
            <h4 className="my-3">Education</h4>
            <Education date="2-11-2016" university="AWF" department="Education" field="Fitness" />
            <Education date="4-12-2017" university="WSB" department="Programming" field="ML" />
            <Education
              date="24-09-2019"
              university="Hogwords"
              department="Programming"
              field="Back-End"
            />
          </div>
        </div>
        <div>
          <h4 className="my-3">Projects</h4>
          <div className="flex flex-wrap w-full gap-x-10 gap-y-10">
            <ProjectCard
              id="1"
              title="Word"
              category="Single"
              desc="Microsoft project for capgemini developers"
              date="07-10-2018"
              logo="https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649160947/cjk8esmlcw8kgn96jkjm.png"
              skills={['javascript', 'html', 'react']}
            />
            <ProjectCard
              id="2"
              title="RedBull"
              category="Single"
              desc="Project for the biggest energy and sport company"
              date="07-10-2018"
              logo="https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161275/brqwggtjehbqa9lo3ovo.png"
              skills={['csharp', 'css', 'java']}
            />
            <ProjectCard
              id="3"
              title="Multiword"
              category="Single"
              desc="Own project for learning languages"
              date="07-10-2018"
              logo="https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649159187/lglxametaupdrpahsk4q.png"
              skills={['react', 'next', 'tailwind']}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileId;
