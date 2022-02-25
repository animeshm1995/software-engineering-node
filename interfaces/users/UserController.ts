/**
 * @file Declares API for Users related controller methods
 */
import {Request, Response} from "express";

export default interface UserControllerI {

    /**
     * Retrieves all users from the database
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the users objects
     */
    findAllUsers(req: Request, res: Response): void;

    /**
     * Retrieves a specific user from the database
     * @param {Request} req Represents request from client, including the
     * path parameters userid representing the user being fetched
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the user object
     */
    findUserById(req: Request, res: Response): void;

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters user representing the user to be added
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new user that was inserted in the
     * database
     */
    createUser(req: Request, res: Response): void;

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid representing the user being deleted
     * @param {Response} res Represents response to client, including status
     * on whether deleting the user was successful or not
     */
    deleteUser(req: Request, res: Response): void;

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid representing the user being updated
     * @param {Response} res Represents response to client, including status
     * on whether updating the user was successful or not
     */
    updateUser(req: Request, res: Response): void;
}
