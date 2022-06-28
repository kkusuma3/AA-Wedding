import Link from 'next/link';
import Carousel from '../components/HomeCarousel';
import Layout from '../components/Layout';
import LogoHeading from '../components/LogoHeading';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <LogoHeading color=""/>
    <Carousel />
  </Layout>
)

export default IndexPage
