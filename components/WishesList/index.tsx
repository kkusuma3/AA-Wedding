import { useState, useEffect } from 'react';
import { IconLeftSrc, IconLeftWhiteSrc,  IconRightSrc, IconRightWhiteSrc } from '../../shared/ImgSrc';
import { User } from '../../shared/types/User';
import { mockData } from "./data";
import { Wishes } from './types';


const WishesList = ({ isOnline }: User) => {
    const [ wishPageNumber, setWishPageNumber ] = useState<number>(1);
    const [ maxPageNumber, setMaxPageNumber ] = useState<number>(1);
    const [ currentWishesData, setCurrentWishesData ] = useState<Array<Wishes>>([]);
    const maxWishesPerPage = 4;

    const fetchWishesData = () => {
        const wishList = [];
        const currentWishNumber = (wishPageNumber - 1) * maxWishesPerPage;
        for (let i = 0; i < maxWishesPerPage; i++) {
            wishList.push(mockData[currentWishNumber + i]);
        }
        setCurrentWishesData(wishList);
    }

    const fetchPreviousPageData = () => {
        if (wishPageNumber !== 1) {
            setWishPageNumber(wishPageNumber - 1);
        }
    }

    const fetchNextPageData = () => {
        if (wishPageNumber !== maxPageNumber) {
            setWishPageNumber(wishPageNumber + 1);
        }
    }

    const calculateMaxPageNumber = () => {
        if (mockData.length > 0) {
            const lengthOverMaxWishes = Math.floor(mockData.length / maxWishesPerPage);
            if (mockData.length % 4) {
                setMaxPageNumber(lengthOverMaxWishes);
            } else {
                setMaxPageNumber(lengthOverMaxWishes + 1);
            }
        }
    }

    useEffect(() => {
        calculateMaxPageNumber();
    }, []);

    useEffect(() => {
        fetchWishesData();
    }, [ wishPageNumber ]);

    return (
        <div className="flex flex-col justify-evenly">
            <div className="h-10/12">
                {
                    currentWishesData.map(({ id, name, wish }) => (
                        <div id={id} className="flex flex-col justify-evenly space-y-2 p-4 md:p-8">
                            <span className="text-lg md:text-xl font-bold">{name}</span>
                            <p className="text-md md:text-lg">{wish}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-row w-1/4 mx-auto justify-evenly">
                <button onClick={fetchPreviousPageData}>
                    <img src={ isOnline ? IconLeftWhiteSrc : IconLeftSrc} alt="Left Arrow Icon" />
                </button>
                <span className="text-lg md:text-xl">{`${wishPageNumber} / ${maxPageNumber}`}</span>
                <button onClick={fetchNextPageData}>
                    <img src={isOnline ? IconRightWhiteSrc : IconRightSrc} alt="Right Arrow Icon" />
                </button>
            </div>
        </div>
    );
};

export default WishesList;