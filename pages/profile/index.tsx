import React, { useState } from 'react';

const ProfilePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full">
        <div>
          <div className="">Picture</div>
          <div className="">socials</div>
        </div>
        <div className="description">
          <h2>Developer Name</h2>
          <h3>Frontend Developer</h3>
          XXX
        </div>
        <div className="flex-row">
          <div className="flex justify-between ">
            <h4>About me</h4>
            <div>X</div>
          </div>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, voluptate
            necessitatibus saepe amet nobis reiciendis.
          </span>
        </div>
      </div>
      <div className="skills">
        <h4>Skills</h4>
      </div>
      <div className="flex flex-row experienceEducation">
        <div className="experience">
          <h4>Experience</h4>
        </div>
        <div className="education">
          <h4>Education</h4>
        </div>
      </div>
      <div className="projects">
        <h4>Projects</h4>
      </div>
    </div>
  );
};

export default ProfilePage;
