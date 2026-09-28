/** Public assets must follow the same deployment base as the compiled app. */
export function assetUrl(path:string){return `${import.meta.env.BASE_URL}${path.replace(/^\//,'')}`;}
