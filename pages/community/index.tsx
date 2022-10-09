import { PageTitle } from 'components/PageTitle';
import { Layout } from 'components/Layout';

import { SearchBox } from 'components/SerachBox/SearchBox';
import { useEffect, useState } from 'react';
import { CommunityCard } from 'components/CommunityCard';
import { CommunityButtons } from 'components/Buttons/CommunityButtons';
import SkillsTags from 'components/SkillsTags/SkillsTags';
import axios from 'axios';

const formInput =
  'h-10 w-[300px] p-2 bg-transparent bg-primary border border-secondary rounded-md outline-none';

const CommunityPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectSkill, setSelectSkill] = useState(['']);
  const [activeButton, setActiveButton] = useState('All Developers');
  const [users, setUsers] = useState<Users[]>([]);

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

  useEffect(() => {
    const func = async () => {
      const getUsers = await axios.get('/api/users');
      setUsers(getUsers.data);
    };
    func();
  }, []);

  console.log({ users });

  return (
    <Layout>
      <div className="flex flex-col w-full p-8">
        <PageTitle pageTitle="Community" />
        <div className="flex">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder="Find a developer"
          />
          <select className={formInput}>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </div>

        <div className="flex flex-col mt-5">
          <span> Find developer by skill </span>
          <div className="flex items-center">
            <SkillsTags selectSkill={selectSkill} setSelectSkill={setSelectSkill} />
            <label
              className="flex cursor-pointer items-center justify-around w-[200px]"
              htmlFor="open-to-work">
              Open to work
              <input id="open-to-work" type="checkbox" className="w-4 h-4" />
            </label>
          </div>
        </div>

        <CommunityButtons
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          value1="All Developers"
          value2="Friends"
          value3="Followers"
          value4="Projects"
        />
        <div className="grid w-full grid-cols-4 gap-4 pt-4 ">
          {users.map((user) => (
            <CommunityCard
              key={user._id}
              userId={user._id}
              name={user.name}
              openToWork={user.openToProject}
              position={user.position}
              skills={user.skills}
              langs={user.languages}
              socials={user.socials}
              imageUrl={user.imageUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;
