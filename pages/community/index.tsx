import { PageTitle } from 'components/PageTitle';
import { Layout } from 'components/Layout';
import CommunityCard from 'components/Community/CommunityCard';

const CommunityPage = () => {
  return (
    <Layout>
      <div>
        <PageTitle pageTitle="Community" />
        <div className="grid w-full grid-cols-4 gap-4 p-4 ">
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
