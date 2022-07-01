import Link from 'next/link';
import Gallery from '../components/Pages/Gallery';
import Carousel from '../components/Pages/HomeCarousel';
import Layout from '../components/Layout';
import LogoHeading from '../components/Pages/Landing';
import BrideGroom from '../components/Pages/BrideGroom';
import Location from '../components/Pages/Location';
import RSVPPage from '../components/Pages/RSVP';
import HashtagPage from '../components/Pages/Hashtag';
import Wishes from '../components/Pages/Wishes';
import HealthProtocols from '../components/Pages/HealthProtocols';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <LogoHeading color=""/>
    <Carousel />
    <Gallery />
    <BrideGroom />
    <Location />
    <RSVPPage />
    <HashtagPage />
    <Wishes />
    <HealthProtocols />
  </Layout>
)

export default IndexPage
