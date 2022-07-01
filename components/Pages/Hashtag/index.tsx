import Container from "../../Container";
import styles from './styles.module.css';

const HashtagPage = () => (
    <Container isFullWidth={false}>
        <div className={styles.background}>
            <div className="flex flex-col w-full h-full md:w-2/3 m-auto text-center text-white place-content-center">
                <span className="text-2xl md:text-4xl p-2">#insertHashtagHere</span>
                <span className="text-lg md:text-xl p-2">share the day on Instagram and tag us both @ndrewpratama & @kentjanaagnes</span>
            </div>
        </div>
    </Container>
);

export default HashtagPage;