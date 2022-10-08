import { PageTitle } from 'components/PageTitle';
import { Layout } from 'components/Layout';
import { CommunityCard } from 'components/CommunityCard';

const CommunityPage = () => {
  return (
    <Layout>
      <div>
        <CommunityCard name="Wojtek" imageSrc="" position="Cofie developer" />
        <CommunityCard name="Dima" imageSrc="" position="Frontend developer" />
        <CommunityCard name="Marcin" imageSrc="" position="Security" />
      </div>
    </Layout>
  );
};

export default CommunityPage;
