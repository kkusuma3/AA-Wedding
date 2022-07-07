import Gallery from '../components/Pages/Gallery';
import Layout from '../components/Layout';
import LogoHeading from '../components/Pages/Landing';
import BrideGroom from '../components/Pages/BrideGroom';
import Location from '../components/Pages/Location';
import RSVPPage from '../components/Pages/RSVP';
import HashtagPage from '../components/Pages/Hashtag';
import Wishes from '../components/Pages/Wishes';
import HealthProtocols from '../components/Pages/HealthProtocols';
import WeddingGifts from '../components/Pages/WeddingGifts';
import { User } from '../shared/types/User';

const IndexPage = ({ isOnline }: User) => (
  <Layout title="The Wedding of Andrew & Agnes | Home">
    <LogoHeading color=""/>
    <Gallery />
    <BrideGroom />
    <Location isOnline={isOnline} />
    <RSVPPage isOnline={isOnline} />
    <HashtagPage />
    <Wishes isOnline={isOnline} />
    {!isOnline && <HealthProtocols /> }
    <WeddingGifts />
  </Layout>
);

export default IndexPage;
