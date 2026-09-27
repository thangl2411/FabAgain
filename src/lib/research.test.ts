import {test} from 'node:test';
import assert from 'node:assert/strict';
import {exhibits,sources} from '../data/exhibits.ts';
import {caseResearch,researchSources} from '../data/research.ts';
test('each case has a complete and resolvable research trail',()=>{
 const library={...sources,...researchSources};
 for(const e of exhibits){const r=caseResearch[e.id];assert(r,e.id);assert.equal(r.sections.length,4);assert(r.sourceIds.length>=4);assert(r.timeline.length>=3);assert(r.unknowns.length>=3);for(const id of r.sourceIds){assert(library[id],id);assert(['http:','https:'].includes(new URL(library[id].url).protocol));}for(const p of [...r.sections.flatMap(s=>s.paragraphs),...r.evidence]){assert(p.text.length>40);for(const id of p.sources)assert(r.sourceIds.includes(id),`${e.id}: ${id}`);}for(const t of r.timeline)assert(r.sourceIds.includes(t.source));}
});
