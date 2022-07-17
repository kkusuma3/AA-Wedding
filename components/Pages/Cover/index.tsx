import Link from "next/link";
import { LogoSVGSrc } from "../../../shared/ImgSrc";
import { User } from "../../../shared/types/User";
import styles from './styles.module.css';

const CoverPage = ({ isOnline }: User) => (
    <div className={styles.background}>
        <div className="flex flex-col w-full h-full md:h-3/4 md:w-3/4 md:pt-10 m-auto text-center justify-around md:justify-evenly space-y-40 md:space-y-5">
            <div className="md:space-y-4">
                <img src={LogoSVGSrc} alt="Wedding Logo" className="w-1/4 md:w-1/12 mx-auto"/>
                <div className="flex flex-col justify-evenly">    
                    <h1 className="text-xl md:text-2xl uppercase py-1">The wedding Of</h1>
                    <h1 className="text-3xl md:text-6xl font-bold py-1 relative z-10">Andrew & Agnes</h1>
                    <h1 className="text-lg md:text-xl py-1">Saturday, August 13th 2022</h1>
                </div>
            </div>
            <Link href={isOnline ? "/online/home" : "/home"}>
                <button className="rounded-3xl w-1/3 md:w-1/6 mx-auto p-2 md:p-3 text-purple-main bg-white">Open Invitation</button>
            </Link>
        </div>
    </div>
);

export default CoverPage;