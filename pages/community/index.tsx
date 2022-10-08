import { PageTitle } from 'components/PageTitle';
import { Layout } from 'components/Layout';

import { SearchBox } from 'components/SerachBox/SearchBox';
import { useState } from 'react';
import { CommunityCard } from 'components/CommunityCard';
import { CommunityButtons } from 'components/Buttons/CommunityButtons';

const CommunityPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeButton, setActiveButton] = useState('All Developers');

  return (
    <Layout>
      <div className="flex flex-col p-8">
        <PageTitle pageTitle="Community" />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder="Find a developer"
        />
        <CommunityButtons
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          value1="All Developers"
          value2="Friends"
          value3="Followers"
          value4="Projects"
        />
        <div className="grid w-full grid-cols-4 gap-4 pt-4 ">
          <CommunityCard
            openToWork={true}
            name="Arek"
            imageSrc=""
            position="Full stack developer"
          />
          <CommunityCard name="Seba" imageSrc="" position="DevOoops developer" />
          <CommunityCard openToWork={true} name="Wojtek" imageSrc="" position="Cofie developer" />
          <CommunityCard name="Dima" imageSrc="" position="Frontend developer" />
          <CommunityCard openToWork={true} name="Marcin" imageSrc="" position="Security" />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;
