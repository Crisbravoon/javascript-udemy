
import usersStore from '../../store/users-store';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

//Para que sea de forma permanente la Tabla
let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
     <tr>
        <th>ID | </th>
        <th>Balance |</th>
        <th>Nombre | </th>
        <th>Apellido | </th>
        <th>¿Activo? | </th>
        <th>Acciones </th>
     </tr>
    `;

    //Insertamos los registros en el body
    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
};

const tableSelectListener = (e)=>{
    const element = e.target.closest('.select-user');
    if(!element) return;

    const id = element.getAttribute('data-id');
    showModal(id);
};

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderTable = (element) => {

    //Existencias de Usuarios
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);

        //TODO: Listener a la tabla
        table.addEventListener('click',tableSelectListener)
    };

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.balance}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.isActive}</td>
            <td>
             <a href="#/" class="select-user" data-id= "${user.id}">Select</a>
             |
             <a href="#/" class="delete-user" data-id= "${user.id}">Delete</a>
            </td>
        </tr>
        `
    });

    // Puede buscar dentro de un elemento
    table.querySelector('tbody').innerHTML = tableHTML;

};