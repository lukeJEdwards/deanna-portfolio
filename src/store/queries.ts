export const routes_query = `*[_type == "navigation_category"] | order(position asc){
  ...,
  projects[]->
}`;


export const all_project_query = `*[_type == "project"]`;

export const get_project_query = (project_id:string) => `*[_type == "project" && _id == ${project_id}]`;