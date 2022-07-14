import { NavigationLink } from "./types";

export const NavigationLinks = (isOnline: boolean): Array<NavigationLink> => (
    isOnline ? [
        {
            id: '0',
            name: "Gallery",
            href: "gallery",
        },
        {
            id: '1',
            name: "Bride & Groom",
            href: "bride-groom",
        },
        {
            id: '2',
            name: "Matrimony & Reception",
            href: "matrimony",
        },
        {
            id: '3',
            name: "Apology",
            href: "rsvp",
        },
        {
            id: '5',
            name: "Gifts",
            href: "gifts",
        }
    ] : [
        {
            id: '0',
            name: "Gallery",
            href: "gallery",
        },
        {
            id: '1',
            name: "Bride & Groom",
            href: "bride-groom",
        },
        {
            id: '2',
            name: "Matrimony & Reception",
            href: "matrimony",
        },
        {
            id: '3',
            name: "RSVP",
            href: "rsvp",
        },
        {
            id: '4',
            name: "Health Protocols",
            href: "health-protocol",
        },
        {
            id: '5',
            name: "Gifts",
            href: "gifts",
        }
    ])