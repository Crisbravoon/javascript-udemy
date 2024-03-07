
/**
 * Creación y actualización de usuarios nuevos
 * basado en el ID
 */

import { userModelToLocalHost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";


/**
 * 
 * @param {Like<User>} uselIke 
 */

export const saveUser = async (useLike) => {

    const user = new User(useLike);

    if (!user.firstName || !user.lastName) {
        throw 'First & Laste name are required'
        
    }

    const userToSave = userModelToLocalHost(user);

    if (user.id) {
        throw 'No implementado la actualización'
    };

    const updateUser = await createUser(userToSave);
    return updateUser;
};

/**
 * 
 * @param {Like<User>} user 
 */

const createUser = async (user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newData = await res.json();
    console.log({ newData });
    return newData;
};