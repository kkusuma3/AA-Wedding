import { useMediaQuery } from "react-responsive";
import Container from "../../Container";
import styles from './styles.module.css';

export const HashtagPageContent = () => (
    <div className="flex flex-col w-full h-full md:w-2/3 m-auto text-center text-white place-content-center py-20">
        <span className="text-2xl md:text-4xl p-2">Don't forget to use hashtag #finAAlly</span>
        <span className="text-lg md:text-xl p-2">Join our celebration by capturing moments from the day!</span>
        <span className="text-lg md:text-xl p-2">Make sure you tag us both @ndrewpratama & @kentjanaagnes in Instagram</span>
    </div>
);

const HashtagPage = () => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    return (
        <Container isFullWidth={false}>
            <div className={styles.background}>
                {!isTabletOrMobile && <HashtagPageContent />}
            </div>
        </Container>
    )
};

export default HashtagPage;