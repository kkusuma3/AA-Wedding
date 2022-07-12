import { GalleryPic1Src, GalleryPic2Src, GalleryPic3Src, GalleryPic4Src, GalleryPic5Src, GalleryPic6Src, GalleryPic7Src, GalleryPic8Src } from "../../../shared/ImgSrc";

interface PhotoType {
    srcSet: any;
    title: any;
    src: string;
    width: number;
    height: number;
}

export const photos: Array<PhotoType> = [
    {
      src: GalleryPic1Src,
      width: 5,
      height: 3
    },
    {
      src: GalleryPic2Src,
      width: 5,
      height: 5
    },
    {
      src: GalleryPic3Src,
      width: 3,
      height: 4
    },
    {
      src: GalleryPic4Src,
      width: 4,
      height: 3
    },
    {
      src: GalleryPic5Src,
      width: 5,
      height: 2
    },
    {
      src: GalleryPic6Src,
      width: 4,
      height: 3
    },
    {
      src: GalleryPic7Src,
      width: 4,
      height: 3
    },
    {
      src: GalleryPic8Src,
      width: 4,
      height: 3
    },
  ];
  