import { useState, useEffect } from 'react';
import { IconLeftSrc, IconLeftWhiteSrc,  IconRightSrc, IconRightWhiteSrc } from '../../shared/ImgSrc';
import { getWishes } from '../../shared/sheets';
import { User } from '../../shared/types/User';
import { Wishes } from './types';


const WishesList = ({ isOnline }: User) => {
    const [ wishPageNumber, setWishPageNumber ] = useState<number>(1);
    const [ maxPageNumber, setMaxPageNumber ] = useState<number>(1);
    const [ fullWishesData, setFullWishesData ] = useState<Array<Wishes>>([]);
    const [ currentWishesData, setCurrentWishesData ] = useState<Array<Wishes>>([]);
    const maxWishesPerPage = 4;

    const fetchWishesData = (data) => {
        const wishList = [];
        const currentWishNumber = (wishPageNumber - 1) * maxWishesPerPage;
        for (let i = 0; i < maxWishesPerPage; i++) {
            if (data[currentWishNumber + i] === undefined) {
                break;
            }
            wishList.push(data[currentWishNumber + i]);
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

    const calculateMaxPageNumber = (data) => {
        if (data.length > 0) {
            const lengthOverMaxWishes = Math.floor(data.length / maxWishesPerPage);
            if (data.length % 4 === 0) {
                setMaxPageNumber(lengthOverMaxWishes);
            } else {
                setMaxPageNumber(lengthOverMaxWishes + 1);
            }
        }
    }

    useEffect(() => {
        const fetchData = async() => {
            const data = await getWishes();
            const formattedData = data.map(row => ({
                id: row.Name,
                name: row.Name,
                wish: row.Wishes
            }));
            setFullWishesData(formattedData);
            fetchWishesData(formattedData);
            calculateMaxPageNumber(formattedData);
        }
        fetchData();
    }, []);

    useEffect(() => {
        fetchWishesData(fullWishesData);
    }, [ wishPageNumber ]);

    return (
        <div className="flex flex-col justify-evenly">
            <div className="flex flex-col justify-evenly h-11/12">
                {
                    currentWishesData.length > 0 && currentWishesData.map(({ id, name, wish }) => (
                        <div id={id} className="flex flex-col justify-evenly space-y-2 p-4 md:p-4">
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