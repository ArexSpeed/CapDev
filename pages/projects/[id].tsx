import { Layout } from 'components/Layout';
import ProjectOneSiteItem from 'components/Projects/projectonesite';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { getAllProjects, getOneProject } from 'services/projects/getProjects';
import { NextPage } from 'next';
import { DeleteIcon, EditIcon, HeartIcon } from 'components/Icons/FontIcons';
import Skill from 'components/Skills/Skill';

interface Props {
  projectProp: any;
}

export async function getStaticPaths() {
  const projects = await getAllProjects();
  const paths = projects.map((project) => ({
    params: { id: project._id.toString() }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  const project = await getOneProject(params.id);
  return { revalidate: 30, props: { projectProp: JSON.stringify(project) } };
}

const ProjectOneSite: NextPage<Props> = ({ projectProp }) => {
  const project = JSON.parse(projectProp);

  return (
    <Layout>
      <div className="w-full p-8">
        <div className="flex flex-row justify-between w-full">
          <div className="flex min-h-[256px] min-w-[256px] bg-blue rounded-lg"></div>
          <div className="flex flex-col self-center ml-8 mr-auto">
            <h1 className="font-bold border-b-8 border-b-solid border-b-green text-32 w-[40%]">
              {project?.title}
            </h1>
            <span className="mt-8">{project?.description}</span>
          </div>
          <div className="flex flex-row gap-12 p-8 text-center items-center h-12 w-[30rem]">
            <div className="relative items-center w-10 h-8">
              <button className="absolute w-6 h-6 text-blue">
                <HeartIcon />
                <div className="w-4 h-4 bg-[#95E616] rounded-full text-xs text-gray-900 absolute bottom-[-5px] right-[-5px]">
                  24
                </div>
              </button>
            </div>
            <div className="flex">
              <span className="">{project?.author.name}</span>
            </div>
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-blue">
                <img src="" alt="" />
              </div>
            </div>
            <div className="">
              <EditIcon />
            </div>
            <div className="">
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className="my-2">
          <h2 className="my-2">Skills</h2>
          <div className="flex flex-wrap w-full">
            {project?.skills.map((skill: string, i: any) => (
              <Skill key={i} name={skill} />
            ))}
          </div>
        </div>
        {project?.category === 'Company' && (
          <div className="my-2">
            <h2 className="my-2">Project Group</h2>
            <div className="flex flex-col">
              <div className="flex h-12 my-1">
                <div className="flex flex-row items-center gap-4 bg-white rounded-lg">
                  <div className="p-2">Marcin Domagała</div>
                  <div className="p-2">Frontend Developer</div>
                  <div className="p-2">Junior</div>
                </div>
              </div>
              <div className="flex h-12 my-1">
                <div className="flex flex-row items-center gap-4 bg-white rounded-lg">
                  <div className="p-2">Arek Cichocki</div>
                  <div className="p-2">Fullstack Developer</div>
                  <div className="p-2">Senior</div>
                </div>
              </div>
              <div className="flex h-12 my-1">
                <div className="flex flex-row items-center gap-4 bg-white rounded-lg">
                  <div className="p-2">Dima Zaichenko</div>
                  <div className="p-2">Fullstack Developer</div>
                  <div className="p-2">Middle</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectOneSite;
