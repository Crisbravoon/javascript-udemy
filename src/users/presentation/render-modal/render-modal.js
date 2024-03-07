
import './render-modal.css';
import modalHtml from './render-modal.html?raw';
import { getUserById } from '../../usecases/get-user-by-id';

let modal, form, loadedUser={};

/**
 * 
 * @param {String|Number} id 
 */

//Cargar usuarios por id
export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    loadedUser={};

    if (!id) return;

    const user = await getUserById(id);
    setFormValues(user);
};


const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;

    //
    loadedUser = user;
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

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const userLike = {...loadedUser};

        ///
        for (const [key, value] of formData) {

            if (key === 'balance') {
                // Agregando el Balance a la data
                userLike[key] = +value;
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = value === 'on' ? true : false;
                continue;
            }

            userLike[key] = value;
        }

    //Se tiene la info del formulario y no info adicional
        await callback(userLike);
       
        hideModal();
    });

    element.append(modal);
};