// import ProfileForm from "components/Forms/ProfileForm";
import ProfileForm from 'components/Forms/ProfileForm';
import { Layout } from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

type Users = {
  location?: string;
  about?: string;
  experience?: [];
  education?: [];
  openToProject?: boolean;
  friends?: [];
  followers?: [];
  projetcs?: [];
  _id: string;
  name: string;
  email: string;
  imageUrl?: string;
  position?: string;
  languages?: [];
  skills?: [];
  socials: [];
};

const ProfileEditPage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<Users>();
  console.log({ session });
  useEffect(() => {
    const getUser = async () => {
      if (session) {
        const user = await axios.get(`/api/users?name=${session.user.name}`);
        setUser(user.data);
      }
    };
    getUser();
  }, [session]);
  console.log({ user });
  return (
    <Layout>
      <div className="flex p-8 mx-auto my-5 bg-white rounded-lg">
        <ProfileForm
          userId={user?._id}
          name={user?.name}
          email={user?.email}
          imageUrl={user?.imageUrl}
          position={user?.position}
          //location={user?.location}
          languages={user?.languages}
          skills={user?.skills}
          about={user?.about}
          socials={user?.socials}
        />
      </div>
    </Layout>
  );
};

export default ProfileEditPage;
