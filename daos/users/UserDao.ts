import User from "../../models/users/User";
import UserModel from "../../mongoose/users/UserModel";
import UserDaoI from "../../interfaces/users/UserDaoI";

export default class UserDao implements UserDaoI {
    private static userDao: UserDao | null = null;
    public static getInstance = (): UserDao => {
        if(null == UserDao.userDao) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }
    private constructor() {}

    /**
     * Uses UserModel to retrieve all user documents from users collection
     * @returns Promise To be notified when the users are retrieved from
     * database
     */
    async findAllUsers(): Promise<User[]> {
        return await UserModel.find();
    }

    /**
     * Uses UserModel to retrieve a user document from users collection
     * @param {string} uid  Primary key of user to be fetched
     * @returns Promise To be notified when the user is retrieved from
     * database
     */
    async findUserById(uid: string): Promise<any> {
        return await UserModel.findById(uid);
    }

    /**
     * Inserts user instance into the database
     * @param {User} user User to be added
     * @returns Promise To be notified when user is inserted into the database
     */
    async createUser(user: User): Promise<User> {
        return await UserModel.create(user);
    }

    /**
     * Removes user from the database.
     * @param {string} uid  Primary key of user which has to be deleted
     * @returns Promise To be notified when user is removed from the database
     */
    async deleteUser(uid: string):  Promise<any> {
        return await UserModel.deleteOne({_id: uid});
    }

    /**
     * Updates a user in the database.
     * @param {string} uid  Primary key of user which has to be updated
     * @param {User} user  Content of user
     * @returns Promise To be notified when user is updated in the database
     */
    async updateUser(uid: string, user: User): Promise<any> {
        return await UserModel.updateOne({_id: uid}, {$set: user});
    }
}
