/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
/**  <div class="p-4"> // este es el container
            <img
            class="mx-auto" 
            width="320"
            src="https:randomfox.ca/images/37.jpg" 
            alt="fox">
*/

import { registerImage } from "./lazy";
const minimum = 1;
const maximum = 123;
const random = ()=>Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode =() =>{
    const container = document.createElement("div");
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = "mx-auto rounded-md bg-gray-300";
    imagen.width ="320";
    imagen.dataset.src =`https:randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);
    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');

const addButton = document.querySelector('button[type="submit"]');


///
const addImage = () => {

    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}
addButton.addEventListener("click", addImage);
///limpiar



// Limpiar
const imageContainer = document.querySelector("#images");
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});
