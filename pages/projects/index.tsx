import { Layout } from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { TitleBox } from '../../components/TitleBox/TitleBox';
import { SearchBox } from 'components/SerachBox/SearchBox';
import SkillsTags from '../../components/SkillsTags/SkillsTags';
import ProjectCard from 'components/Projects/projectcard';
import SubButton from 'components/Buttons/SubButton';
import Buttons from 'components/Buttons/Buttons';
import axios from 'axios';
/* import { useSession } from 'next-auth/client'; */
type User = {
  id: string;
  name: string;
  imageUrl: string;
};
type Projects = {
  _id: string;
  author: User;
  employees: User[];
  title: string;
  category: string;
  logo: string;
  link: string;
  description: string;
  date: string;
  skills: string[];
  likes: string[];
};

const ProjectsPage = () => {
  /*   const [session, loading] = useSession(); */
  const [searchValue, setSearchValue] = useState('');
  const [selectSkill, setSelectSkill] = useState('');
  const [activeButton, setActiveButton] = useState('');
  const [activeSubButton, setActiveSubButton] = useState('All projects');
  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    const func = async () => {
      const getProjects = await axios.get('/api/projects');
      setProjects(getProjects.data);
      console.log(projects);
    };
    func();
  }, []);

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
        <SubButton
          activeSubButton={activeSubButton}
          setActiveSubButton={setActiveSubButton}
          value1="Latest"
          value2="Best"
        />
        <section>
          <div className="grid w-full grid-cols-4 gap-4 pt-4">
            {projects
              .filter((project) => {
                if (selectSkill !== '') return project.skills?.indexOf(selectSkill) !== -1;
                else return project;
              })
              .filter((project) => project.category.includes(activeButton))
              .filter((project) => project.title?.toLowerCase().includes(searchValue.toLowerCase()))
              ?.map((project, index) => (
                <ProjectCard
                  author={project.author}
                  category={project.category}
                  date={project.date}
                  desc={project.description}
                  title={project.title}
                  id={project._id}
                  key={index}
                  likes={project.likes}
                  skills={project.skills}
                  logo={project.logo}
                  link={project.link}
                />
              ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
