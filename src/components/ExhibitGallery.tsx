import {useState} from 'react';
import {exhibitGalleries} from '../data/galleries';
import {ImageCredit} from './ImageCredit';
export function ExhibitGallery({id,title}:{id:string;title:string}){
 const images=exhibitGalleries[id];
 const [selected,setSelected]=useState(0);
 const image=images[selected];
 const move=(step:number)=>setSelected(current=>(current+step+images.length)%images.length);
 return <section className="exhibit-gallery" aria-label={`${title} image gallery`}>
 <div className="gallery-heading"><span className="eyebrow">Visual archive</span><span className="fine">{images.length} images · Product & context</span></div>
 <figure className="story-image">
 <a className="gallery-main" href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${image.title}`}><img src={image.src} alt={image.alt}/><span className="gallery-enlarge">View full size ↗</span></a>
 <figcaption aria-live="polite" aria-atomic="true"><span className="evidence-label">{image.kind}</span><h3>{image.title}</h3><ImageCredit image={image}/></figcaption>
 </figure>
 <div className="gallery-controls"><button onClick={()=>move(-1)} aria-label="Previous image">← Previous</button><span aria-live="polite">{selected+1} / {images.length}</span><button onClick={()=>move(1)} aria-label="Next image">Next →</button></div>
 <div className="gallery-thumbnails" role="group" aria-label="Choose an archive image">{images.map((item,index)=><button key={item.src} aria-pressed={selected===index} aria-label={`Show image ${index+1}: ${item.title}`} onClick={()=>setSelected(index)}><img src={item.src} alt="" loading="lazy"/><span><small>0{index+1}</small>{item.title}</span></button>)}</div>
 <p className="gallery-note">Historical source images. Original text and branding preserved.</p>
 </section>;
}
