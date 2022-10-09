import Education from 'components/Education';
import { BritainIcon, GermanyIcon, PolandIcon } from 'components/Icons/FlagIcons';
import { EditIcon } from 'components/Icons/FontIcons';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'components/Icons/SocialIcons';
import { Layout } from 'components/Layout';
import ProjectCard from 'components/Projects/projectcard';
import Skill from 'components/Skills/Skill';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';

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

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
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

  useEffect(() => {
    if (user) router.push(`/profile/${user?._id}`);
  }, [user]);
  return (
    <Layout>
      <div className="flex flex-row w-full p-4 bg-white rounded-md">Loading your data...</div>
    </Layout>
  );
};

export default ProfilePage;
