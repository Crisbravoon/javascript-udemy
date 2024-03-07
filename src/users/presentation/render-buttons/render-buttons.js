
import { renderTable } from '../render-table/render-table';
import usersStore from '../../store/users-store';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} elements 
 */

export const renderButtons = (elements) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const PrevButton = document.createElement('button');
    PrevButton.innerText = '< Prev ';

    //Para obtener la pagina actual
    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    elements.append(PrevButton, currentPageLabel, nextButton);

    //Funcionalidad de botón 
    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        //Actualiza el valor
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(elements);
    });

    PrevButton.addEventListener('click', async ()=>{
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage()
        renderTable(elements);
    });
    
};