import { PageTitle } from 'components/PageTitle';
import { Layout } from 'components/Layout';
import CommunityCard from 'components/Community/communitycard';
import { SearchBox } from 'components/SerachBox/SearchBox';
import { useState } from 'react';

const CommunityPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Layout>
      <div className="flex flex-col p-8">
        <PageTitle pageTitle="Community" />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder="Find a developer"
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
