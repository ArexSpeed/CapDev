import { Layout } from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { TitleBox } from '../../components/TitleBox/TitleBox';
import { SearchBox } from 'components/SerachBox/SearchBox';
/* import { useSession } from 'next-auth/client'; */

const ProjectsPage = () => {
  /*   const [session, loading] = useSession(); */
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {});
  return (
    //<Layout>
    <div className="flex flex-col w-full h-full p-4 bg-[#E5E5E5] ">
      <section className="flex flex-row items-center justify-between pb-4 ">
        <TitleBox
          title="Projects from our developers"
          button="Add new project"
          href="/projects/add"
          /* session={session} */
        />
      </section>
      <section className="flex flex-row items-center w-full h-8 bg-transparent">
        <SearchBox
          searchValue={searchValue}
          setSearchValue={''}
          placeholder="Search project by name"
        />
      </section>
      <p>Find dev by skills</p>
      <section className="projects__tags">
        <SkillsTags selectSkill={selectSkill} setSelectSkill={setSelectSkill} />
      </section>

      {/*  <Buttons
      activeButton={activeButton}
      setActiveButton={setActiveButton}
      value1="All projects"
      value2="Your projects"
      value3="Favorite"
      />

    {loading ? (
      <motion.section layout className="projects__cards">
        Loading projects...
      </motion.section>
    ) : ( */}
      {/* <motion.section layout className="projects__cards">
        {activeButton === 'All projects' && (
          <AnimatePresence>
            {projects
              .filter((project) =>
                project.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .filter((project) => {
                if (selectSkill[0] !== '')
                  return project.technology.indexOf(selectSkill[0]) !== -1;
                else return project;
              })
              .map((project) => (
                <ProjectCard
                  key={project.projectid}
                  projectid={project.projectid}
                  title={project.title}
                  userid={project.userid}
                  username={project.username}
                  userimage={project.userimage}
                  logo={project.logo}
                  link={project.link}
                  description={project.description}
                  technology={project.technology}
                  likes={project.likes}
                />
              ))}
          </AnimatePresence>
        )} */}
      {/* //Your projects */}
      {/* {activeButton === 'Your projects' && (
          <AnimatePresence>
            {projects
              .filter((project) => project.userid === session.user.id)
              .filter((project) =>
                project.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((project) => (
                <ProjectCard
                  key={project.projectid}
                  projectid={project.projectid}
                  title={project.title}
                  userid={project.userid}
                  username={project.username}
                  userimage={project.userimage}
                  logo={project.logo}
                  link={project.link}
                  description={project.description}
                  technology={project.technology}
                  likes={project.likes}
                />
              ))}
          </AnimatePresence>
        )} */}
      {/* Favorite */}
      {/* {activeButton === 'Favorite' && (
          <AnimatePresence>
            {projects
              .filter((project) =>
                project.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((project) => (
                <ProjectCard
                  key={project.projectid}
                  projectid={project.projectid}
                  title={project.title}
                  userid={project.userid}
                  username={project.username}
                  userimage={project.userimage}
                  logo={project.logo}
                  link={project.link}
                  description={project.description}
                  technology={project.technology}
                  likes={project.likes}
                />
              ))}
          </AnimatePresence>
        )}
      </motion.section> 
    )}*/}
      {/* 
  
; */}
    </div>
    //</Layout>
  );
};

export default ProjectsPage;
