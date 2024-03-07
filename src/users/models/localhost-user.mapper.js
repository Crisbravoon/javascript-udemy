
//Para saber como viene la data y adaptarlo para poder utilizarlo como quiero

import { User } from "./user"

/**
 * 
 * @param {Like<User>} localHostUser 
 * @returns {User}
 */

export const localhostUserToModel = ( localHostUser ) => {

    //Destructuramos el objeto y lo alojamos el objeto localHostUser
    const { 
        avatar,
        balance,
        first_name,
        grader,
        id,
        isActive,
        last_name
    } = localHostUser;

    //Creamos el nuevo usuario
    return new User({
        avatar,
        balance,
        firstName: first_name,
        grader,
        id,
        isActive,
        lastName: last_name
    });
};