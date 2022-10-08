import Education from "components/Education";
import { Layout } from "components/Layout";
import ProjectCard from "components/Projects/projectcard";
import Skill from "components/Skills/Skill";
import React from "react";

const ProfilePage = () => {
  return <Layout> <div className="flex flex-col p-8">
    <div className="flex flex-row w-full bg-white rounded-md p-4" >
  <div className="p-2 flex w-7/12" >
    <div>
    <div className="flex flex-column">
      Picture
    </div>
    <div className="">

      socials
    </div>
    </div>
    <div className="description">
  <h2>Developer Name</h2>
  <h3>Frontend Developer</h3>
  XXX
    
  
</div>
    </div>
    
<div className="flex-row w-5/12">
  <div className="flex justify-between ">
    <h4 className="my-3">About me</h4>
    <div>X</div>
  </div>
  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, voluptate necessitatibus saepe amet nobis reiciendis.</span>
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
      <div className=" flex gap-x-10 gap-y-10 flex-wrap">

      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>
    </div>
  </div>
  </Layout>
};

export default ProfilePage;
