import { MatrimonyImgSrc, ReceptionImgSrc } from "../../../shared/ImgSrc";
import { Location } from "../../LocationCard/types";


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
        buttonProp: {
            label: 'Livestream',
            href: 'https://www.youtube.com/watch?v=--8ah5QPNXQ',
            target: '_blank'
        }
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
        buttonProp: {
            label: 'RSVP',
            href: '',
            target: '_self'
        }
    },
]