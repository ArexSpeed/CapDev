import { PageTitle } from 'components/PageTitle';
import { Layout } from 'components/Layout';
import CommunityCard from 'components/Community/CommunityCard';

const CommunityPage = () => {
  return (
    <Layout>
      <div>
        <PageTitle pageTitle="Community" />
        <div className="grid w-full grid-cols-4 gap-4 p-4 ">
          <CommunityCard name="Arek" imageSrc="" position="Full stack developer" />
          <CommunityCard name="Seba" imageSrc="" position="DevOoops developer" />
          <CommunityCard name="Wojtek" imageSrc="" position="Cofie developer" />
          <CommunityCard name="Dima" imageSrc="" position="Frontend developer" />
          <CommunityCard name="Marcin" imageSrc="" position="Security" />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;
