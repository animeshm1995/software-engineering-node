/**
 * @file Controller RESTful Web service API for users resource
 */
import {Request, Response, Express} from "express";
import UserDao from "../../daos/users/UserDao";
import UserControllerI from "../../interfaces/users/UserController";

/**
 * @class UserController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users to retrieve all the users
 *     </li>
 *     <li>GET /users/:userid to retrieve a specific user
 *     <li>POST /users to record that a user
 *     </li>
 *     <li>DELETE /users/:userid to record that a user
 *     is deleted</li>
 *     <li>PUT /users/:userid to record that a user
 *     is updated</li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing users CRUD operations
 * @property {UserController} userController Singleton controller implementing
 * RESTful Web service API
 */
export default class UserController implements UserControllerI {
    private static userController: UserController | null = null;
    private static userDao: UserDao = UserDao.getInstance();

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return UserController
     */
    public static getInstance = (app: Express): UserController => {
        if(UserController.userController === null) {
            UserController.userController = new UserController();
            app.get('/users', UserController.userController.findAllUsers);
            app.get('/users/:userid', UserController.userController.findUserById);
            app.post('/users', UserController.userController.createUser);
            app.delete('/users/:userid', UserController.userController.deleteUser);
            app.put('/users/:userid', UserController.userController.updateUser);

            //  For testing
            app.get("/users/create",
                UserController.userController.createUser);
            app.get("/users/id/:uid/delete",
                UserController.userController.deleteUser);
            app.get("/users/username/:username/delete",
                UserController.userController.deleteUsersByUsername);
            app.get("/users/delete",
                UserController.userController.deleteAllUsers);
        }
        return UserController.userController;
    }

    private UserController() {}

    /**
     * Retrieves all users from the database
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the users objects
     */
    findAllUsers = (req: Request, res: Response) =>
        UserController.userDao.findAllUsers()
            .then(users => res.json(users));

    /**
     * Retrieves a specific user from the database
     * @param {Request} req Represents request from client, including the
     * path parameters userid representing the user being fetched
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the user object
     */
    findUserById = (req: Request, res: Response) =>
        UserController.userDao.findUserById(req.params.userid)
            .then(user => res.json(user));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters user representing the user to be added
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new user that was inserted in the
     * database
     */
    createUser = (req: Request, res: Response) =>
        UserController.userDao.createUser(req.body)
            .then(user => res.json(user));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid representing the user being deleted
     * @param {Response} res Represents response to client, including status
     * on whether deleting the user was successful or not
     */
    deleteUser = (req: Request, res: Response) =>
        UserController.userDao.deleteUser(req.params.userid)
            .then(status => res.json(status));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid representing the user being updated
     * @param {Response} res Represents response to client, including status
     * on whether updating the user was successful or not
     */
    updateUser = (req: Request, res: Response) =>
        UserController.userDao.updateUser(req.params.userid, req.body)
            .then(status => res.json(status));

    deleteAllUsers = (req: Request, res: Response) =>
        UserController.userDao.deleteAllUsers()
            .then((status) => res.send(status));

    deleteUsersByUsername = (req: Request, res: Response) =>
        UserController.userDao.deleteUsersByUsername(req.params.username)
            .then(status => res.send(status));
}
