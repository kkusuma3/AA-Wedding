import Container from "../../Container";

interface Props {
    color: string;
}

const LogoSVGSrc = '/img/AA-Logo.svg';

const LogoHeading = ({ color }: Props) => {
    return (
        <Container>
            <div className="flex flex-col w-full md:w-1/2 mx-auto py-7 text-center">
                <img src={LogoSVGSrc} alt="Wedding Logo" className="w-1/6 mx-auto"/>    
                <h1 className="text-2xl md:text-3xl uppercase py-1">The wedding Of</h1>
                <h1 className="text-5xl md:text-8xl font-bold py-1">Andrew & Agnes</h1>
            </div>
        </Container>
    )
};

export default LogoHeading;