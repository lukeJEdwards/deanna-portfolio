import { defineStore } from "pinia";
import { useSanityQuery } from "@/composables/useSanityQuery";

import type { Navigation_category, Project } from "@/types/sanity.types";
import { computed, reactive, ref, type Reactive, type Ref } from "vue";


interface queryResult {
  projects:Project[],
  routes:Navigation_category[]
}

const routes_query = `*[_type == "navigation_category"]`;
const project_query = 


export const useStore = defineStore("store", () => {

  const routes:Ref<Navigation_category[]> = ref([])
  const projects: Reactive<{[index:string]:Project}> = reactive({})

  const home = computed(() => routes.value.filter(r => r.name == "Home")[0])


  async function load(){
    const routes = await useSanityQuery<queryResult>(routes_query)
    routes.value = results_routes
  }


  return { load, get_assets, routes, projects, home };

});