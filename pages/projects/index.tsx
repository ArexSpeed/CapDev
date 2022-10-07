import { Layout } from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { TitleBox } from '../../components/TitleBox/TitleBox';
import { SearchBox } from 'components/SerachBox/SearchBox';
import SkillsTags from 'components/SkillsTag';
import ProjectCard from 'components/Projects/projectcard';
/* import { useSession } from 'next-auth/client'; */

const ProjectsPage = () => {
  /*   const [session, loading] = useSession(); */
  const [searchValue, setSearchValue] = useState('');
  const [selectSkill, setSelectSkill] = useState(['']);
  useEffect(() => {});
  return (
    <Layout>
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
        <ProjectCard></ProjectCard>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
