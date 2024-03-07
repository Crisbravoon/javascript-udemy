
import { showModal } from '../render-modal/render-modal';
import './render-add-button.css'
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderAddButton = (element) => {

    //Creando un botón flotante
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    //Abre el Modal
    element.append(fabButton);
    fabButton.addEventListener('click', () => {
        showModal();
    });


};