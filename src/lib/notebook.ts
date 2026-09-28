export interface NotebookEntry {saved:boolean;note:string}
export type Notebook=Record<string,NotebookEntry>;
export const notebookKey='fabagain.notebook.v1';
export function parseNotebook(raw:string|null):Notebook{
 if(!raw)return {};
 const value:unknown=JSON.parse(raw);
 if(!value||typeof value!=='object'||Array.isArray(value))throw Error('Invalid notebook');
 const result:Notebook={};
 for(const id of ['vsmart','moca','wefit','adayroi']){
  const entry=(value as Record<string,unknown>)[id];if(entry===undefined)continue;
  if(!entry||typeof entry!=='object'||typeof (entry as NotebookEntry).saved!=='boolean'||typeof (entry as NotebookEntry).note!=='string')throw Error('Invalid entry');
  result[id]={saved:(entry as NotebookEntry).saved,note:(entry as NotebookEntry).note.slice(0,10000)};
 }return result;
}
export function downloadNotebook(value:Notebook){const url=URL.createObjectURL(new Blob([JSON.stringify({version:1,entries:value},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='fabagain-notebook.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
