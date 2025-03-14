import { client } from "@/client";
import {type asset} from "@/types/custom.types"
import imageUrlBuilder from "@sanity/image-url";

export const useImageBuilder = (image: asset, width?: number) => {
  const builder = imageUrlBuilder(client);
  if(image)
    return width
      ? builder.image(image).width(width).url()
      : builder.image(image).url();
};
