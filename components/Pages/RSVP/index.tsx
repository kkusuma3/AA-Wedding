import { useMediaQuery } from 'react-responsive';
import { User } from "../../../shared/types/User";
import Apology from "../../Apology";
import Container from "../../Container";
import RSVPForm from "../../RSVPForm";
import { HashtagPageContent } from "../Hashtag";
import styles from './styles.module.css';

const RSVPPage = ({ isOnline }: User) => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    return (
        <Container isFullWidth={false}>
            <div id="rsvp" className={styles.background}>
                <div className="mx-auto w-10/12">
                    {isOnline ? <Apology /> : <RSVPForm />}
                    {isTabletOrMobile && <HashtagPageContent />}
                </div>
            </div>
        </Container>
    );
};

export default RSVPPage;