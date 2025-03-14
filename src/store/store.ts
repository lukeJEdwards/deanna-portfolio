import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

import { useSanityQuery } from "@/composables/useSanityQuery";
import type { Project } from "@/types/sanity.types";
import type { NavQueryResult } from "@/types/custom.types";



const routes_query = `*[_type == "navigation_category"] | order(position asc){
  ...,
  projects[]->
}`;



export const useStore = defineStore("store", () => {

  const routes: Ref<NavQueryResult[]> = ref([]);
  const projects: Ref<Project[]> = ref([]);

  const home = computed(() => routes.value[0])
  
  async function get_nav_routes(){
    const results = await useSanityQuery<NavQueryResult[]>(routes_query);

    results.forEach(Route => {
      if(!Route.single_page){
        Route.projects?.forEach(project => projects.value.push(project));
      }
    })

    routes.value = results;
  }

  function get_category(path:string){
    const cat = `/${path.split("/").at(-1)}`;
    return routes.value.filter((route) => route.path.current == cat)[0];
  }

  function get_project(path:string){
    const pro = path.split("/").at(-1);
    console.log(pro)
    return projects.value.filter((project) => project.slug.current == pro)[0];
  }

  return {
    get_nav_routes,
    get_category,
    get_project,
    routes,
    home,
    projects,
  };

});