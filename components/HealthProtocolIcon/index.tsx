import { HealthIconProps } from "./types";

const HealthIcon = ({ icon, label}: HealthIconProps) => (
    <div className="flex flex-col justify-start space-y-3 w-1/2 md:w-1/3 place-items-center content-center mt-10">
        <img src={icon.src} alt={icon.alt} className="w-24 h-24 md:w-32 md:h-32 bg-gray-400 rounded-full p-4"/>
        <span className="text-md md:text-lg">{label}</span>
    </div>
);

export default HealthIcon;