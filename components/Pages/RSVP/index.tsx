import { User } from "../../../shared/types/User";
import Apology from "../../Apology";
import Container from "../../Container";
import RSVPForm from "../../RSVPForm";
import styles from './styles.module.css';

const RSVPPage = ({ isOnline }: User) => (
    <Container isFullWidth={false}>
        <div id="rsvp" className={styles.background}>
            <div className="mx-auto w-10/12">
                {isOnline ? <Apology /> : <RSVPForm />}
            </div>
        </div>
    </Container>
);

export default RSVPPage;