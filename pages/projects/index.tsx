import { Layout } from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { TitleBox } from '../../components/TitleBox/TitleBox';
import { SearchBox } from 'components/SerachBox/SearchBox';
import SkillsTags from '../../components/SkillsTag/SkillsTag';
import ProjectCard from 'components/Projects/projectcard';
import Buttons from 'components/Buttons/Buttons';
/* import { useSession } from 'next-auth/client'; */

const ProjectsPage = () => {
  /*   const [session, loading] = useSession(); */
  const [searchValue, setSearchValue] = useState('');
  const [selectSkill, setSelectSkill] = useState(['']);
  const [activeButton, setActiveButton] = useState('All projects');
  useEffect(() => {});
  return (
    <Layout>
      <div className="font-roboto flex flex-col w-full h-full p-4 bg-[#E5E5E5] ">
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
            setSearchValue={setSearchValue}
            placeholder="Search project by name"
          />
        </section>
        <p className="font-normal pt-[14px] pb-2">Find dev by skills</p>
        <section className="w-full bg-white rounded-lg">
          <SkillsTags selectSkill={selectSkill} setSelectSkill={setSelectSkill} />
        </section>
        <Buttons
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          value1="All projects"
          value2="Company"
          value3="Single"
          value4="Your"
          value5="Favorite"
        />
        <div></div>
        <ProjectCard></ProjectCard>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
