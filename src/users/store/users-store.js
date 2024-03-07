
import { loadUserByPage } from "../usecases/load-users-by-page";



const state = {
    //Numero de pagina
    currentPage: 0,
    
    //Listado de usuarios
    users: [],
}

const loadNextPage = async () => {
    const users = await loadUserByPage(state.currentPage + 1);
    
    //Valida que se encuentre en la pagina 1
    if (users.length === 0) return;

    //Cargamos los usuarios
    state.users = users;

    //Actualiza en el nuevo estado con los usuarios correspondientes
    state.currentPage += 1;
};

const loadPreviousPage = async () => {

    const users = await loadUserByPage(state.currentPage - 1);

    //Valida a no ir a una pagina 0
    if (state.currentPage === 1) return;

    //Cargamos los usuarios a esa pagina
    state.users = users;

    //Actualiza en el nuevo estado con los usuarios correspondientes
    state.currentPage -= 1;

};


const onUserChanged = async () => {
    throw new Error('No implementado');

};

const reloadPage = async () => {
    throw new Error('No implementado');

};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}