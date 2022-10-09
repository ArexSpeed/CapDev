import { Layout } from 'components/Layout';
import ProjectOneSiteItem from 'components/Projects/projectonesite';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Props {}

export default function ProjectOneSite() {
  const router = useRouter();
  console.log({ router });
  const [project, setProject] = useState();

  // useEffect(() => {
  //   const getProject = async () => {
  //     const get = axios.get(`/api/projects?id=${router.query.id}`);
  //     // setProject(getProject.data);
  //     console.log('get', JSON.stringify(get));
  //   };
  //   getProject();
  // }, []);
  return (
    <Layout>
      <ProjectOneSiteItem />
    </Layout>
  );
}
