import type {ExhibitImage} from '../data/images';
export function ImageCredit({image}:{image:ExhibitImage}){return <p className="image-credit">{image.caption} <a href={image.sourceUrl} target="_blank" rel="noreferrer">Image source: {image.publisher} ↗</a>{image.language==='Vietnamese'&&<span> · Source in Vietnamese</span>}</p>;}
