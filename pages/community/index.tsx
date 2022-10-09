import { PageTitle } from 'components/PageTitle';
import { Layout } from 'components/Layout';
import { SearchBox } from 'components/SerachBox/SearchBox';
import { useEffect, useState } from 'react';
import { CommunityCard } from 'components/CommunityCard';
import { CommunityButtons } from 'components/Buttons/CommunityButtons';
import SkillsTags from 'components/SkillsTags/SkillsTags';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const formInput =
  'h-10 w-[300px] p-2 bg-transparent bg-primary border border-secondary rounded-md outline-none';

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
  skills?: [string];
  socials: [];
};

const CommunityPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectSkill, setSelectSkill] = useState('');
  const [activeButton, setActiveButton] = useState('');
  const [users, setUsers] = useState<Users[]>([]);
  const [checked, setChecked] = useState(false);
  const { data: session } = useSession();
  const [currentUser, setCurrentUserData] = useState<Users>();

  useEffect(() => {
    const func = async () => {
      const getUsers = await axios.get('/api/users');
      setUsers(getUsers.data);
    };
    func();
  }, []);
  useEffect(() => {
    const currentUser = users.find((user) => user.name === session?.user.name);
    if (currentUser) setCurrentUserData(currentUser);
  }, [users]);

  const checkFriend = (name: string) => {
    return currentUser?.friends?.find((user) => user === name);
  };
  const checkFollowers = (name: string) => {
    return currentUser?.followers?.find((user) => user === name);
  };

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
              <input
                id="open-to-work"
                type="checkbox"
                className="w-4 h-4"
                onChange={() => setChecked(!checked)}
              />
            </label>
          </div>
        </div>

        <CommunityButtons activeButton={activeButton} setActiveButton={setActiveButton} />
        <div className="grid w-full grid-cols-4 gap-4 pt-4 ">
          {activeButton === '' &&
            users
              .filter((user) => {
                if (selectSkill !== '') return user.skills?.indexOf(selectSkill) !== -1;
                else return user;
              })
              .filter((user) => user.openToProject === checked)
              ?.map((user) => {
                return (
                  <CommunityCard
                    key={user._id}
                    name={user.name}
                    openToWork={user.openToProject}
                    position={user.position}
                    skills={user.skills}
                    langs={user.languages}
                    socials={user.socials}
                    imageUrl={user.imageUrl}
                  />
                );
              })}

          {activeButton === 'Friends' &&
            users
              .filter((user) => {
                if (selectSkill !== '') return user.skills?.indexOf(selectSkill) !== -1;
                else return user;
              })
              ?.map((user) => {
                const friendName = checkFriend(user.name);
                if (friendName) {
                  return (
                    <CommunityCard
                      key={user._id}
                      name={user.name}
                      openToWork={user.openToProject}
                      position={user.position}
                      skills={user.skills}
                      langs={user.languages}
                      socials={user.socials}
                      imageUrl={user.imageUrl}
                    />
                  );
                }
              })}
          {activeButton === 'Followers' &&
            users
              .filter((user) => {
                if (selectSkill !== '') return user.skills?.indexOf(selectSkill) !== -1;
                else return user;
              })
              ?.map((user) => {
                const friendName = checkFollowers(user.name);
                if (friendName) {
                  return (
                    <CommunityCard
                      key={user._id}
                      name={user.name}
                      openToWork={user.openToProject}
                      position={user.position}
                      skills={user.skills}
                      langs={user.languages}
                      socials={user.socials}
                      imageUrl={user.imageUrl}
                    />
                  );
                }
              })}
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;
