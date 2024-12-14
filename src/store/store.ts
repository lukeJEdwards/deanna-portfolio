import { defineStore } from "pinia";
import { useAsyncState } from "@vueuse/core";
import { useSanityQuery } from "@/composables/useSanityQuery";

import type { Navigation_category } from "@/types/sanity.types";


export const useStore = defineStore("store", () => {
  const query = `*[_type == "navigation_category"]`;

  const { state: routes } = useAsyncState(
    useSanityQuery<Navigation_category[]>(query),
    []
  );


  return { routes };
});