/**
 * @file Controller RESTful Web service API for tuits resource
 */
import {Request, Response, Express} from "express";
import TuitDao from "../../daos/tuits/TuitDao";
import TuitControllerI from "../../interfaces/tuits/TuitController";

/**
 * @class TuitController Implements RESTful Web service API for tuits resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /tuits to retrieve all the tuits
 *     </li>
 *     <li>GET /tuits/:tuitid to retrieve a specific tuit
 *     </li>
 *     <li>GET /users/:userid/tuits to retrieve all the tuits of the user
 *     </li>
 *     <li>POST /tuits to record that a user posts a tuit
 *     </li>
 *     <li>DELETE /tuits/:tuitid to record that a user
 *     deletes a tuit</li>
 *     <li>PUT /tuits/:tuitid to record that a user
 *     updates a tuit</li>
 * </ul>
 * @property {TuitDao} tuitDao Singleton DAO implementing tuits CRUD operations
 * @property {TuitController} tuitController Singleton controller implementing
 * RESTful Web service API
 */
export default class TuitController implements TuitControllerI {

    private static tuitController: TuitController | null = null;
    private static tuitDao: TuitDao = TuitDao.getInstance();

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return TuitController
     */
    public static getInstance = (app: Express): TuitController => {
        if(TuitController.tuitController === null) {
            TuitController.tuitController = new TuitController();

            app.get('/tuits', TuitController.tuitController.findAllTuits);
            app.get('/tuits/:tuitid', TuitController.tuitController.findTuitById);
            app.get('/users/:userid/tuits', TuitController.tuitController.findTuitsByUser);
            app.post('/tuits', TuitController.tuitController.createTuit);
            app.delete('/tuits/:tuitid', TuitController.tuitController.deleteTuit);
            app.put('/tuits/:tuitid', TuitController.tuitController.updateTuit);

            //  for testing
            app.delete('/tuits/username/:postedby/delete', TuitController.tuitController.deleteTuitsByPostedBy);
        }
        return TuitController.tuitController;
    }

    private TuitController() {}

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tuit representing the tuit to be posted
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new tuit that was inserted in the
     * database
     */
    createTuit = (req: Request, res: Response) => {
        TuitController.tuitDao.createTuit(req.body)
            .then(tuit => res.json(tuit))
};

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tuitid representing the tuit being deleted
     * @param {Response} res Represents response to client, including status
     * on whether deleting the tuit was successful or not
     */
    deleteTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.deleteTuit(req.params.tuitid)
            .then(status => res.json(status));

    /**
     * Retrieves all tuits from the database
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects
     */
    findAllTuits = (req: Request, res: Response) =>
        TuitController.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));

    /**
     * Retrieves a specific tuit from the database
     * @param {Request} req Represents request from client, including the
     * path parameters tuitid representing the tuit being fetched
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the tuit object
     */
    findTuitById = (req: Request, res: Response) =>
        TuitController.tuitDao.findTuitById(req.params.tuitid)
            .then(tuit => res.json(tuit));

    /**
     * Retrieves all tuits that a user posted from the database
     * @param {Request} req Represents request from client, including the path
     * parameter userid representing the user who posted the tuits
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects that were posted
     */
    findTuitsByUser = (req: Request, res: Response) =>
        TuitController.tuitDao.findTuitsByUser(req.params.userid)
            .then(tuits => res.json(tuits));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tuitid representing the tuit being updated
     * @param {Response} res Represents response to client, including status
     * on whether updating the tuit was successful or not
     */
    updateTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.updateTuit(req.params.tuitid, req.body)
            .then(status => res.json(status));

    deleteTuitsByPostedBy = (req: Request, res: Response) =>
        TuitController.tuitDao.deleteTuitsByPostedBy(req.params.postedby)
            .then(status => res.send(status));
}