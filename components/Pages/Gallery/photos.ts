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
      srcSet: '',
      title: 'Andrew & Agnes - Picture 1',
      width: 3,
      height: 1
    },
    {
      src: GalleryPic2Src,
      srcSet: '',
      title: 'Andrew & Agnes - Picture 2',
      width: 4,
      height: 3
    },
    {
      src: GalleryPic3Src,
      srcSet: '',
      title: 'Andrew & Agnes - Picture 3',
      width: 4,
      height: 3
    },
    {
      src: GalleryPic4Src,
      srcSet: '',
      title: 'Andrew & Agnes - Picture 4',
      width: 4,
      height: 3
    },
    {
      src: GalleryPic5Src,
      srcSet: '',
      title: 'Andrew & Agnes - Picture 5',
      width: 3,
      height: 1
    },
    {
      src: GalleryPic6Src,
      srcSet: '',
      title: 'Andrew & Agnes - Picture 6',
      width: 4,
      height: 3
    },
    {
      src: GalleryPic7Src,
      srcSet: '',
      title: 'Andrew & Agnes - Picture 7',
      width: 4,
      height: 3
    },
    {
      src: GalleryPic8Src,
      srcSet: '',
      title: 'Andrew & Agnes - Picture 8',
      width: 4,
      height: 3
    },
  ];
  