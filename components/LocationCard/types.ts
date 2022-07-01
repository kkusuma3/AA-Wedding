interface Image {
    src: string;
    alt: string;
}

export interface Location {
    image: Image;
    title: string;
    date: string;
    time: string;
    location: string;
    address: string;
    city: string;
    btnLabel: string;
}

export interface LocationCardProps {
    locationProp: Location;
}