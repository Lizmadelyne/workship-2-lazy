
const isIntersecting = (entry)=>{
    return entry.isIntersecting; //true si es dentro de la pantalla o false
   
};
const loadImage = (entry)=>{
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargue la imagen
    imagen.src = url;
    
   // console.log container.nodeName);
//este console me muestra si es un div o img lo que esta cargando
   // debugger;
   //el debugger me deja ver todo en el inspector
   // console.log('HOLIS'); con esto supe cuantas imagenes  cargaba
  
    //desregistrar  la imagen o unlisten esdecir no escucharla denuevo
    observer.unobserve(container);
};
const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
});

//
export const registerImage = (imagen)=>{
    observer.observe(imagen)

};