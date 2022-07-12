interface Image {
    src: string;
    alt: string;
}

interface LocationButton {
    label: string;
    href: string;
    target: string;
}

export interface Location {
    image: Image;
    title: string;
    date: string;
    time: string;
    location: string;
    address: string;
    city: string;
    buttonProp: LocationButton;
}

export interface LocationCardProps {
    locationProp: Location;
}