interface LogoHeadingProps {
    imgSrc: string;
}

const LogoHeading = ({ imgSrc }: LogoHeadingProps) => (
    <div className="flex flex-row justify-between items-center">
        <hr className="border border-slate-700 w-1/3"/>
        <img src={imgSrc} alt="Diamond Logo" className="w-1/6 md:w-20"/>
        <hr className="border border-slate-700 w-1/3"/>
    </div>
);

export default LogoHeading;