import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseNotebook} from './notebook.ts';
test('notebook restores valid entries and ignores unknown IDs',()=>{assert.deepEqual(parseNotebook(null),{});assert.deepEqual(parseNotebook(JSON.stringify({vsmart:{saved:true,note:'Tiếng Việt'},unknown:{saved:true,note:'x'}})),{vsmart:{saved:true,note:'Tiếng Việt'}});});
test('corrupt notes are rejected instead of silently misrepresented',()=>{for(const raw of ['invalid','[]','null','{"moca":{"saved":"yes","note":4}}'])assert.throws(()=>parseNotebook(raw));});
test('restored note lengths are bounded',()=>{assert.equal(parseNotebook(JSON.stringify({wefit:{saved:false,note:'x'.repeat(12000)}})).wefit.note.length,10000);});
test('new collection entries survive notebook restoration',()=>{const notes={baemin:{saved:true,note:'Restaurant obligations'},airmekong:{saved:true,note:'Restart evidence'}};assert.deepEqual(parseNotebook(JSON.stringify(notes)),notes);});
