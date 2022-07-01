import Container from "../../Container";
import HealthIcon from "../../HealthProtocolIcon";
import { HealthProtocolsData } from "./data";
import styles from './styles.module.css';


const WavePurpleSrc = '/img/Wave-purple.svg';

const HealthProtocols = () => (
    <>
        <div className={styles.background}>
            <Container>
                <div className="flex flex-col justify-evenly space-y-6 w-3/4 mx-auto text-center text-white">
                    <h4 className="text-2xl md:text-3xl font-bold">Health Protocols</h4>
                    <span className="text-lg md:text-xl">With all due respect, invited guests must comply with the following protocols</span>
                    <div className="flex flex-row flex-wrap justify-evenly">
                    {
                            HealthProtocolsData.map(({icon, label}) => <HealthIcon icon={icon} label={label} />)
                    }
                    </div>
                </div>
            </Container>
        </div>
        <img src={WavePurpleSrc} alt="Image of Purple Wave" className="w-full"/>
    </>
);

export default HealthProtocols;