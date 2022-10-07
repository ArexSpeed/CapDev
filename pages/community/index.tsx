import CommunityCard from 'components/Community/communitycard';
import { Layout } from 'components/Layout';

const CommunityPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 w-full p-4 ">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </Layout>
  );
};

export default CommunityPage;
