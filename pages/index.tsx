import Layout from "../components/Layout";
import Cover from "../components/Pages/Cover";

const CoverPage = () => (
    <Layout title="Cover | The Wedding of Andrew & Agnes" fullPage>
        <Cover isOnline={false} />
    </Layout>
);

export default CoverPage;