import Container from "../../Container";
import styles from './styles.module.css';

const HashtagPage = () => (
    <Container isFullWidth={false}>
        <div className={styles.background}>
            <div className="flex flex-col w-full h-full md:w-2/3 m-auto text-center text-white place-content-center">
                <span className="text-2xl md:text-4xl p-2">Don't forget to use hashtag #finAAly</span>
                <span className="text-lg md:text-xl p-2">Join our celebration by capturing moments from the day!</span>
                <span className="text-lg md:text-xl p-2">Make sure you tag us both @ndrewpratama & @kentjanaagnes in Instagram</span>

            </div>
        </div>
    </Container>
);

export default HashtagPage;