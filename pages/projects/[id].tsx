import { Layout } from 'components/Layout';
import ProjectOneSiteItem from 'components/Projects/projectonesite';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { getAllProjects, getOneProject } from 'services/projects/getProjects';

interface Props {}

export async function getStaticPaths() {
  const projects = await getAllProjects();
  //console.log('projects sp', projects);
  const paths = projects.map((project) => ({
    params: { id: project._id.toString() }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  console.log({ params });
  const proj = await getOneProject(params.id);
  console.log({ proj });
  //console.log(post, 'getpost');
  return { revalidate: 30, props: { project: JSON.stringify(proj) } };
}

export default function ProjectOneSite({ project }: any) {
  const router = useRouter();
  console.log({ router });
  console.log({ project });
  //const [project, setProject] = useState();

  // useEffect(() => {
  //   const getProject = async () => {
  //     const get = axios.get(`/api/projects?id=${router.query.id}`);
  //     // setProject(getProject.data);
  //     console.log('get', JSON.parse(get));
  //   };
  //   getProject();
  // }, []);
  return (
    <Layout>
      <ProjectOneSiteItem />
    </Layout>
  );
}
