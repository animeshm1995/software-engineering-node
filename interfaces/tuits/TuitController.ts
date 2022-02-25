/**
 * @file Declares API for Tuits related controller methods
 */
import {Request, Response} from "express";

export default interface TuitControllerI {

    /**
     * Retrieves all tuits from the database
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects
     */
    findAllTuits(req: Request, res: Response): void;

    /**
     * Retrieves a specific tuit from the database
     * @param {Request} req Represents request from client, including the
     * path parameters tuitid representing the tuit being fetched
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the tuit object
     */
    findTuitById(req: Request, res: Response): void;

    /**
     * Retrieves all tuits that a user posted from the database
     * @param {Request} req Represents request from client, including the path
     * parameter userid representing the user who posted the tuits
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects that were posted
     */
    findTuitsByUser(req: Request, res: Response): void;

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tuit representing the tuit to be posted
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new tuit that was inserted in the
     * database
     */
    createTuit(req: Request, res: Response): void;

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tuitid representing the tuit being updated
     * @param {Response} res Represents response to client, including status
     * on whether updating the tuit was successful or not
     */
    updateTuit(req: Request, res: Response): void;

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tuitid representing the tuit being deleted
     * @param {Response} res Represents response to client, including status
     * on whether deleting the tuit was successful or not
     */
    deleteTuit(req: Request, res: Response): void;
}
