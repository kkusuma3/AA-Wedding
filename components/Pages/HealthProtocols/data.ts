import { HealthIconProps } from "../../HealthProtocolIcon/types";

const IconMaskSrc = '/icons/icon_mask.png';
const IconDistanceSrc = '/icons/icon_distance.png';
const IconPLSrc = '/icons/icon_PL.png';
const IconSanitizeSrc = '/icons/icon_sanitize.png';
const IconShakeSrc = '/icons/icon_shake.png';
const IconTempSrc = '/icons/icon_temp.png';

export const HealthProtocolsData: Array<HealthIconProps> = [
    {
        icon: {
            src: IconMaskSrc,
            alt: "Icon of mask"
        },
        label: "Wear mask"
    },
    {
        icon: {
            src: IconTempSrc,
            alt: "Icon of temperature reader"
        },
        label: "Body temperature below 37.3°C"
    },
    {
        icon: {
            src: IconShakeSrc,
            alt: "Icon of no handshake"
        },
        label: "Avoid handshake, use namaste or fist bump"
    },
    {
        icon: {
            src: IconSanitizeSrc,
            alt: "Icon of hand sanitizer"
        },
        label: "Keep your hands clean"
    },
    {
        icon: {
            src: IconDistanceSrc,
            alt: "Icon of social distancing"
        },
        label: "Physical distancing"
    },
    {
        icon: {
            src: IconPLSrc,
            alt: "Icon of Peduli Lindungi App"
        },
        label: "Prepare your PeduliLindungi app"
    }
];