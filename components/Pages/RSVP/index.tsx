import Container from "../../Container";
import RSVPForm from "../../RSVPForm";
import styles from './styles.module.css';

const RSVPPage = () => (
    <Container isFullWidth={false}>
        <div className={styles.background}>
            <div className="mx-auto w-10/12">
                <RSVPForm />
            </div>
        </div>
    </Container>
);

export default RSVPPage;