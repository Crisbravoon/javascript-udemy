
import { User } from "../models/user";

/**
 * 
 * @param {User} user 
 */

// Funcion para la data sea enviada y guardad correctamente en el backend
export const userModelToLocalHost = (user) => {

    const {
        id,
        avatar,
        balance,
        firstName,
        grader,
        lastName,
        isActive,
    } = user;

    return {
        id,
        avatar,
        balance,
        first_name: firstName,
        grader,
        last_name: lastName,
        isActive,
    }
};