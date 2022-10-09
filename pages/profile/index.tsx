import Education from 'components/Education';
import { BritainIcon, GermanyIcon, PolandIcon } from 'components/Icons/FlagIcons';
import { EditIcon } from 'components/Icons/FontIcons';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'components/Icons/SocialIcons';
import { Layout } from 'components/Layout';
import ProjectCard from 'components/Projects/projectcard';
import Skill from 'components/Skills/Skill';
import React from 'react';

const ProfilePage = () => {
  return (
    <Layout>
      {' '}
      <div className="flex flex-col p-8">
        <div className="flex flex-row w-full p-4 bg-white rounded-md">
          <div className="flex w-7/12 p-2">
            <div>
              <div className="h-[150px] w-[150px] rounded-full bg-center bg-cover bg-cyan-600 mr-2 bg-no-repeat bg-[url('/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-photo.eb484903.jpg&w=96&q=75')]"></div>
              <div className="flex justify-center mt-8 ">
                <div className="mx-1">
                  <FacebookIcon className="w-6 h-6 duration-300 cursor-pointer text-lightblue hover:text-blue" />
                </div>
                <div className="mx-1">
                  <TwitterIcon className="w-6 h-6 duration-300 cursor-pointer text-lightblue hover:text-blue" />
                </div>
                <div className="mx-1">
                  <LinkedinIcon className="w-6 h-6 duration-300 cursor-pointer text-lightblue hover:text-blue" />
                </div>
              </div>
            </div>
            <div className="ml-10">
              <h2 className="my-2 text-2xl font-bold">Developer Name</h2>
              <h3 className="my-2 text-xl">Frontend Developer</h3>
              <div className="flex">
                <PolandIcon className="w-5 m-1" />
                <GermanyIcon className="w-5 m-1 " />
                <BritainIcon className="w-5 m-1" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-5/12 px-10">
            <div className="flex justify-between">
              <h4 className="my-3 ">About me</h4>
              <a href="">
                <EditIcon />
              </a>
            </div>
            <span className="font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, voluptate
              necessitatibus saepe amet nobis reiciendis.
            </span>
          </div>
        </div>
        <div className="skills">
          <h4 className="my-3">Skills</h4>
          <div className="flex flex-wrap">
            <Skill name="" />
            <Skill name="" />
            <Skill name="" />
          </div>
        </div>
        <div className="flex flex-row w-full experienceEducation">
          <div className="w-1/2 experience">
            <h4 className="my-3">Experience</h4>
            <Education />
            <Education />
            <Education />
          </div>
          <div className="w-1/2 ">
            <h4 className="my-3">Education</h4>
            <Education />
            <Education />
            <Education />
          </div>
        </div>
        <div>
          <h4 className="my-3">Projects</h4>
          <div className="flex flex-wrap gap-x-10 gap-y-10">
            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
