

//Aqui trabajaremos la data en vez de la data que nos pasaron
export class User {

    /**
     * 
     * @param {Like<User>} userDataLike 
     */

    constructor({ id, isActive, balance, avatar, firstName, lastName, grade }) {

        //Objeto con el cual se trabajara (El usuario)

        this.id = id,
        this.isActive = isActive;
        this.balance = balance;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grader = grade;
    };
};
