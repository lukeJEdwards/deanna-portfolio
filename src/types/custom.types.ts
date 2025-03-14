import type {
  Navigation_category,
  Project,
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "./sanity.types";

export type SanityImageRef = {
  asset: {
    _type: "image";
    __key: string;
    _ref: string;
  };
};

export type asset =  {
    asset: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key?: string
  }

export type NavQueryResult = Omit<Navigation_category, 'projects'> & {
  projects?: Array<Project>;
}