import helpers from "../modules/helpers";
import { projectsDB as rawDB } from "../db/projects";


export function sortByDate(a, b) {
  return helpers.dateToNumber(b.date) - helpers.dateToNumber(a.date);
}

/* ------------------------------------- */

function uncompressProjectsDBtoJSON(db) {
  const result = {};
  db.forEach(entry => {
    const disabled = entry.disabled ? true : false;
    const children = entry.children || [];

    let links = [];
    if (entry.links?.length > 0) {
      links = entry.links.map(
        link => {
          const params = link.params?.length ? `?${link.params.join("&")}` : '';
          const url = link.url;

          return {
            "url": `${url}${params}`,
            "text": link.text,
            "self": link.self,
          }
        }
      );
    }

    const project = {
      "title": entry.title,
      "clients": entry.clients,
      "date": entry.date,
      "turingDate": helpers.turingDate(entry.date),
      "types": entry.types,
      "links": links,
      "disabled": disabled,
      "tools": entry.tools,
      "children": children,
      "group": false,
      "location": false,
      "image": "",
    };
   
    const id = helpers.getNewID(project.clients[0], project.date);

    try {
      project.image = `https://miguel-rivas.github.io/zapp/img/preview-wide/${id}.jpg`;
    }
    catch {
      project.image = require(`@/img/miguelrivas.jpg`);
    }
    result[id] = project;
  });

  return result;
}


/* ------------------------------------- */

export const projectsDBObj = uncompressProjectsDBtoJSON(rawDB);
export const projectsDBList = Object.values(projectsDBObj).sort(sortByDate);

export const allDBListVisible = Object.values(projectsDBObj).filter((item) => !item.disabled).sort(sortByDate);