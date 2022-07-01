const DiamondSVGSrc = '/img/Diamond.svg';

const DiamondLogo = () => (
    <div className="flex flex-row justify-between items-center">
        <hr className="border border-slate-700 w-1/3"/>
        <img src={DiamondSVGSrc} alt="Diamond Logo" />
        <hr className="border border-slate-700 w-1/3"/>
    </div>
);

export default DiamondLogo;