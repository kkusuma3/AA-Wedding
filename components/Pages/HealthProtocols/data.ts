import { IconMaskSrc, IconTempSrc, IconShakeSrc, IconSanitizeSrc, IconDistanceSrc, IconPLSrc } from "../../../shared/ImgSrc";
import { HealthIconProps } from "../../HealthProtocolIcon/types";

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