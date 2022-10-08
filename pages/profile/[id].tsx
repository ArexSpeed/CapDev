import Education from "components/Education";
import { BritainIcon, GermanyIcon, PolandIcon } from "components/Icons/FlagIcons";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "components/Icons/SocialIcons";
import { Layout } from "components/Layout";
import ProjectCard from "components/Projects/projectcard";
import Skill from "components/Skills/Skill";
import React from "react";

const ProfileId = () => {
  return <Layout> <div className="flex flex-col p-8">
  <div className="flex flex-row w-full bg-white rounded-md p-4" >
<div className="p-2 flex w-7/12" >
  <div>
  <div className="h-[150px] w-[150px] rounded-full bg-center bg-cover bg-cyan-600 mr-2 bg-no-repeat bg-[url('/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-photo.eb484903.jpg&w=96&q=75')]">

    </div>
  <div className="flex justify-center mt-8 ">
    <div className="mx-1">
    <FacebookIcon className="text-lightblue hover:text-blue cursor-pointer duration-300 w-6 h-6"/>
    </div>
    <div className="mx-1"><TwitterIcon className="text-lightblue hover:text-blue cursor-pointer duration-300 w-6 h-6"/></div>
    <div className="mx-1"><LinkedinIcon className="text-lightblue hover:text-blue cursor-pointer duration-300 w-6 h-6"/></div>
  </div>
  </div>
  <div className="ml-10">
<h2 className="text-2xl font-bold my-2">Developer Name</h2>
<h3 className="text-xl  my-2">Frontend Developer</h3>
<div className="flex">
<PolandIcon className = 'w-6 h-6 m-1'/>
<GermanyIcon className = 'w-6 h-6 m-1'/>
<BritainIcon className = 'w-6 h-6 m-1'/>
</div>
</div>
  </div>
  
<div className="flex flex-col w-5/12 justify-between px-10">
<div className="flex flex-col justify-between">
  <h4 className="my-3 ">About me</h4>
  <span className="font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, voluptate necessitatibus saepe amet nobis reiciendis.</span>
</div>
<div className="w-full flex justify-end">
<button className="h-[24px] w-[104px] rounded-md bg-[#17ABDB] text-white my-5 ">
    <span className="self-center text-gray-900">Follow</span>
  </button>
</div>

</div>


  </div>
  <div className="skills">
    <h4 className="my-3">Skills</h4>
    <div className="flex flex-wrap">
    <Skill/>
    <Skill/>
    <Skill/>

    </div>
    
  </div>
  <div className="experienceEducation flex flex-row w-full">
  <div className="experience w-1/2">
    <h4 className="my-3">Experience</h4>
    <Education/>
    <Education/>
    <Education/>

    
    
  </div>
  <div className="w-1/2 ">
    <h4 className="my-3">Education</h4>
    <Education/>
    <Education/>
    <Education/>
  </div>
  </div>
  <div>
    <h4 className="my-3">Projects</h4>
    <div className=" flex gap-x-10 gap-y-10 flex-wrap w-full">

    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    </div>
  </div>
</div>
</Layout>;
};

export default ProfileId;
