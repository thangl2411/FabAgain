import type { Exhibit } from '../data/exhibits';
export const normalize=(value:string)=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[đĐ]/g,'d').toLowerCase().trim();
export function filterExhibits(items:Exhibit[],query='',category='',outcome=''){const q=normalize(query);return items.filter(e=>(!category||e.category===category)&&(!outcome||e.outcome===outcome)&&normalize(`${e.title} ${e.organization} ${e.summary}`).includes(q));}
export function randomExhibit(items:Exhibit[],random=Math.random){return items.length?items[Math.min(items.length-1,Math.floor(random()*items.length))]:undefined;}
