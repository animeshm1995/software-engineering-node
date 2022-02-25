/**
 * @file Declares API for Users related data access object methods
 */
import User from "../../models/users/User";

export default interface UserDaoI {

    /**
     * Uses UserModel to retrieve all user documents from users collection
     * @returns Promise To be notified when the users are retrieved from
     * database
     */
    findAllUsers(): Promise<User[]>;

    /**
     * Uses UserModel to retrieve a user document from users collection
     * @param {string} uid  Primary key of user to be fetched
     * @returns Promise To be notified when the user is retrieved from
     * database
     */
    findUserById(uid: string): Promise<any>;

    /**
     * Inserts user instance into the database
     * @param {User} user User to be added
     * @returns Promise To be notified when user is inserted into the database
     */
    createUser(user: User): Promise<User>;

    /**
     * Updates a user in the database.
     * @param {string} uid  Primary key of user which has to be updated
     * @param {User} user  Content of user
     * @returns Promise To be notified when user is updated in the database
     */
    updateUser(uid: string, user: User): Promise<any>;

    /**
     * Removes user from the database.
     * @param {string} uid  Primary key of user which has to be deleted
     * @returns Promise To be notified when user is removed from the database
     */
    deleteUser(uid: string): Promise<any>;
}
