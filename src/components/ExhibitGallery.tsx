import {useLanguage} from '../lib/language';
import {useState} from 'react';
import {exhibitGalleries} from '../data/galleries';
import {ImageCredit} from './ImageCredit';
import {annotations} from '../data/decisions';
export function ExhibitGallery({id,title}:{id:string;title:string}){
 const {localize}=useLanguage();
 const images=exhibitGalleries[id];
 const [selected,setSelected]=useState(0);
 const [annotation,setAnnotation]=useState<number|null>(null);
 const [ratio,setRatio]=useState(1);
 const image=images[selected];
 const move=(step:number)=>setSelected(current=>(current+step+images.length)%images.length);
 return localize(<section className="exhibit-gallery" aria-label={`${title} image gallery`}>
 <div className="gallery-heading"><span className="eyebrow">Visual archive</span><span className="fine">{images.length} images · Product & context</span></div>
 <figure className="story-image">
 <div className="annotation-stage"><div className="annotation-image" style={{maxWidth:`${ratio*370}px`}}><a className="gallery-main" href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${image.title}`}><img src={image.src} alt={image.alt} onLoad={e=>setRatio(e.currentTarget.naturalWidth/e.currentTarget.naturalHeight)}/><span className="gallery-enlarge">View full size ↗</span></a>{selected===0&&annotations[id].map((a,i)=><button className="image-marker" key={i} style={{left:`${a.x}%`,top:`${a.y}%`}} aria-label={`Image note ${i+1}: ${a.title}`} aria-pressed={annotation===i} aria-controls={`image-note-${id}`} onClick={()=>setAnnotation(annotation===i?null:i)}>{i+1}</button>)}</div></div>
 {selected===0&&<div className="image-annotations"><p className="fine">Select a numbered marker to explore the image.</p><div id={`image-note-${id}`} aria-live="polite">{annotation!==null&&<><h4>{annotations[id][annotation].title}</h4><p>{annotations[id][annotation].text}</p><p className="fine">Curatorial image notes · Based on the displayed source image and the cited case research.</p></>}</div></div>}
 <figcaption aria-live="polite" aria-atomic="true"><span className="evidence-label">{image.kind}</span><h3>{image.title}</h3><ImageCredit image={image}/></figcaption>
 </figure>
 <div className="gallery-controls"><button onClick={()=>move(-1)} aria-label="Previous image">← Previous</button><span aria-live="polite">{selected+1} / {images.length}</span><button onClick={()=>move(1)} aria-label="Next image">Next →</button></div>
 <div className="gallery-thumbnails" role="group" aria-label="Choose an archive image">{images.map((item,index)=><button key={item.src} aria-pressed={selected===index} aria-label={`Show image ${index+1}: ${item.title}`} onClick={()=>setSelected(index)}><img src={item.src} alt="" loading="lazy"/><span><small>0{index+1}</small>{item.title}</span></button>)}</div>
 <p className="gallery-note">Historical source images. Original text and branding preserved.</p>
 </section>);
}
