
import modalHtml from './render-modal.html?raw';
import './render-modal.css';

let modal, form;

//Cargar usuarios por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
};

// Limpiar formulario
export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
};

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>}  callback
 * 
 */

export const renderModal = (element, callback) => {

    // Valida si no existe el Modal
    if (modal) return;

    //Se crea el Modal flotante
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (e) => {

        //Validación para poder cerrar el Modal , validando por la clase
        //Para que este se cierre.
        if (e.target.className === 'modal-container') {
            hideModal();
        }
    });


    /**
     * Se obtiene la data del Form y se modificaron
     * para poder enviar bien la data al Back End
     */

    form.addEventListener('submit', async(e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const userLike = {};

        ///
        for (const [key, value] of formData) {

            if (key === 'balance') {
                // Agregando el Balance a la data
                userLike[key] = + value;
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = value === 'on' ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        await callback(userLike);
        hideModal();
    });

    element.append(modal);
};