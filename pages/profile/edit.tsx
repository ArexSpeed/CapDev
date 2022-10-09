// import ProfileForm from "components/Forms/ProfileForm";
import ProfileForm from "components/Forms/ProfileForm";
import { Layout } from "components/Layout";
import React from "react";

const ProfileEditPage = () => {
 return <Layout>
  <div className="flex bg-white p-8 mx-auto my-5 rounded-lg">
  <ProfileForm/>
  </div>
  </Layout>
 
};

export default ProfileEditPage;
