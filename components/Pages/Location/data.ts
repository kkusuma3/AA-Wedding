import { Location } from "../../LocationCard/types";

const MatrimonyImgSrc = '/img/MatrimonySketch.png';
const ReceptionImgSrc = '/img/ReceptionSketch.png';

export const LocationData: Array<Location> = [
    {
        image: {
            src: MatrimonyImgSrc,
            alt: 'Picture of Canisius College Capel'
        },
        title: 'Holy Matrimony',
        date: 'Saturday, August 13th 2022',
        time: '10:00 - 12:00 WIB',
        location: 'Kapel Kolese Kanisius',
        address: 'Jl. Menteng Raya No. 64',
        city: 'Jakarta Pusat',
        btnLabel: 'Livestream'
    },
    {
        image: {
            src: ReceptionImgSrc,
            alt: 'Picture of DoubleTree Hilton Hotel'
        },
        title: 'Reception',
        date: 'Saturday, August 13th 2022',
        time: '18:00 - 21:00 WIB',
        location: 'DoubleTree by Hilton - Makara Ballroom',
        address: 'Jl. Pegangsaan Timur No. 17',
        city: 'Jakarta Pusat',
        btnLabel: 'RSVP'
    },
]