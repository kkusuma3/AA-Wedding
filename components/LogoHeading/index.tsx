import React from 'react';

interface Props {
    color: string;
}

const LogoHeading = ({ color }: Props) => {
    return (
        <div className="flex flex-col w-1/2 sm:w-full mx-auto py-7 text-center">
            {/* <img src="" alt="Wedding Logo"/>     */}
            <a>Logo</a>
            <h1 className="text-2xl uppercase py-1">The wedding Of</h1>
            <h1 className="text-7xl font-bold py-1">Andrew & Agnes</h1>
        </div>
    )
};

export default LogoHeading;