import { client } from "@/client";
import imageUrlBuilder from "@sanity/image-url";

import type {internalGroqTypeReferenceTo } from "@/types/sanity.types";


type asset =  {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
  }

export const useImageBuilder = (image: asset | undefined, width?: number) => {
  const builder = imageUrlBuilder(client);
  if(image)
    return width
      ? builder.image(image).width(width).url()
      : builder.image(image).url();
};
