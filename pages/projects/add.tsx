import ProjectForm from 'components/Forms/ProjectForm';
import { Layout } from 'components/Layout';
import React from 'react';

const AddprojectPage = () => {
  return (
    <Layout>
      <div className="flex justify-center w-full p-4">
        <ProjectForm />
      </div>
    </Layout>
  );
};

export default AddprojectPage;
